// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { PotteryList } from './PotteryList.js';


// Make 5 pieces of pottery at the wheel

const pottery = [
  makePottery('mug', 12, 18),
  makePottery('bowl', 209, 33),
  makePottery('vase', 2, 1),
  makePottery('mask', 933, 6),
  makePottery('platter', 12, 30),
];

for (const pot of pottery) {
  console.log(pot);
}


// Fire each piece of pottery in the kiln

const temps = [1500, 2200, 2000, 3000, 10];
const baked = pottery.map((pot, i) => firePottery(pot, temps[i]));

for (const pot of baked) {
  console.log(pot);
}



// Determine which ones should be sold, and their price

const toSellOrNot = baked.map(toSellOrNotToSell);
for (const pot of toSellOrNot) {
  console.log(pot);
}


// Invoke the component function that renders the HTML list

const el = document.querySelector('.potteryList');
el.innerHTML = PotteryList();