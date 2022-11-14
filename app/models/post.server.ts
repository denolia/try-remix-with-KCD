import { prisma } from "~/db.server";

export async function getPostListings() {
  return prisma.post.findMany({ select: { title: true, slug: true } });
}

export async function getPosts(slug?: string) {
  if (!slug) {
    return prisma.post.findMany();
  }
  return prisma.post.findUnique({ where: { slug } });
}
