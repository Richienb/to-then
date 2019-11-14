import test from "ava"
import isPromise from "p-is-promise"
import toThen from "."

test("main", (t) => {
    const es6Promise = new Promise((resolve) => resolve("Hello World!")) // Regular native promise.
    t.true(isPromise(es6Promise))

    const thenPromise = toThen(es6Promise) // Then promise.
    t.true(isPromise(thenPromise))
})
