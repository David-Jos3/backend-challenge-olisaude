import { HealthProblemRepository } from './../health-problem-repository';
import { HealthProblem } from './../../entities/health-problem';
import { prisma } from '@/lib/prisma';

export class PrismaHealthProblemRepository implements HealthProblemRepository {
 async create(healthProblem: HealthProblem) {
    const healthProblemCreated = await  prisma.healthProblem.create({
      data: {
        id: healthProblem.id.toString(),
        name: healthProblem.name,
        severityLevel: healthProblem.severity,
        client: {
          connect: {
            id: healthProblem.clientId,
          },
        },
      },
    })
    return new HealthProblem({  
      name: healthProblemCreated.name,
      severity: healthProblemCreated.severityLevel,
      clientId: healthProblemCreated.clientId,
    })
  }

}