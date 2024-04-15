import pino from 'pino';
import dayjs from 'dayjs';

/*
const log = logger({
    prettyPrint:true,
    base: {
        pid:false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
})
*/

const transport = pino.transport({
    target:'pino-pretty',
    options: { colorize: false}
})

const log = pino({
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
}, transport );

export default log;