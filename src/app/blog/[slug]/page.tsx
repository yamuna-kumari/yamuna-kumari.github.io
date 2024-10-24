import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "building-scalable-microservices-nodejs",
    title: "Building Scalable Microservices with Node.js",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Microservices", "Node.js", "Architecture"],
    content: `
      Building scalable microservices with Node.js requires careful consideration of various aspects including service boundaries, communication patterns, and deployment strategies.

      ## Key Considerations

      1. Service Boundaries
         - Define clear domain boundaries
         - Ensure loose coupling between services
         - Maintain data autonomy

      2. Communication Patterns
         - Choose between sync and async communication
         - Implement reliable message queues
         - Handle partial failures gracefully

      3. Deployment and Scaling
         - Containerize your services
         - Implement automated CI/CD pipelines
         - Monitor service health and performance

      ## Best Practices

      - Use TypeScript for better maintainability
      - Implement proper error handling
      - Set up comprehensive monitoring
      - Design for failure
      - Document your APIs
    `,
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    date: "2024-03-10",
    readTime: "10 min read",
    tags: ["React", "Performance", "Frontend"],
    content: `
      Optimizing React applications is crucial for providing a smooth user experience. Here are some key techniques to improve your React app's performance.

      ## Optimization Techniques

      1. Code Splitting
         - Use dynamic imports
         - Implement route-based splitting
         - Lazy load components

      2. Memoization
         - Use React.memo wisely
         - Implement useMemo and useCallback
         - Optimize context usage

      3. Virtual DOM Optimization
         - Keep component tree shallow
         - Use proper key props
         - Avoid unnecessary renders

      ## Monitoring Performance

      - Use React Developer Tools
      - Implement performance monitoring
      - Track key metrics
    `,
  },
  {
    slug: "devops-best-practices",
    title: "DevOps Best Practices for Modern Teams",
    date: "2024-03-05",
    readTime: "12 min read",
    tags: ["DevOps", "CI/CD", "Automation"],
    content: `
      Modern DevOps practices help teams deliver software faster and more reliably. Here's a comprehensive guide to implementing DevOps in your organization.

      ## Core Practices

      1. Continuous Integration
         - Automated testing
         - Code quality checks
         - Regular integration

      2. Continuous Deployment
         - Automated deployments
         - Infrastructure as Code
         - Rolling updates

      3. Monitoring and Feedback
         - Real-time monitoring
         - Log aggregation
         - Performance metrics

      ## Implementation Strategy

      - Start small and iterate
      - Focus on automation
      - Foster collaboration
      - Measure and improve
    `,
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container px-4">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <Card className="p-8">
          <article>
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-6 text-4xl font-bold">{post.title}</h1>

            <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-neutral max-w-none dark:prose-invert">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Card>
      </div>
    </main>
  );
}
