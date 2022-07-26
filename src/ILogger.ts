export default interface ILogger {
  debug(debug: any): void;
  info(info: any): void;
  warn(info: any): void;
}

export const ILoggerSymbol = Symbol('ILogger');
