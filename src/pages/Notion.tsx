import CaseStudy from "./CaseStudy";
import notion1 from "@/assets/notion-1.jpg";

const Notion = () => {
  return (
    <CaseStudy
      title="Notion"
      year="2012"
      subtitle="Crafting a workspace that adapts to how teams actually think and work—before anyone knew what a 'block-based editor' was."
      role="Product Designer"
      timeline="2012 — 2016"
      team="Founding Design Team"
      externalLink="notion.so"
      images={[notion1]}
      sections={[
        {
          heading: "The Beginning",
          content: (
            <>
              <p>
                I joined Notion when it was just an idea and a small team in a San Francisco apartment. The vision was audacious: create a single tool that could replace <strong>wikis, project management software, databases, and documents</strong>. Everyone said it was too ambitious. That's precisely why it was worth building.
              </p>
              <p>
                My role was to help translate this vision into an interface that felt cohesive rather than overwhelming. The challenge wasn't adding features—it was finding the unifying principle that would make everything feel like one product.
              </p>
            </>
          )
        },
        {
          heading: "The Block Model",
          content: (
            <>
              <p>
                The breakthrough came when we stopped thinking about documents, databases, and pages as separate concepts. <strong>Everything is a block</strong>. A paragraph is a block. A to-do item is a block. An entire database is a block. And blocks can contain other blocks.
              </p>
              <p>
                This mental model, once internalized, unlocked incredible flexibility. Users could build anything they imagined, from simple notes to complex project management systems. But the interface had to teach this model without ever mentioning it explicitly.
              </p>
              <p>
                We developed the <strong>slash command</strong> pattern—type "/" to see everything you could create. It was a discovery mechanism and a teaching tool disguised as a simple shortcut. The command palette became the heart of the product.
              </p>
            </>
          )
        },
        {
          heading: "Database Design",
          content: (
            <>
              <p>
                Notion's databases were the most complex feature I worked on. The premise: anyone should be able to create a database, even if they've never heard of relational data models. The execution required years of iteration.
              </p>
              <p>
                We started with <strong>views</strong>—the same data could appear as a table, a kanban board, a calendar, or a gallery. Switching views felt magical because the underlying data remained consistent. Users could organize information the way their brain worked, not the way databases traditionally demanded.
              </p>
              <p>
                Properties were another leap. Instead of rigid column types, we created properties that <strong>adapted to content</strong>: dates became timelines, people became assignees, relations linked to other databases. The flexibility was engineered, but the experience felt organic.
              </p>
            </>
          )
        },
        {
          heading: "Visual Identity",
          content: (
            <>
              <p>
                Notion's aesthetic—clean, warm, almost delicate—emerged from a deliberate decision to <strong>reject productivity software conventions</strong>. Most tools in the space used harsh blues, aggressive shadows, and cramped interfaces. We chose soft typography, generous whitespace, and subtle interactions.
              </p>
              <p>
                The icon system deserves special mention. Each page icon is a tiny work of art, hand-crafted to feel personal. When users customize their workspace with these icons, they're making the tool their own. That sense of ownership was always the goal.
              </p>
            </>
          )
        },
        {
          heading: "Templates & Community",
          content: (
            <>
              <p>
                Flexibility is a double-edged sword. A blank page can be liberating or paralyzing. <strong>Templates</strong> solved this by providing starting points—meeting notes, project trackers, personal journals—that users could adopt and adapt.
              </p>
              <p>
                More importantly, templates created a community. Users began sharing their setups, teaching each other new patterns, building on each other's ideas. Notion became not just a tool but a <strong>platform for organizational innovation</strong>.
              </p>
            </>
          )
        },
        {
          heading: "Impact",
          content: (
            <>
              <p>
                When I left Notion in 2016, we had just achieved product-market fit. The following years would see explosive growth—<strong>millions of users</strong>, a multi-billion dollar valuation, and genuine impact on how teams worldwide organize their work.
              </p>
              <p>
                Looking back, Notion taught me that the best products don't just solve problems—they <strong>expand what users believe is possible</strong>. The blank page isn't empty. It's full of potential.
              </p>
            </>
          )
        }
      ]}
    />
  );
};

export default Notion;
