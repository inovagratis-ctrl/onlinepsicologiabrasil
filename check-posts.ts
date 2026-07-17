import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.blogPost.findMany({ select: { id: true, title: true, createdAt: true } });
  console.log('Posts:', posts.length);
  console.log(posts);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });