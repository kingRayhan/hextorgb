## rgb-from-hex

A simple Javascript/TypeScript package that converts hexadecimal color codes to RGB format.

### Installation

You can install the package using npm:

```bash
npm install rgb-from-hex
```

### Usage

```ts
import rgbFromHex from 'rgb-from-hex';

// Convert hex to RGB object
const rgbObject = rgbFromHex('#3498db');
console.log(rgbObject); // { red: 52, green: 152, blue: 219 }

// Convert hex to RGB CSS string
const rgbCss = rgbFromHex('#3498db', { outputType: 'rgb-css' });
console.log(rgbCss); // "rgb(52,152,219)"

// Convert hex to RGB array
const rgbArray = rgbFromHex('#3498db', { outputType: 'array' });
console.log(rgbArray); // [52, 152, 219]
```

## API

### rgbFromHex(hex, options)

Converts a hexadecimal color code to RGB format.

- **hex**: The input hexadecimal color code (e.g., `#3498db`).
- **options**: (Optional) An object with the following property:
  - **outputType**: Specifies the output type. Can be `'object'`, `'rgb-css'`, or `'array'`. Defaults to `'object'`.

Returns an RGB object with `red`, `green`, and `blue` properties, an RGB CSS string, or an RGB array, based on the specified output type.

Returns `null` if the input hex code is invalid.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
