import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yamuna Kumari. All rights reserved.
          </div>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/yamuna-kumari"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/yamunakumari"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            {/* <Link
              href="https://twitter.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
