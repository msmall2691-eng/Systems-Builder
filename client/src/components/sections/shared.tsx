export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12">
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
