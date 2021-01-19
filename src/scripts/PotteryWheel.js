let nextId = 0;

export const makePottery = (shape, weight, height) => {
  nextId++;

  return {
    id: nextId,
    shape,
    weight,
    height,
  };
};
