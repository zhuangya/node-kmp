const searchByKMP = require('./');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const longPattern = `
70a5ea909d65dc0285738b9e2889970e6db5cb6a8e988ba55b7f2e1b839b3d48
5bba87165231f6c7309c170f10eda7d0a4d8c5c1a4ca4c26bb35e4dc2d1b414e
efd2511da8d46d7b482b20af6535d88a22110d1e500d6647ae9742dd0105d7c6
a21569ebed9021d47c628773a63561cd880eaa2ab339926070ea02fce486a94d
ced2310a74283c261373d172500945ede9bda745d9c193e33ca8606af0bf7713
`;

const longText = `${longPattern.substr(0, 50)}there-is-no-spoon${longPattern}`;

suite.add('KMP', () => {
  searchByKMP(longText, longPattern);
}).add('naive', () => {
  naive(longText, longPattern);
}).on('cycle', event => {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();

function naive(s, p) {
  let j = 0;
  const result = [];

  const m = s.length;
  const n = p.length;

  for (let i = 0; i < m; i++) {
    let matched = 0;
    for (let j = 0; j < n; j++) {
      if(s[i + j] === p[j]) {
        matched = matched + 1;
      } else {
        break;
      }
    }

    if (matched === n) {
      result.push(i);
    }
  }

  return result;
}
