const colors = ["#fdba74", "#93c5fd", "#86efac", "#86efac"] as const;
const performances = ["Bajo", "Básico", "Alto", "Superior"] as const;
const DEFAULT_COLOR = colors[0];
const DEFAULT_PERFORMANCE = performances[0];

enum Performances {
  LOW,
  BASIC,
  HIGH,
  SUPERIOR,
}

const getPerformanceIndex = (average: number): Performances => {
  if (average >= 0 && average <= 34) {
    return Performances.LOW;
  } else if (average >= 35 && average <= 40) {
    return Performances.BASIC;
  } else if (average >= 41 && average <= 45) {
    return Performances.HIGH;
  } else if (average >= 46 && average <= 50) {
    return Performances.SUPERIOR;
  }

  return Performances.LOW;
};

type PerformanceProps = {
  color: (typeof colors)[number];
  performance: (typeof performances)[number];
};

export const getPerformance = (average: number): PerformanceProps => {
  const i = getPerformanceIndex(average);

  return {
    color: colors[i],
    performance: performances[i],
  };
};
