import { Client } from '@/entities/client';
import { ClientRepository } from './../client-repository';
import { prisma } from '@/lib/prisma';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { HealthProblem } from '@/entities/health-problem';

export class PrismaClientRepository implements ClientRepository {
  async create(client: Client) {
    const createdClient = await prisma.client.create({
      data: {
        id: client.id.toString(),
        name: client.name,
        sex: client.sex,
        birthDate: client.birthDate,
      }
    });
    return new Client({
      name: createdClient.name,
      sex: createdClient.sex,
      birthDate: new Date(createdClient.birthDate),
      createdAt: new Date(createdClient.createdAt),
      updatedAt: new Date(createdClient.updatedAt),
    }, new UniqueEntityID(createdClient.id));
  }

  async findById(id: string) {
    const client = await prisma.client.findUnique({
      where: { id },
      include: {
        healthProblems: true
      }
    });
    if (!client) {
      return null;
    }
    
    return new Client({
      name: client.name,
      sex: client.sex,
      birthDate: new Date(client.birthDate),
      createdAt: new Date(client.createdAt),
      updatedAt: new Date(client.updatedAt),
      healthProblems: client.healthProblems.map(problem => new HealthProblem({
        clientId: problem.id,
        name: problem.name,
        severity: problem.severityLevel
      }))
    }, new UniqueEntityID(client.id));
  }

  async findAll() {
    const clients = await prisma.client.findMany({
      include: {
        healthProblems: true
      }
    });

    if (!clients) {
      return null;
    }

    return clients.map(client => new Client({
      name: client.name,
      sex: client.sex,
      birthDate: new Date(client.birthDate),
      createdAt: new Date(client.createdAt),
      updatedAt: new Date(client.updatedAt),
      healthProblems: client.healthProblems.map(problem => new HealthProblem({
        clientId: problem.id,
        name: problem.name,
        severity: problem.severityLevel
      })),
    }, new UniqueEntityID(client.id)));
  }

  async delete(id: string) {
    await prisma.client.delete({ where: { id } });
  }

  async update(client: Client) {
    await prisma.client.update({
      where: { id: client.id.toString() },
      data: {
        name: client.name,
        sex: client.sex,
        birthDate: client.birthDate.toISOString(),
      }
    });
  }
}
