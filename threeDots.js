const ages1 = [12,13,34,54,23];
const ages2 = [23,42,52,34,23,45];
const ages3 = [24,54,34,34,32];
// const allAges = ages1.concat(ages2).concat(5).concat(ages3);
// es6 advanced
const allAges = [...ages1, ...ages2, 5, ...ages3];
console.log(allAges);

const zayan = 250;
const jihan = 450;
const ferdous = 300;

const takaPoisha = [3000,4000,2500,5000,3600];

// const maximum = Math.max(zayan, jihan, ferdous);
const maximum = Math.max(...takaPoisha);
console.log(maximum);