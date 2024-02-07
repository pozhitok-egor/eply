export const getColorValues = (color: string) => {
  let r, g, b, a;

  if (color.startsWith('#')) {
    color = color.slice(1);
    r = parseInt(color.substring(0, 2), 16);
    g = parseInt(color.substring(2, 4), 16);
    b = parseInt(color.substring(4, 6), 16);
    a = 255; // Default alpha value for hex
  } else if (color.startsWith('rgb(') && color.endsWith(')')) {
    const rgbValues = color
      .substring(4, color.length - 1)
      .split(',')
      .map((value: string) => parseInt(value.trim(), 10));

    [r, g, b] = rgbValues;
    a = 255; // Default alpha value for rgb
  } else if (color.startsWith('rgba(') && color.endsWith(')')) {
    const rgbaValues = color
      .substring(5, color.length - 1)
      .split(',')
      .map((value: string, index: number) =>
        index === 3 ? parseFloat(value.trim()) : parseInt(value.trim(), 10),
      );

    [r, g, b, a] = rgbaValues;
  } else {
    console.error('Invalid color format');
    return null;
  }

  if (
    r < 0 ||
    r > 255 ||
    g < 0 ||
    g > 255 ||
    b < 0 ||
    b > 255 ||
    a < 0 ||
    a > 255
  ) {
    console.error('Invalid color values');
    return null;
  }

  return { r, g, b, a };
};
