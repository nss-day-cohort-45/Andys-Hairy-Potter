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

export const alternative_toSellOrNotToSell = (pot) => {
  if (pot.cracked) {
    return pot;
  }

  pot.price = pot.weight < 6 ? 20 : 40;

  pottery.push(pot);
  return pot;
};

