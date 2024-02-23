import { mock, clear, createDeterministicRandom } from '../src';

describe('jest-random-mock', () => {
  test('should generate a deterministic random number between 0 and 1, ', () => {
    const r1 = createDeterministicRandom();
    const r2 = createDeterministicRandom();

    expect(new Array(100).fill(0).map(r1)).toEqual(new Array(100).fill(0).map(r2));
    expect(r1()).toBeGreaterThanOrEqual(0);
    expect(r1()).toBeLessThan(1);
  });

  test('mock and clear', () => {
    mock();
    const r1 = new Array(100).fill(0).map(Math.random);
    clear();

    mock();
    const r2 = new Array(100).fill(0).map(Math.random);
    clear();

    expect(r1).toEqual(r2);
    expect(r1.every(v => v >= 0 && v < 1)).toBe(true);
  })
});
