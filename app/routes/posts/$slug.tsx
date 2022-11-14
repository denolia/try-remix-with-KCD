import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const post = await getPosts(slug);
  return json({ post });
};

export default function PostRoute() {
  const { post } = useLoaderData();
  console.log(post);
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
    </main>
  );
}
