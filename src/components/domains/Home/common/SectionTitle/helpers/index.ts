export const splitText = (text: string): { id: string; char: string }[] =>
  text.split("").map((char, i) => ({
    id: `${i}-${char}`,
    char: char === " " ? "\u00A0" : char,
  }));
