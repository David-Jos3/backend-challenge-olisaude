export interface IGetHighRiskClientController {
  findHighRisk(request: any, reply: any): Promise<void>;
}