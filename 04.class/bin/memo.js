#!/usr/bin/env node
'use strict'

const Setup = require('./setup')
const Command = require('../lib/command')
const UI = require('../lib/ui')

const { params, repository } = Setup.exec()
const cmd = new Command(repository)
const ui = new UI(repository)

let message = ''
switch (true) {
  case params.l:
    cmd.index()

    break
  case params.r:
    message = 'Choose a note you want to see'
    ui.select(message).then((id) => {
      cmd.show(id)
    })

    break
  case params.d:
    message = 'Choose a note you want to delete'
    ui.select(message).then((id) => {
      cmd.destroy(id)
    })

    break
  default:
    ui.input().then((content) => {
      cmd.create(content)
    }).catch((error) => {
      throw error
    })

    break
}
