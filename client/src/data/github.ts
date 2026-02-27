export const GITHUB_USERNAME = "msmall2691-eng";
export const GITHUB_CACHE_TTL = 10 * 60 * 1000;

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  visibility: string;
  updated_at: string;
}

export interface GitHubUser {
  public_repos: number;
  html_url: string;
}

export const langColors: Record<string, string> = {
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

export function formatUpdatedAgo(dateStr: string): string {
  const now = Date.now();
  const updated = new Date(dateStr).getTime();
  const diffMs = now - updated;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Updated today";
  if (diffDays === 1) return "Updated 1 day ago";
  if (diffDays < 30) return `Updated ${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return "Updated 1 month ago";
  return `Updated ${diffMonths} months ago`;
}

export async function fetchGitHubData(): Promise<{ repos: GitHubRepo[]; totalRepos: number }> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=30&sort=updated`),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error("Failed to fetch GitHub data");
  const userData: GitHubUser = await userRes.json();
  const reposData: GitHubRepo[] = await reposRes.json();
  return { repos: reposData, totalRepos: userData.public_repos };
}
