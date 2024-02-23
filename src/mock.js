/**
 * Created by hustcc 2024/02/22.
 * Contract: i@hust.cc
 */

import { createDeterministicRandom } from './random';

const originalRandom = Math.random;

/**
 * Mock the Math.random generator.
 */
export function mock() {
  const random = createDeterministicRandom();
  if (global.window) {
    // dom env
    global.window.Math.random = random;
  } else {
    // node / native env
    global.Math.random = random;
  }
}

/**
 * Clear the mock.
 */
export function clear() {
  if (global.window) {
    // dom env
    global.window.Math.random = originalRandom;
  } else {
    // node / native env
    global.Math.random = originalRandom;
  }
}
