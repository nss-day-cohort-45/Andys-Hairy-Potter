import { usePottery } from './PotteryCatalog.js';

export const PotteryList = () => {
  const pottery = usePottery();
  return pottery.map(PotteryHtmlRep).join('');
};


const PotteryHtmlRep = (pot) => {
  return `
  <section class="pottery" id="pottery--${pot.id}">
      <h2 class="pottery__shape">${pot.shape}</h2>
      <div class="pottery__properties">
          Item weighs ${pot.weight} grams and is ${pot.height} cm in height
      </div>
      <div class="pottery__price">
          Price is $${pot.price}
      </div>
  </section>`;
}