export interface IGetUniqueClientController {
  findUnique(request: any, reply: any): Promise<void>;
}