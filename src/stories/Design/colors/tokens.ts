import tokens from './design-tokens.tokens.json';

function parsePalette(id: string): Record<string, string> {
  const palette: Record<string, string> = {};
  for (let i = 10; i <= 150; i += 10) {
    const name = `${id}${i}`;
    const key = `${id}-${i}`;
    palette[name] = (tokens.color as any).tokens[key]?.value || '#ffffffff';
  }
  return palette;
}

export const Palettes = {
  'steel': parsePalette('steel'),
  'red': parsePalette('red'),
  'blue': parsePalette('blue'),
  'green': parsePalette('green'),
  'teal': parsePalette('teal'),
  'yellow': parsePalette('yellow'),
  'orange': parsePalette('orange'),
  'purple': parsePalette('purple'),
}

export const SemanticLightActive = {
  'Primary': Palettes.blue.blue110,
  'PrimaryHover': Palettes.blue.blue70,
  'Subtitle': Palettes.blue.blue20,
  'Subtitle2': Palettes.blue.blue30,
  'Disabled': Palettes.steel.steel70,
};

export const SemanticLightContainers = {
  'Well': Palettes.steel.steel130,
};

export const SemanticLightContent = {
  'Primary': Palettes.steel.steel140,
  'Secondary': Palettes.steel.steel110,
};