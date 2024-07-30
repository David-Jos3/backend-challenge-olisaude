import { IHttpContext } from "@/http/interfaces/http-context";
import { Request } from "@/http/interfaces/request";
import {FastifyRequest ,FastifyReply} from "fastify";

export class FastifyAdapter implements IHttpContext {

  constructor(private request: FastifyRequest, private reply: FastifyReply) {}
  getRequest(): Request {
   return this.request
  }
  send(status: number, data: any): void {
   this.reply.status(status).send(data)
  }

  
}