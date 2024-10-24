import { BlogList } from "@/components/sections/blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Senior Software Engineer Portfolio",
  description:
    "Technical articles and insights about software development, architecture, and best practices.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Blog</h1>
        <BlogList />
      </div>
    </main>
  );
}
