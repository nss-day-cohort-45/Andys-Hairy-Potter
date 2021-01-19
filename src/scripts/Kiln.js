export const firePottery = (pot, temp) => {
  pot.fired = true;

  if (temp > 2200) {
    pot.cracked = true;
  } else {
    pot.cracked = false;
  }

  return pot;
};

export const alternative_firePottery = (pot, temp) => {
  pot.fired = true;
  pot.cracked = temp > 2200;

  return pot;
};


