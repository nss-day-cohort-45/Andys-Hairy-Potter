const pottery = [];

export const usePottery = () => pottery.slice();

export const toSellOrNotToSell = (pot) => {
  if (pot.cracked) {
    return pot;
  }

  if (pot.weight < 6) {
    pot.price = 20;
  } else {
    pot.price = 40;
  }

  pottery.push(pot);
  return pot;
};
