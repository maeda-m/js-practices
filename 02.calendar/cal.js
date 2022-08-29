#!/usr/bin/env node
'use strict'

const parseArgs = require('minimist')
const Calendar = require('./calendar')

const today = new Date()
const argv = parseArgs(process.argv, {
  default: {
    y: today.getFullYear(),
    m: today.getMonth() + 1
  }
})

const cal = new Calendar(argv.y, argv.m)
console.info(cal.show())
