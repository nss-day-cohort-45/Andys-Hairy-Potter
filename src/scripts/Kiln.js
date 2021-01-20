export const firePottery = (pot, temp) => {
  pot.fired = true;
  pot.cracked = temp > 2200;

  return pot;
};
