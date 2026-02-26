import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Star, ArrowUpRight, Users, BookOpen, Loader2, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const GITHUB_USERNAME = "msmall2691-eng";
const CACHE_KEY = "github_portfolio_cache";
const CACHE_TTL = 10 * 60 * 1000;

interface GitHubUser {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  html_url: string;
  login: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

interface CachedData {
  user: GitHubUser;
  repos: GitHubRepo[];
  timestamp: number;
}

function getCachedData(): CachedData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CachedData = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > CACHE_TTL) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function setCachedData(user: GitHubUser, repos: GitHubRepo[]) {
  try {
    const data: CachedData = { user, repos, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {}
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `Updated ${date.toLocaleDateString("en-US", { month: "short", year: "numeric" })}`;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#701516",
  Shell: "#89E051",
  C: "#555555",
  "C++": "#F34B7D",
  "C#": "#178600",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};

function LoadingSkeleton() {
  return (
    <div data-testid="github-loading">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Skeleton className="w-24 h-24 rounded-full" />
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-56" />
            <div className="flex gap-4 mt-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-10 w-36 mt-4 rounded-md" />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="border border-[#F3F4F6] bg-white rounded-md p-6">
                <Skeleton className="h-5 w-32 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 text-center"
      data-testid="github-error"
    >
      <AlertCircle className="w-10 h-10 text-[#9CA3AF] mb-4" />
      <p className="text-[#6B7280]" style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Couldn't load GitHub data right now.
      </p>
      <p className="text-[#9CA3AF] text-[14px] mt-1">
        Please try again later.
      </p>
    </div>
  );
}

export default function GithubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = getCachedData();
    if (cached) {
      setUser(cached.user);
      setRepos(cached.repos);
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=6&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("GitHub API request failed");
        }

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
        setCachedData(userData, reposData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      id="github"
      className="bg-[#FAFAFA] py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-github"
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#417D9F] font-medium text-[14px] tracking-wide uppercase mb-3">
          Open Source
        </p>
        <h2
          className="text-[#111827] font-bold mb-4"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
          data-testid="text-github-title"
        >
          GitHub Activity
        </h2>
        <p
          className="text-[#6B7280] mb-14 max-w-xl"
          style={{ fontSize: "18px", lineHeight: "1.6" }}
        >
          My most recently updated public repositories, pulled live from GitHub.
        </p>

        {loading && <LoadingSkeleton />}
        {error && <ErrorState />}

        {!loading && !error && user && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start">
                <img
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  className="w-24 h-24 rounded-full border border-[#E5E7EB] mb-4"
                  data-testid="img-github-avatar"
                />
                <h3
                  className="text-[#111827] font-semibold mb-1"
                  style={{ fontSize: "20px" }}
                  data-testid="text-github-name"
                >
                  {user.name || user.login}
                </h3>
                <p
                  className="text-[#6B7280] text-[14px] mb-4 text-center lg:text-left"
                  data-testid="text-github-bio"
                >
                  {user.bio || `@${user.login}`}
                </p>
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center gap-1.5 text-[#6B7280] text-[14px]">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span data-testid="text-github-repos">{user.public_repos} repos</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6B7280] text-[14px]">
                    <Users className="w-3.5 h-3.5" />
                    <span data-testid="text-github-followers">{user.followers} followers</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  asChild
                  className="bg-[#417D9F] text-white border-[#417D9F] rounded-md"
                  data-testid="button-github-profile"
                >
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Profile
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <Card
                    key={repo.id}
                    className="border border-[#F3F4F6] bg-white rounded-md p-6 hover-elevate transition-all duration-200"
                    data-testid={`card-repo-${repo.id}`}
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4
                          className="text-[#111827] font-semibold text-[15px] truncate"
                          data-testid={`text-repo-name-${repo.id}`}
                        >
                          {repo.name}
                        </h4>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] flex-shrink-0 mt-0.5" />
                      </div>
                      <p
                        className="text-[#6B7280] text-[14px] mb-4 line-clamp-2"
                        style={{ lineHeight: "1.5" }}
                        data-testid={`text-repo-desc-${repo.id}`}
                      >
                        {repo.description || "No description provided."}
                      </p>
                      <div className="flex items-center gap-4 flex-wrap">
                        {repo.language && (
                          <div className="flex items-center gap-1.5 text-[13px] text-[#6B7280]">
                            <span
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: langColors[repo.language] || "#6B7280" }}
                            />
                            <span>{repo.language}</span>
                          </div>
                        )}
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1 text-[13px] text-[#6B7280]">
                            <Star className="w-3 h-3" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        <span className="text-[12px] text-[#9CA3AF]">
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {repos.length === 0 && (
                <p className="text-[#9CA3AF] text-[14px] text-center py-8">
                  No public repositories found.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}