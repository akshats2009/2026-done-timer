import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowDown, Github, Mail } from "lucide-react";

export default function App() {
  const scrollToContent = () => {
    const target = document.getElementById("about");
    if (!target) return;
    target.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase">
            Site Presentation
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://github.com/akshats2009/2026-done-timer",
                  "_blank"
                )
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/20 bg-background text-foreground"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen w-full">
          <img
            src="/hero-photo.svg"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35 dark:bg-black/45" />
          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 pt-14">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold sm:text-6xl">
                Building research and outreach for a better future.
              </h1>
              <p className="mt-5 text-base text-white/90 sm:text-lg">
                Explore our team, publications, and initiatives in one place.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={scrollToContent}
            className="absolute right-6 bottom-6 z-20 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-black/30 text-white"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our work connects people, research, and practical outcomes across
            disciplines. This site is optimized for clean light and dark mode
            presentation with no heavy animation overhead.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-3xl font-semibold">Publications</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Article</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Featured writing and thought pieces.
              </p>
            </article>
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Research</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ongoing and completed research outputs.
              </p>
            </article>
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Journals</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Journal publications and references.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-semibold">Our team</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Aarav Mehta</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Program lead
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Coordinates strategy and execution across initiatives.
              </p>
            </article>
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Nisha Verma</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Research coordinator
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Leads study planning and publication workflows.
              </p>
            </article>
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Rahul Iyer</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Communications lead
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Manages content, messaging, and external channels.
              </p>
            </article>
          </div>

          <div className="mt-4">
            <article className="rounded-2xl border border-foreground/15 bg-background p-5">
              <h3 className="text-xl font-semibold">Vikram Sakthi Mandan</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Outreach director
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                bio coming soon
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            &copy; Site Presentation
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://github.com/akshats2009/2026-done-timer",
                  "_blank"
                )
              }
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-foreground/20 bg-background px-4 text-sm font-medium text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-foreground/20 bg-background px-4 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
