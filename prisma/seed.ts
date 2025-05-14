// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const invoice = await prisma.invoice.upsert({
    where: { id: 1 },
    update: {},
    create: {
      client_name: 'Teste',
      value: 1000,
    },
  });

  const cashUp = await prisma.cashUp.upsert({
    where: { id: 1 },
    update: {},
    create: {
      pix: 1050,
      card: 2050,
      others: 3050,
      date: '25/05/2025',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
