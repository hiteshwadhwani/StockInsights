import { PrismaClient } from '../../node_modules/.prisma/client'

declare global {
  var prismaClient: PrismaClient | undefined;
}

var client = globalThis.prismaClient || new PrismaClient();

export default client;
