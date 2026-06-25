import CaseStudy from "./CaseStudy";
import verve1 from "@/assets/verve-1.jpg";
import verve2 from "@/assets/verve-2.jpg";
import verve3 from "@/assets/verve-3.jpg";

const Verve = () => {
  return (
    <CaseStudy
      title="Verve"
      year="2024"
      subtitle="Verve is the new standard for how creative teams can ideate, prototype, and ship design work together—built from the ground up for the way modern teams actually work."
      role="Design Director"
      timeline="2024 — Present"
      team="12 designers, 40+ engineers"
      externalLink="verve.design"
      images={[verve1, verve2, verve3]}
      sections={[
        {
          heading: "The Challenge",
          content: (
            <>
              <p>
                When I joined Verve as the founding Design Director, the landscape of collaborative design tools had become stagnant. Teams were drowning in disconnected workflows—jumping between whiteboards, prototyping tools, and design software. The vision was ambitious: create a <strong>unified platform</strong> that would feel as intuitive as pen on paper while offering the power of professional-grade design tools.
              </p>
              <p>
                The core challenge wasn't just technical—it was philosophical. How do you build a tool that serves both the solo designer sketching ideas at 2am and the enterprise team coordinating across twelve time zones?
              </p>
            </>
          )
        },
        {
          heading: "Approach",
          content: (
            <>
              <p>
                We started with <strong>extensive ethnographic research</strong>, embedding ourselves in design teams at companies ranging from three-person startups to Fortune 100 enterprises. What emerged was a pattern: the most creative moments happened in the messy in-between spaces—the quick sketch on a napkin, the impromptu hallway conversation, the late-night "what if" that became a product feature.
              </p>
              <p>
                Our design philosophy became about <strong>removing friction from creative expression</strong>. Every interaction was scrutinized. We prototyped over 200 variations of our core canvas experience, testing everything from gesture patterns to the precise milliseconds of animation timing.
              </p>
              <p>
                The design system we built—internally called "Flow"—became the foundation for everything. It wasn't just a component library; it was a language for creative work. Adaptive spacing, contextual toolbars, and an AI-assisted layout system that learned from user behavior.
              </p>
            </>
          )
        },
        {
          heading: "The Solution",
          content: (
            <>
              <p>
                Verve launched with three core innovations: <strong>Liquid Canvas</strong>, an infinite workspace that adapts to your working style; <strong>Sync Spaces</strong>, real-time collaborative environments that maintain fidelity even with 100+ simultaneous editors; and <strong>Design Intelligence</strong>, an AI layer that anticipates needs without interrupting flow.
              </p>
              <p>
                The visual language drew inspiration from print design and architecture—clean grids, generous whitespace, and a typography system that elevates content. We developed a custom variable font, "Verve Sans," specifically tuned for on-screen design work.
              </p>
            </>
          )
        },
        {
          heading: "Impact",
          content: (
            <>
              <p>
                Within six months of launch, Verve was adopted by over <strong>10,000 design teams</strong> globally. User research showed a 40% reduction in context-switching and a 3x improvement in design-to-development handoff efficiency.
              </p>
              <p>
                More meaningfully, we heard from designers that Verve made them <strong>excited to design again</strong>. That's the metric that matters most.
              </p>
            </>
          )
        }
      ]}
    />
  );
};

export default Verve;
