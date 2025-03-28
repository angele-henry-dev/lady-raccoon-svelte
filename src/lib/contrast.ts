export const CONTRAST_RATIO_AAA     = 7;
export const CONTRAST_RATIO_AAA_L   = 4.5;
export const CONTRAST_RATIO_AA      = 4.5;
export const CONTRAST_RATIO_AA_L    = 3;

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

export function adjustBgColorAuto(bgColor: string, textColor: string): string {
    let newBgColor = bgColor;
    let tries = 0;

    while (contrastRatio(newBgColor, textColor) < CONTRAST_RATIO_AAA && tries < 50) {
        newBgColor = adjustTextColorAuto(textColor, newBgColor);
        tries++;
    }

    return newBgColor;
}

export function adjustTextColorAuto(bgColor: string, textColor: string) {
    if (!isCorrect(bgColor) || !isCorrect(textColor)) return textColor;

    const textRgb = hexToRgb(textColor);
    let ratio = contrastRatio(bgColor, textColor);
    let iterations = 0;

    const shouldDarken = contrastRatio(bgColor, "#000000") > contrastRatio(bgColor, "#ffffff");

    while (ratio < CONTRAST_RATIO_AAA && iterations < 50) {
        if (shouldDarken) {
            // To black (#000000)
            textRgb.r = Math.max(0, textRgb.r - 5);
            textRgb.g = Math.max(0, textRgb.g - 5);
            textRgb.b = Math.max(0, textRgb.b - 5);
        } else {
            // To white (#ffffff)
            textRgb.r = Math.min(255, textRgb.r + 5);
            textRgb.g = Math.min(255, textRgb.g + 5);
            textRgb.b = Math.min(255, textRgb.b + 5);
        }

        textColor = rgbToHex(textRgb.r, textRgb.g, textRgb.b);
        ratio = contrastRatio(bgColor, textColor);
        iterations++;
    }

    return textColor;
}

export function simulateColorBlindness(color: string, type: "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia"): string {
    const { r, g, b } = hexToRgb(color);

    const matrices = {
        protanopia: [
            [0.567, 0.433, 0.000],
            [0.558, 0.442, 0.000],
            [0.000, 0.242, 0.758]
        ],
        deuteranopia: [
            [0.625, 0.375, 0.000],
            [0.700, 0.300, 0.000],
            [0.000, 0.300, 0.700]
        ],
        tritanopia: [
            [0.950, 0.050, 0.000],
            [0.000, 0.433, 0.567],
            [0.000, 0.475, 0.525]
        ],
        achromatopsia: [
            [0.299, 0.587, 0.114],
            [0.299, 0.587, 0.114],
            [0.299, 0.587, 0.114]
        ]
    };

    const matrix = matrices[type];
    const newR = Math.max(0, Math.min(255, Math.round(r * matrix[0][0] + g * matrix[0][1] + b * matrix[0][2])));
    const newG = Math.max(0, Math.min(255, Math.round(r * matrix[1][0] + g * matrix[1][1] + b * matrix[1][2])));
    const newB = Math.max(0, Math.min(255, Math.round(r * matrix[2][0] + g * matrix[2][1] + b * matrix[2][2])));

    return rgbToHex(newR, newG, newB);
}
