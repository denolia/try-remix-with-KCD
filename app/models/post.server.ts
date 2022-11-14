import { prisma } from "~/db.server";

export async function getPostListings() {
  return prisma.post.findMany({ select: { title: true, slug: true } });
}

export async function getPosts() {
  return prisma.post.findMany();
}
export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}
