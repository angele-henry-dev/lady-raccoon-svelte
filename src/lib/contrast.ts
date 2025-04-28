export const CONTRAST_RATIO_AAA     = 7;
export const CONTRAST_RATIO_AAA_L   = 4.5;
export const CONTRAST_RATIO_AA      = 4.5;
export const CONTRAST_RATIO_AA_L    = 3;
export const FILTERS_DATA = {
    protanopia: {
      label: "Protanopie",
      matrix: [
        [0.567, 0.433, 0.000],
        [0.558, 0.442, 0.000],
        [0.000, 0.242, 0.758]
      ]
    },
    protanomaly: {
      label: "Protanomalie",
      matrix: [
        [0.817, 0.183, 0.000],
        [0.333, 0.667, 0.000],
        [0.000, 0.125, 0.875]
      ]
    },
    deuteranopia: {
      label: "Deutéranopie",
      matrix: [
        [0.625, 0.375, 0.000],
        [0.700, 0.300, 0.000],
        [0.000, 0.300, 0.700]
      ]
    },
    deuteranomaly: {
      label: "Deutéranomalie",
      matrix: [
        [0.800, 0.200, 0.000],
        [0.258, 0.742, 0.000],
        [0.000, 0.142, 0.858]
      ]
    },
    tritanopia: {
      label: "Tritanopie",
      matrix: [
        [0.950, 0.050, 0.000],
        [0.000, 0.433, 0.567],
        [0.000, 0.475, 0.525]
      ]
    },
    tritanomaly: {
      label: "Tritanomalie",
      matrix: [
        [0.967, 0.033, 0.000],
        [0.000, 0.733, 0.267],
        [0.000, 0.183, 0.817]
      ]
    },
    achromatopsia: {
      label: "Achromatopsie",
      matrix: [
        [0.299, 0.587, 0.114],
        [0.299, 0.587, 0.114],
        [0.299, 0.587, 0.114]
      ]
    },
    achromatomaly: {
      label: "Achromatomalie",
      matrix: [
        [0.618, 0.320, 0.062],
        [0.163, 0.775, 0.062],
        [0.163, 0.320, 0.516]
      ]
    }
} as const;
  

export function isCorrect(hex: string): boolean {
    return /^#[0-9A-Fa-f]{6}$/.test(hex);
}

// Converts a hexadecimal color to an object { r, g, b }
export function hexToRgb(hex: string) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return { r, g, b };
}

// Converts an object { r, g, b } to a hexadecimal color
export function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (c: number) => c.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Calculates the luminance of a color
export function luminance(r: number, g: number, b: number) {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Calculates the contrast ratio between two colors
export function contrastRatio(color1: string, color2: string) {
    if (!isCorrect(color1) || !isCorrect(color2)) return 0;

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

export function simulateColorBlindness(
    color: string,
    blindType: keyof typeof FILTERS_DATA
  ): string {
    const { r, g, b } = hexToRgb(color);
    const matrix = FILTERS_DATA[blindType]?.matrix ?? FILTERS_DATA.achromatopsia.matrix;
    const newR = Math.max(
      0,
      Math.min(255, Math.round(r * matrix[0][0] + g * matrix[0][1] + b * matrix[0][2]))
    );
    const newG = Math.max(
      0,
      Math.min(255, Math.round(r * matrix[1][0] + g * matrix[1][1] + b * matrix[1][2]))
    );
    const newB = Math.max(
      0,
      Math.min(255, Math.round(r * matrix[2][0] + g * matrix[2][1] + b * matrix[2][2]))
    );
  
    return rgbToHex(newR, newG, newB);
}

export function adjustTextColorAuto(bgColor: string, textColor: string): string {
  if (!isCorrect(bgColor) || !isCorrect(textColor)) return textColor;

  // On veut satisfaire AAA pour tous les cas (vision normale + tous les filtres daltonisme)
  let rgb = hexToRgb(textColor);
  let current = textColor;
  let iterations = 0;

  // On détermine la direction d’ajustement : vers noir ou blanc
  const shouldDarken = contrastRatio(bgColor, "#000000") > contrastRatio(bgColor, "#ffffff");

  function isRatioOk(bg: string, txt: string): boolean {
      // Ratio en vision normale
      if (contrastRatio(bg, txt) < CONTRAST_RATIO_AAA) return false;
      // Pour chaque filtre daltonisme, on simule et on teste
      for (const key in FILTERS_DATA) {
          const simBg = simulateColorBlindness(bg, key as keyof typeof FILTERS_DATA);
          const simTxt = simulateColorBlindness(txt, key as keyof typeof FILTERS_DATA);
          if (contrastRatio(simBg, simTxt) < CONTRAST_RATIO_AAA) return false;
      }
      return true;
  }

  // On boucle tant qu’on n’a pas atteint un ratio AAA pour tous les filtres (ou max iterations)
  while (!isRatioOk(bgColor, current) && iterations < 50) {
      if (shouldDarken) {
          rgb.r = Math.max(0, rgb.r - 5);
          rgb.g = Math.max(0, rgb.g - 5);
          rgb.b = Math.max(0, rgb.b - 5);
      } else {
          rgb.r = Math.min(255, rgb.r + 5);
          rgb.g = Math.min(255, rgb.g + 5);
          rgb.b = Math.min(255, rgb.b + 5);
      }
      current = rgbToHex(rgb.r, rgb.g, rgb.b);
      iterations++;
  }

  return current;
}

export function adjustBgColorAuto(bgColor: string, textColor: string): string {
  if (!isCorrect(bgColor) || !isCorrect(textColor)) return bgColor;

  let rgb = hexToRgb(bgColor);
  let current = bgColor;
  let iterations = 0;

  // On détermine la direction d’ajustement pour maximiser le contraste
  const shouldDarken = contrastRatio("#000000", textColor) > contrastRatio("#ffffff", textColor);

  function isRatioOk(bg: string, txt: string): boolean {
      // Test normal
      if (contrastRatio(bg, txt) < CONTRAST_RATIO_AAA) return false;
      // Test pour tous les filtres daltonisme
      for (const key in FILTERS_DATA) {
          const simBg = simulateColorBlindness(bg, key as keyof typeof FILTERS_DATA);
          const simTxt = simulateColorBlindness(txt, key as keyof typeof FILTERS_DATA);
          if (contrastRatio(simBg, simTxt) < CONTRAST_RATIO_AAA) return false;
      }
      return true;
  }

  // Boucle d’ajustement
  while (!isRatioOk(current, textColor) && iterations < 50) {
      if (shouldDarken) {
          rgb.r = Math.max(0, rgb.r - 5);
          rgb.g = Math.max(0, rgb.g - 5);
          rgb.b = Math.max(0, rgb.b - 5);
      } else {
          rgb.r = Math.min(255, rgb.r + 5);
          rgb.g = Math.min(255, rgb.g + 5);
          rgb.b = Math.min(255, rgb.b + 5);
      }
      current = rgbToHex(rgb.r, rgb.g, rgb.b);
      iterations++;
  }

  return current;
}
