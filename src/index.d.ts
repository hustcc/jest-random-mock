/**
 * Mocks the Math.random function.
 */
export declare function mock(): () => {};

/**
 * Un-mocks the Math.random function.
 */
export declare function clear(): void;

/**
 * Return a deterministic random number generator.
 */
export declare function createDeterministicRandom(): () => number;
