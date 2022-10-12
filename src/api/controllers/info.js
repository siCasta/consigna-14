import createHttpError from 'http-errors'

export const getInfo = (req, res, next) => {
    try {
        res.json({
            plataforma: process.platform,
            versionNode: process.version,
            pid: process.pid,
            carpetaProjecto: process.cwd(),
            pathEjecucion: process.execPath,
            argumentosEntrada: process.argv,
            memoriaReservada: ` ${
                Math.round(
                    (JSON.stringify(process.memoryUsage.rss()) / 1024 / 1024) *
                        100
                ) / 100
            }mb`,
        })
    } catch (e) {
        next(createHttpError(500, e))
    }
}
