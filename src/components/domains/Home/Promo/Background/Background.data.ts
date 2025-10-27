import type { TBackgroundConfig } from './type';

export const BACKGROUND_CONFIG: TBackgroundConfig = {
  hex: {
    width: 120,
    gap: 1,
    overlapRatio: 0.28,
  },
  colors: {
    honeyBgDark: '#d98a14',
    honeyBgDeep: '#d98a14',
    hexLeft: '#ffcc00',
    hexRight: '#f9d300',
  },
  glow: {
    radiusVmin: 40,
    softnessPx: 26,
    intensity: 0.24,
  },
};
