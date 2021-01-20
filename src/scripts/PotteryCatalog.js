const pottery = [];

export const usePottery = () => pottery.slice();

export const toSellOrNotToSell = (pot) => {
  if (pot.cracked) {
    return pot;
  }

  pot.price = pot.weight < 6 ? 20 : 40;

  pottery.push(pot);
  return pot;
};
