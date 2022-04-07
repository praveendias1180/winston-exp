const winston = require('winston');

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.simple(),
  defaultMeta: { service: 'user-service', username: 'Praveen' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log', level: 'info' }),
    new winston.transports.File({ filename: 'all.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

logger.log('silly', "127.0.0.1 - there's no place like home");
logger.log('debug', "127.0.0.1 - there's no place like home");
logger.log('verbose', "127.0.0.1 - there's no place like home");
logger.log('info', "127.0.0.1 - there's no place like home");
logger.log('warn', "127.0.0.1 - there's no place like home");
logger.log('error', "127.0.0.1 - there's no place like home");
logger.info("127.0.0.1 - there's no place like home");
logger.warn("127.0.0.1 - there's no place like home");
logger.error("127.0.0.1 - there's no place like home");