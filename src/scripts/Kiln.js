export const firePottery = (pot, temp) => {
  pot.fired = true;

  if (temp > 2200) {
    pot.cracked = true;
  } else {
    pot.cracked = false;
  }

  return pot;
};
