import { useLayoutEffect, useState } from "preact/hooks";

const colors = ["#fca5a5", "#fdba74", "#93c5fd", "#86efac", "#86efac"] as const;

export type Colors = (typeof colors)[number];

export const BACKGROUND_HEX_OPACITY = "20";
const DEFAULT_COLOR = colors[0];

const useColor = (value: number) => {
  const [color, setColor] = useState<string>(DEFAULT_COLOR);

  useLayoutEffect(() => {
    const colorIndex = Math.floor(value / 10) - 1;

    if (colorIndex < 0 || colorIndex > colors.length) {
      setColor(DEFAULT_COLOR);
    } else {
      setColor(colors[colorIndex]);
    }
  }, [value]);

  return color;
};

export default useColor;
