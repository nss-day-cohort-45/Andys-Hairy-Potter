// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { PotteryList } from './PotteryList.js';


// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 12, 18);
let bowl = makePottery('bowl', 209, 33);
let vase = makePottery('vase', 2, 1);
let maskForMyCultRitual = makePottery('mask', 933, 6);
let platter = makePottery('platter', 12, 30);


console.log('--fresh pots---')
console.log('mug', mug);
console.log('bowl', bowl);
console.log('vase', vase);
console.log('maskForMyCultRitual', maskForMyCultRitual);
console.log('platter', platter);


// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2000);
bowl = firePottery(bowl, 100);
vase = firePottery(vase, 4000);
maskForMyCultRitual = firePottery(maskForMyCultRitual, 1000);
platter = firePottery(platter, 6000);

console.log('--backed pots---')
console.log('mug', mug);
console.log('bowl', bowl);
console.log('vase', vase);
console.log('maskForMyCultRitual', maskForMyCultRitual);
console.log('platter', platter);


// Determine which ones should be sold, and their price

mug = toSellOrNotToSell(mug);
bowl = toSellOrNotToSell(bowl);
vase = toSellOrNotToSell(vase);
maskForMyCultRitual = toSellOrNotToSell(maskForMyCultRitual);
platter = toSellOrNotToSell(platter);

console.log('--to sell or not to sell? that is the question---')
console.log('mug', mug);
console.log('bowl', bowl);
console.log('vase', vase);
console.log('maskForMyCultRitual', maskForMyCultRitual);
console.log('platter', platter);


// Invoke the component function that renders the HTML list

const el = document.querySelector('.potteryList');
el.innerHTML = PotteryList();