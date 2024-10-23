'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement scalable microservices architecture using Node.js and modern best practices.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Microservices', 'Node.js', 'Architecture'],
    slug: 'building-scalable-microservices-nodejs',
  },
  {
    id: 2,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to optimize your React applications for better performance and user experience.',
    date: '2024-03-10',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Frontend'],
    slug: 'react-performance-optimization',
  },
  {
    id: 3,
    title: 'DevOps Best Practices for Modern Teams',
    excerpt: 'Explore essential DevOps practices that help teams deliver software faster and more reliably.',
    date: '2024-03-05',
    readTime: '12 min read',
    tags: ['DevOps', 'CI/CD', 'Automation'],
    slug: 'devops-best-practices',
  },
];

export function BlogList() {
  return (
    <div className="grid gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <article>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="ml-auto">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </article>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}