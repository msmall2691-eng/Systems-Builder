import { Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border" data-testid="footer">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[13px] text-muted-foreground font-mono" data-testid="text-copyright">
          &lt;Meg /&gt; &mdash; Systems Engineer
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:megan.small@maine.edu" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Email" data-testid="footer-link-email">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://github.com/msmall2691-eng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="GitHub" data-testid="footer-link-github">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
