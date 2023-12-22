import rgbFromHex from '../src';

describe('outputType -> object', () => {
  it('#000 -> 0,0,0', () => {
    expect(rgbFromHex('#000')).toMatchObject({
      red: 0,
      green: 0,
      blue: 0,
    });
  });

  it('#fff -> 255,255,255', () => {
    expect(rgbFromHex('#fff')).toMatchObject({
      red: 255,
      green: 255,
      blue: 255,
    });
  });

  it('#f00 -> 255,0,0', () => {
    expect(rgbFromHex('#f00')).toMatchObject({
      red: 255,
      green: 0,
      blue: 0,
    });
  });

  it('#0f0 -> 0,255,0', () => {
    expect(rgbFromHex('#0f0')).toMatchObject({
      red: 0,
      green: 255,
      blue: 0,
    });
  });

  it('#00f -> 0,0,255', () => {
    expect(rgbFromHex('#00f')).toMatchObject({
      red: 0,
      green: 0,
      blue: 255,
    });
  });

  it('#123 -> 17,34,51', () => {
    expect(rgbFromHex('#123')).toMatchObject({
      red: 17,
      green: 34,
      blue: 51,
    });
  });

  it('#123456 -> 18,52,86', () => {
    expect(rgbFromHex('#123456')).toMatchObject({
      red: 18,
      green: 52,
      blue: 86,
    });
  });
});

describe('outputType -> rgb-css', () => {
  it('#000 -> rgb(0,0,0)', () => {
    expect(rgbFromHex('#000', { outputType: 'rgb-css' })).toBe('rgb(0,0,0)');
  });

  it('#fff -> rgb(255,255,255)', () => {
    expect(rgbFromHex('#fff', { outputType: 'rgb-css' })).toBe(
      'rgb(255,255,255)'
    );
  });

  it('#f00 -> rgb(255,0,0)', () => {
    expect(rgbFromHex('#f00', { outputType: 'rgb-css' })).toBe('rgb(255,0,0)');
  });

  it('#0f0 -> rgb(0,255,0)', () => {
    expect(rgbFromHex('#0f0', { outputType: 'rgb-css' })).toBe('rgb(0,255,0)');
  });

  it('#00f -> rgb(0,0,255)', () => {
    expect(rgbFromHex('#00f', { outputType: 'rgb-css' })).toBe('rgb(0,0,255)');
  });

  it('#123 -> rgb(17,34,51)', () => {
    expect(rgbFromHex('#123', { outputType: 'rgb-css' })).toBe('rgb(17,34,51)');
  });

  it('#123456 -> rgb(18,52,86)', () => {
    expect(rgbFromHex('#123456', { outputType: 'rgb-css' })).toBe(
      'rgb(18,52,86)'
    );
  });
});

describe('outputType -> array', () => {
  it('#000 -> [0,0,0]', () => {
    expect(rgbFromHex('#000', { outputType: 'array' })).toEqual([0, 0, 0]);
  });

  it('#fff -> [255,255,255]', () => {
    expect(rgbFromHex('#fff', { outputType: 'array' })).toEqual([
      255,
      255,
      255,
    ]);
  });

  it('#f00 -> [255,0,0]', () => {
    expect(rgbFromHex('#f00', { outputType: 'array' })).toEqual([255, 0, 0]);
  });

  it('#0f0 -> [0,255,0]', () => {
    expect(rgbFromHex('#0f0', { outputType: 'array' })).toEqual([0, 255, 0]);
  });

  it('#00f -> [0,0,255]', () => {
    expect(rgbFromHex('#00f', { outputType: 'array' })).toEqual([0, 0, 255]);
  });

  it('#123 -> [17,34,51]', () => {
    expect(rgbFromHex('#123', { outputType: 'array' })).toEqual([17, 34, 51]);
  });

  it('#123456 -> [18,52,86]', () => {
    expect(rgbFromHex('#123456', { outputType: 'array' })).toEqual([
      18,
      52,
      86,
    ]);
  });
});
