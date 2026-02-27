import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Terminal, Send } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { SectionHeader } from "./shared";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="contact"
      className="py-24"
      style={{ scrollMarginTop: "64px" }}
      data-testid="section-contact"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="$ ./contact.exe" title="Get in Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border border-border bg-card rounded-md p-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-muted-foreground text-[12px] font-mono">contact_info.json</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed" data-testid="contact-json">
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">1</span>
                <span className="text-foreground">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">2</span>
                <span>{"  "}<span className="text-primary">"status"</span>: <span className="text-green-400">"{contactInfo.status}"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">3</span>
                <span>{"  "}<span className="text-primary">"email"</span>: <span className="text-green-400">"<a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">4</span>
                <span>{"  "}<span className="text-primary">"location"</span>: <span className="text-green-400">"{contactInfo.location}"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">5</span>
                <span>{"  "}<span className="text-primary">"socials"</span>: {"{"}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">6</span>
                <span>{"    "}<span className="text-primary">"github"</span>: <span className="text-green-400">"<a href="https://github.com/msmall2691-eng" target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.socials.github}</a>"</span></span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">7</span>
                <span>{"  }"}</span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4 select-none">8</span>
                <span className="text-foreground">{"}"}</span>
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card rounded-md p-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-muted-foreground text-[12px] font-mono">sendMessage.ts</span>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div>
                  <label className="font-mono text-muted-foreground text-[12px] mb-1.5 block">
                    <span className="text-purple-400">const</span> name =
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='"Your name"'
                    className="w-full bg-accent border border-border rounded-md px-3 py-2 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="font-mono text-muted-foreground text-[12px] mb-1.5 block">
                    <span className="text-purple-400">const</span> email =
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder='"you@example.com"'
                    className="w-full bg-accent border border-border rounded-md px-3 py-2 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="font-mono text-muted-foreground text-[12px] mb-1.5 block">
                    <span className="text-purple-400">const</span> message =
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="`Your message here...`"
                    rows={4}
                    className="w-full bg-accent border border-border rounded-md px-3 py-2 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full rounded-md font-mono"
                  onClick={() => {
                    if (formData.name && formData.email && formData.message) {
                      window.location.href = `mailto:megan.small@maine.edu?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
                    }
                  }}
                  data-testid="button-send"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Run Script
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
