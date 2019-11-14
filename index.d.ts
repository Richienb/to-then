import ThenPromise from "promise"

/**
 * Convert a promise to use https://github.com/then/promise.
 * @param promise The promise to convert.
 * @example
 * ```
 * const toThen = require("to-then");
 *
 * const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
 * const thenPromise = toThen(es6Promise); // Then promise.
 * ```
*/
declare function toThen<T>(promise: PromiseLike<T>): ThenPromise<T>;

export = toThen;
