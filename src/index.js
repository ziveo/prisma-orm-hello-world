import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({ log: ['query', 'info'] } );
// const prisma = new PrismaClient({ log: ['query'] } );
const prisma = new PrismaClient();

const users = await prisma.User.findMany({
  where: {
  // id: 2
    id: {
      gte: 1,
    },
  },
  orderBy: {
    id: 'desc',
  },
});

console.log(users);
