import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.todo.deleteMany()
  await prisma.todo.create({
    data: {
      title: 'todo-1'
    }
  })
  await prisma.todo.create({
    data: {
      title: 'todo-2',
      published: true
    }
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
