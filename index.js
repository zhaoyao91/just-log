const logger = require('simple-json-logger')({logTimestamp: true})
const Chance = require('chance')

const interval = Number(process.env.INTERVAL) || 5000
const chance = new Chance()

setInterval(() => {
  logger.info('just log', {
    name: chance.name(),
    age: chance.age(),
    email: chance.email(),
    pet: chance.animal(),
    datetime: (new Date()).toString(),
  })
}, interval)

process.on('SIGINT', () => process.exit())
process.on('SIGTERM', () => process.exit())