const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'silly',
  format: combine(
    label({ label: 'rangequest'}),
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service', username: 'Praveen' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log', level: 'info' }),
    new transports.File({ filename: 'all.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
        format.colorize(),
        format.simple()
    ),
  }));
}

logger.log('silly', "127.0.0.1 - welcome to rangequest");
logger.log('debug', "127.0.0.1 - welcome to rangequest");
logger.log('verbose', "127.0.0.1 - welcome to rangequest");
logger.log('info', "127.0.0.1 - welcome to rangequest");
logger.log('warn', "127.0.0.1 - welcome to rangequest");
logger.log('error', "127.0.0.1 - welcome to rangequest");
logger.info("127.0.0.1 - welcome to rangequest");
logger.warn("127.0.0.1 - welcome to rangequest");
logger.error("127.0.0.1 - welcome to rangequest");
