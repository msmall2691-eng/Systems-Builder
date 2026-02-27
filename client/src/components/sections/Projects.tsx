import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowUpRight,
  Code2,
  CircleDot,
  Monitor,
  BookOpen,
  ExternalLink,
  Eye,
  AlertCircle,
  Globe,
  X,
} from "lucide-react";
import { projects, replitApps } from "@/data/projects";
import { GITHUB_USERNAME, GITHUB_CACHE_TTL, fetchGitHubData, langColors, formatUpdatedAgo } from "@/data/github";
import { SectionHeader } from "./shared";

function useGitHubData() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/github", GITHUB_USERNAME],
    queryFn: fetchGitHubData,
    staleTime: GITHUB_CACHE_TTL,
    retry: 1,
  });

  return {
    repos: data?.repos ?? [],
    totalRepos: data?.totalRepos ?? 0,
    loading: isLoading,
    error: isError,
  };
}

export default function Projects() {
  const { repos, totalRepos, loading, error } = useGitHubData();
  const [previewProject, setPreviewProject] = useState<typeof projects[0] | null>(null);

  return (
    <section
      id="projects"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-projects"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ ls -la ~/projects" title="Featured Projects" />
        <p className="text-muted-foreground/70 font-mono italic text-[13px] -mt-8 mb-8" data-testid="text-projects-tagline">
          Projects built from real operational challenges.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1" data-testid="repos-sidebar">
            <Card className="border border-border bg-card rounded-md p-0">
              <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-foreground text-[14px] font-semibold font-mono">Repositories</span>
                </div>
                {!loading && !error && (
                  <Badge variant="secondary" className="font-mono text-[11px]" data-testid="badge-repo-count">
                    {totalRepos}
                  </Badge>
                )}
              </div>

              <div className="max-h-[520px] overflow-y-auto">
                {loading && (
                  <div className="p-4 space-y-4" data-testid="repos-loading">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {error && (
                  <div className="p-6 text-center" data-testid="repos-error">
                    <AlertCircle className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-[13px] font-mono">
                      Couldn't load repos
                    </p>
                  </div>
                )}

                {!loading && !error && repos.length === 0 && (
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground text-[13px] font-mono">
                      No repositories found
                    </p>
                  </div>
                )}

                {!loading && !error && repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 border-b border-border last:border-b-0 hover-elevate transition-all duration-200"
                    data-testid={`repo-item-${repo.id}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-foreground text-[13px] font-mono font-semibold truncate" data-testid={`text-repo-name-${repo.id}`}>
                        {repo.name}
                      </span>
                      <Badge variant="outline" className="font-mono text-[10px] flex-shrink-0 no-default-hover-elevate no-default-active-elevate">
                        {repo.visibility || "public"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      {repo.language && (
                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: langColors[repo.language] || "#6B7280" }}
                          />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <span className="text-[11px] text-muted-foreground/60 font-mono">
                        {formatUpdatedAgo(repo.updated_at)}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="px-4 py-3 border-t border-border">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary text-[13px] font-mono hover:underline"
                  data-testid="link-view-all-repos"
                >
                  View all repositories
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2" data-testid="pinned-projects">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-3.5 h-3.5 text-primary" />
              <span className="text-muted-foreground text-[12px] font-mono tracking-wider uppercase">
                Pinned Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="border border-border bg-card rounded-md overflow-hidden hover-elevate transition-all duration-200 flex flex-col"
                  data-testid={`card-project-${index}`}
                >
                  <div className="px-5 py-6 flex items-center justify-center relative" style={{ background: project.gradient }}>
                    <project.icon className="w-10 h-10 text-foreground/70" />
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="outline"
                        className={`font-mono text-[10px] no-default-hover-elevate no-default-active-elevate border-foreground/20 ${
                          project.status === "Live"
                            ? "text-green-400 border-green-400/30 bg-green-400/10"
                            : "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
                        }`}
                        data-testid={`badge-status-${index}`}
                      >
                        <CircleDot className="w-2.5 h-2.5 mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className="text-foreground font-semibold text-[15px] font-mono"
                        data-testid={`text-project-title-${index}`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p
                      className="text-muted-foreground mb-4 line-clamp-4 flex-1"
                      style={{ fontSize: "13px", lineHeight: "1.6" }}
                      data-testid={`text-project-desc-${index}`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="font-mono text-[10px]"
                          data-testid={`badge-tech-${t.toLowerCase().replace(/[\s/]/g, "-")}`}
                        >
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="secondary" className="font-mono text-[10px]" data-testid={`badge-tech-overflow-${index}`}>
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {project.embedUrl && (
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-md text-[12px] font-mono flex-1"
                          onClick={() => setPreviewProject(project)}
                          data-testid={`button-preview-${index}`}
                        >
                          <Monitor className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          data-testid={`button-demo-${index}`}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-md text-[12px] font-mono w-full"
                          >
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          data-testid={`button-code-${index}`}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-md text-[12px] font-mono w-full"
                          >
                            <Code2 className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </a>
                      )}
                      {!project.demoUrl && !project.codeUrl && (
                        <Badge variant="secondary" className="font-mono text-[10px]">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6" data-testid="replit-apps-section">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span className="text-muted-foreground text-[12px] font-mono tracking-wider uppercase">
                  Replit Apps
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {replitApps.map((app, index) => (
                  <a
                    key={index}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`card-replit-app-${index}`}
                  >
                    <Card className="border border-border bg-card rounded-md p-3.5 hover-elevate transition-all duration-200 h-full">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${app.color}20` }}
                        >
                          <app.icon className="w-4 h-4" style={{ color: app.color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                            <span className="text-foreground text-[13px] font-mono font-semibold truncate" data-testid={`text-replit-app-name-${index}`}>
                              {app.name}
                            </span>
                            {app.pinned && (
                              <Badge variant="secondary" className="font-mono text-[10px] flex-shrink-0 no-default-hover-elevate no-default-active-elevate" data-testid={`badge-featured-${index}`}>
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-[11px] line-clamp-2" style={{ lineHeight: "1.5" }} data-testid={`text-replit-app-desc-${index}`}>
                            {app.description}
                          </p>
                          <span className="text-muted-foreground/50 text-[10px] font-mono mt-1 inline-block">
                            {app.account}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <a
                  href="https://replit.com/@office277"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-replit-office277"
                >
                  <Button variant="outline" size="sm" className="rounded-md text-[12px] font-mono">
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    View all @office277
                  </Button>
                </a>
                <a
                  href="https://replit.com/@info10885"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-replit-info10885"
                >
                  <Button variant="outline" size="sm" className="rounded-md text-[12px] font-mono">
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    View all @info10885
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewProject.title} Preview`}
          onClick={() => setPreviewProject(null)}
          onKeyDown={(e) => { if (e.key === "Escape") setPreviewProject(null); }}
          tabIndex={-1}
          ref={(el) => el?.focus()}
          data-testid="modal-preview-overlay"
        >
          <div
            className="w-full max-w-5xl bg-card border border-border rounded-lg overflow-hidden flex flex-col"
            style={{ height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-preview-content"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[13px] text-foreground font-semibold">
                  {previewProject.title}
                </span>
                <Badge
                  variant="outline"
                  className={`font-mono text-[10px] no-default-hover-elevate no-default-active-elevate ${
                    previewProject.status === "Live"
                      ? "text-green-400 border-green-400/30"
                      : "text-yellow-400 border-yellow-400/30"
                  }`}
                >
                  {previewProject.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                {previewProject.demoUrl && (
                  <a
                    href={previewProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="modal-button-open-tab"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[12px] font-mono"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Open in Tab
                    </Button>
                  </a>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setPreviewProject(null)}
                  data-testid="modal-button-close"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 bg-black">
              <iframe
                src={previewProject.embedUrl}
                className="w-full h-full border-0"
                title={`${previewProject.title} Preview`}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                data-testid="iframe-preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
