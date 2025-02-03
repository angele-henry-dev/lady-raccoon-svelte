export const CONTRAST_RATIO_AAA   = 7;
export const CONTRAST_RATIO_AA    = 4.5;
export const CONTRAST_RATIO_AA_L  = 3;

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
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

export function adjustTextColor(bgColor: string, textColor: string) {
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

