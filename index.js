"use strict"

const convertPromise = require("convert-promise")
const ThenPromise = require("promise")

module.exports = (promise) => convertPromise(promise, ThenPromise)
