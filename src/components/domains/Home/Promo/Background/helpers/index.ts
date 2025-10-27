import type { THexDims, TGridDims } from '../type';

export const deriveHexDims = (hexWidth: number, overlapRatio: number): THexDims => {
  const width = Math.round(hexWidth);
  const height = Math.round(width * 1.1);              // пропорции как в исходнике
  const overlap = Math.round(height * overlapRatio);   // сколько «заезжает» следующий ряд
  const verticalStep = height - overlap;               // шаг по Y между рядами
  return { width, height, verticalStep, overlap };
};

export const computeGrid = (args: {
  viewportW: number;
  viewportH: number;
  dims: THexDims;
  gap: number;
}): TGridDims => {
  const { viewportW, viewportH, dims, gap } = args;
  const { width, verticalStep } = dims;

  const wWithGaps = width + gap * 2;
  const colsEven = Math.ceil((viewportW + width) / wWithGaps) + 1;
  const colsOdd  = colsEven + 1;

  const stepY = verticalStep + gap * 2;
  const rows = Math.ceil((viewportH + stepY) / stepY) + 1;

  return { rows, colsEven, colsOdd };
};
