import {
  ArrowUpRight,
  Award,
  Building2,
  Cpu,
  Film,
  GraduationCap,
  type LucideIcon,
  MousePointer2,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const portraitImage =
  "https://upload.wikimedia.org/wikipedia/commons/5/54/Steve_Jobs.jpg";
const keynoteImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/Steve_Jobs_presents_iPhone_%28cropped_3-2%29.jpg";

const stats = [
  { value: "1976", label: "Co-founded Apple" },
  { value: "4", label: "Category-shaping eras" },
  { value: "2012", label: "Inventors Hall of Fame" },
];

const career = [
  {
    period: "1976-1985",
    title: "Co-founder, Apple Computer",
    detail:
      "Built the Apple I and Apple II era with Steve Wozniak, then led the Macintosh team toward a graphical, human-centered personal computer.",
    tags: ["Apple I", "Apple II", "Macintosh"],
  },
  {
    period: "1985-1997",
    title: "Founder, NeXT | Chairman, Pixar",
    detail:
      "Created NeXT's advanced workstation and software platform while helping Pixar move from hardware startup to a defining animation studio.",
    tags: ["NeXTSTEP", "Toy Story", "Pixar IPO"],
  },
  {
    period: "1997-2011",
    title: "CEO, Apple",
    detail:
      "Returned Apple to focus, rebuilt the product line, and led launches that reshaped music, phones, tablets, retail, and software ecosystems.",
    tags: ["iMac", "iPod", "iPhone", "iPad"],
  },
];

const products = [
  {
    icon: Cpu,
    title: "Macintosh",
    body: "Advanced the personal computer as a visual, approachable creative tool.",
  },
  {
    icon: Film,
    title: "Pixar",
    body: "Backed a studio that brought computer animation into mainstream cinema.",
  },
  {
    icon: MousePointer2,
    title: "iPod and iTunes",
    body: "Connected hardware, software, and content into a simple music experience.",
  },
  {
    icon: Sparkles,
    title: "iPhone",
    body: "Turned multitouch, mobile internet, and apps into a defining product system.",
  },
];

const principles = [
  "Clarify the product until the essential experience is obvious.",
  "Pair engineering ambition with taste, restraint, and end-to-end ownership.",
  "Make the complex feel direct without hiding craft from the people building it.",
  "Protect focus: fewer products, sharper decisions, stronger launches.",
];

function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-white/10">
        <nav
          className="container flex h-12 items-center justify-between text-xs text-white/85"
          aria-label="Primary navigation"
        >
          <a className="font-semibold text-white" href="#top">
            Steve Jobs
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#profile" className="transition hover:text-white">
              Profile
            </a>
            <a href="#career" className="transition hover:text-white">
              Career
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#principles" className="transition hover:text-white">
              Principles
            </a>
          </div>
          <a
            href="#sources"
            className="rounded-md px-3 py-2 text-white transition hover:bg-white/10"
          >
            Sources
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="bg-black px-4 pb-14 pt-24 text-white sm:pb-18 lg:pb-20"
      >
        <div className="container grid min-h-[78svh] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <Badge className="mb-6 bg-[#0071e3] text-white">
              1955-2011 | Product leader
            </Badge>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-balance sm:text-6xl lg:text-7xl">
              Steve Jobs
            </h1>
            <p className="mt-5 text-xl leading-7 text-white/88 sm:text-2xl sm:leading-8">
              Co-founder of Apple. Founder of NeXT. Chairman and driving force
              behind Pixar's rise. A career defined by focus, taste, and
              category-changing products.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg">
                <a href="#career">
                  View career
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
              >
                <a href="#work">Selected work</a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl">
            <img
              src={keynoteImage}
              alt="Steve Jobs presenting the iPhone at Macworld 2007"
              className="aspect-[3/2] w-full rounded-lg object-cover shadow-apple"
            />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-white">
              {stats.map((stat) => (
                <div
                  className="min-h-24 rounded-lg bg-white/10 px-3 py-4 backdrop-blur"
                  key={stat.label}
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/72">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="px-4 py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-lg bg-white shadow-apple">
            <img
              src={portraitImage}
              alt="Steve Jobs holding a MacBook Air at Macworld 2008"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0066cc]">
              Executive Profile
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Built companies around the meeting point of technology and the
              liberal arts.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/80">
              Jobs' resume reads less like a sequence of roles and more like a
              set of inflection points: the personal computer, the animated
              feature film, the digital music library, the modern smartphone,
              and the tablet as an everyday computer.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <InfoTile label="Primary field" value="Consumer technology" />
              <InfoTile label="Operating style" value="Product-led focus" />
              <InfoTile label="Signature strength" value="Integrated systems" />
            </div>
          </div>
        </div>
      </section>

      <section id="career" className="bg-black px-4 py-20 text-white sm:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2997ff]">
              Career Timeline
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Founder, builder, return CEO.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {career.map((item) => (
              <Card
                key={item.period}
                className="min-h-[25rem] border-0 bg-[#272729] text-white"
              >
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className="w-fit bg-white text-[#1d1d1f]"
                  >
                    {item.period}
                  </Badge>
                  <CardTitle className="pt-4 text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {item.detail}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/16 text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-4 py-20 sm:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#0066cc]">
                Selected Work
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                Products that changed expectations.
              </h2>
            </div>
            <Button asChild variant="link" className="justify-start text-[#0066cc]">
              <a href="#principles">
                Leadership principles
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.title}
                  className="min-h-64 border-0 bg-white shadow-none"
                >
                  <CardHeader>
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-[#0071e3] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base leading-7 text-black/72">
                      {product.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="principles"
        className="bg-white px-4 py-20 text-[#1d1d1f] sm:py-24"
      >
        <div className="container grid gap-12 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-[#0066cc]">
              Leadership Profile
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              A high bar for clarity.
            </h2>
          </div>
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div className="grid gap-5 sm:grid-cols-[4rem_1fr]" key={principle}>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#f5f5f7] text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xl leading-8 text-black/84">{principle}</p>
                  {index < principles.length - 1 ? (
                    <Separator className="mt-6" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-20 text-white sm:py-24">
        <div className="container grid gap-5 md:grid-cols-3">
          <Credential
            icon={GraduationCap}
            label="Education"
            value="Reed College, liberal arts foundation and calligraphy influence"
          />
          <Credential
            icon={Award}
            label="Recognition"
            value="National Medal of Technology and Innovation, California Hall of Fame"
          />
          <Credential
            icon={Building2}
            label="Organizations"
            value="Apple, NeXT, Pixar, The Walt Disney Company board"
          />
        </div>
      </section>

      <footer id="sources" className="px-4 py-10 text-sm text-black/64">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            Image credits: Matthew Yohe, CC BY 3.0; Blake Patterson, CC BY 2.0.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="text-[#0066cc] hover:underline"
              href="https://www.invent.org/inductees/steve-jobs"
              rel="noreferrer"
              target="_blank"
            >
              Career reference
            </a>
            <a
              className="text-[#0066cc] hover:underline"
              href="https://nationalmedals.org/laureate/steve-jobs/"
              rel="noreferrer"
              target="_blank"
            >
              Award reference
            </a>
            <a
              className="text-[#0066cc] hover:underline"
              href="https://californiamuseum.org/inductee/steve-jobs/"
              rel="noreferrer"
              target="_blank"
            >
              Hall of Fame reference
            </a>
            <a
              className="text-[#0066cc] hover:underline"
              href="https://www.reed.edu/about/steve-jobs.html"
              rel="noreferrer"
              target="_blank"
            >
              Education reference
            </a>
            <a
              className="text-[#0066cc] hover:underline"
              href="https://commons.wikimedia.org/wiki/File:Steve_Jobs.jpg"
              rel="noreferrer"
              target="_blank"
            >
              Portrait source
            </a>
            <a
              className="text-[#0066cc] hover:underline"
              href="https://commons.wikimedia.org/wiki/File:Steve_Jobs_presents_iPhone_(cropped_3-2).jpg"
              rel="noreferrer"
              target="_blank"
            >
              Keynote source
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-h-32 rounded-lg bg-white px-5 py-6">
      <p className="text-sm text-black/48">{label}</p>
      <p className="mt-3 text-lg font-semibold leading-6">{value}</p>
    </div>
  );
}

function Credential({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <Card className="min-h-56 border-0 bg-[#272729] text-white">
      <CardHeader>
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-2xl">{label}</CardTitle>
        <CardDescription className="text-base leading-7 text-white/70">
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default App;
