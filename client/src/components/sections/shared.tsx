export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12 animate-on-scroll">
      <p className="font-mono text-primary text-sm mb-3" data-testid={`tag-${tag.toLowerCase().replace(/[^a-z]/g, "")}`}>
        {tag}
      </p>
      <h2
        className="text-foreground font-bold"
        style={{ fontSize: "36px", lineHeight: "1.2" }}
      >
        {title}
      </h2>
    </div>
  );
}
