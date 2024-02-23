# jest-random-mock

> Mock `Math.random` when run unit test cases with jest, output deterministic random number.

[![Build Status](https://github.com/hustcc/jest-random-mock/workflows/build/badge.svg)](https://github.com/hustcc/jest-random-mock/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/jest-random-mock/badge.svg?branch=master)](https://coveralls.io/github/hustcc/jest-random-mock)
[![npm](https://img.shields.io/npm/v/jest-random-mock.svg)](https://www.npmjs.com/package/jest-random-mock)
[![npm](https://img.shields.io/npm/dm/jest-random-mock.svg)](https://www.npmjs.com/package/jest-random-mock)


## Install

This should only be installed as a development dependency (`devDependencies`) as it is only designed for testing.

```bash
$ npm i --save-dev jest-random-mock
```

## Usage

> Use the only `3 api` for test cases.

 - `mock()`: Mocks the Math.random, with deterministic random function.
 - `clear()`: shut down the mock system, use original Math.random.

```js
import { mock, clear } from "jest-random-mock";

beforeEach(() => {
  mock();
});

test("your test cases", () => {
  mock();
  const r1 = Math.random();
  clear();

  mock();
  const r2 = Math.random();
  clear();

  // expect r1 should be same with r2.
});

afterEach(() => {
  clear();
});
```


## Random distribution

![image](https://github.com/hustcc/jest-random-mock/assets/7856674/a2601adf-984c-4ecc-aa8f-d247a2ab6141)

```ts
import { Chart } from "@antv/g2";
import { createDeterministicRandom } from "jest-random-mock";

const random = createDeterministicRandom();

const chart = new Chart({
  container: "container",
  autoFit: true,
  theme: "academy",
});

const flex = chart
  .spaceFlex()
  .attr("direction", "row")
  .attr("ratio", [1, 1, 1]);

const TIMES = [100, 1000, 10000];

TIMES.forEach((time) => {
  const data = new Array(time).fill(0).map(() => ({ v: random() }));
  flex
    .rect()
    .data(data)
    .encode("x", "v")
    .encode("color", "steelblue")
    .transform({ type: "binX", y: "count", thresholds: 10 })
    .style("inset", 0.5)
    .axis("x", { title: false })
    .axis("y", { title: `${time} times Radnom` });
});

chart.render();
```


## License

MIT@[hustcc](https://github.com/hustcc).
