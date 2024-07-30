import { Request } from './request';

export interface IHttpContext {
  getRequest(): Request;
  send(status: number, data: any): void;
}
