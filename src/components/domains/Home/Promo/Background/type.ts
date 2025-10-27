export type TBackgroundConfig = {
  hex: {
    width: number;
    gap: number;
    overlapRatio: number; // доля перекрытия по вертикали (0.28 ≈ визуально как в исходнике)
  };
  colors: {
    honeyBgDark: string;
    honeyBgDeep: string;
    hexLeft: string;
    hexRight: string;
  };
  glow: {
    radiusVmin: number;
    softnessPx: number;
    intensity: number; // 0..1
  };
};

export type THexDims = {
  width: number;
  height: number;
  verticalStep: number;
  overlap: number;
};

export type TGridDims = {
  rows: number;
  colsEven: number;
  colsOdd: number;
};
