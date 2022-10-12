import { fork } from 'child_process'
import { join } from 'path'

export const getRandom = (req, res, next) => {
    const cant = req.query.cant || 10_000_000_000

    const child = fork(join(`${process.cwd()}/src/utils/addRandom.js`))

    child.send(cant)
    child.on('message', val => {
        console.log('a')
        res.json({
            suma: val,
        })
    })
}
