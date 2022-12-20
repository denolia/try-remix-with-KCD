import { Outlet } from "@remix-run/react";

export default function PostsRoute() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-600">
      There was an error loading this post:
      <pre>{error.message}</pre>
    </div>
  );
}
