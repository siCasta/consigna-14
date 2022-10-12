import minimist from 'minimist'

export const { PORT } = minimist(process.argv.slice(2), {
    alias: {
        p: 'PORT',
    },
    default: {
        p: 8080,
    },
})
