interface Rgb {
  red: number;
  green: number;
  blue: number;
}

interface Options {
  outputType?: 'object' | 'rgb-css' | 'array';
}

export default (
  hex: string,
  options: Options = { outputType: 'object' }
): Rgb | string | number[] | null => {
  // Remove the hash, if present
  hex = hex.replace(/^#/, '');

  // Ensure the hex code is valid
  const isValidHex = /^[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/g.test(hex);
  if (!isValidHex) {
    console.error('Invalid hex code');
    return null;
  }

  // Expand shorthand hex color codes to full form
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  // Parse the hex values for red, green, and blue components
  const bigint = parseInt(hex, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  // Return the RGB values
  if (options.outputType === 'rgb-css') {
    return `rgb(${red},${green},${blue})`;
  } else if (options.outputType === 'array') {
    return [red, green, blue];
  }

  return {
    red,
    green,
    blue,
  };
};
