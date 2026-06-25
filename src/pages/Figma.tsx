import CaseStudy from "./CaseStudy";
import figma1 from "@/assets/figma-1.jpg";

const Figma = () => {
  return (
    <CaseStudy
      title="Figma"
      year="2016"
      subtitle="Building the collaborative design tool that would transform how teams create together—when working in the browser was still considered impossible."
      role="Senior Product Designer"
      timeline="2016 — 2020"
      team="Product Design, Design Systems"
      externalLink="figma.com"
      images={[figma1]}
      sections={[
        {
          heading: "The Challenge",
          content: (
            <>
              <p>
                When I joined Figma in 2016, the company was still proving that <strong>professional-grade design tools could exist in the browser</strong>. Sketch dominated the market. The idea of real-time collaboration on design files seemed like a novelty, not a necessity.
              </p>
              <p>
                My role was to help transform Figma from a promising technical achievement into an indispensable creative tool—one that designers would not just use, but love.
              </p>
            </>
          )
        },
        {
          heading: "Components & Systems",
          content: (
            <>
              <p>
                I led the design of <strong>Figma's component system</strong>—arguably the feature that defined how modern design teams work. The challenge was profound: how do you create a system that's powerful enough for complex design systems yet intuitive enough that a first-time user can understand it in minutes?
              </p>
              <p>
                We prototyped dozens of mental models. Should components work like code objects? Like Photoshop smart objects? Like nothing that existed before? The answer, we discovered, was to <strong>embrace the visual metaphor</strong> completely. A component is a single source of truth. Its instances are reflections. The relationship should feel physical, almost tangible.
              </p>
              <p>
                The purple diamond became the symbol of this relationship—a small but crucial decision that helped thousands of designers understand component architecture at a glance.
              </p>
            </>
          )
        },
        {
          heading: "Team Libraries",
          content: (
            <>
              <p>
                Components were powerful for individuals, but design teams needed something more: <strong>shared systems that evolved together</strong>. Team Libraries extended the component model across files and even across organizations.
              </p>
              <p>
                The design challenge was managing complexity. A library might contain hundreds of components. How do you help designers find what they need? How do you communicate updates without breaking existing work? We developed a publishing model inspired by software version control, but stripped of its technical jargon.
              </p>
              <p>
                The result was a system where designers could <strong>review and accept changes</strong> at their own pace, maintaining both consistency and autonomy.
              </p>
            </>
          )
        },
        {
          heading: "Prototyping",
          content: (
            <>
              <p>
                Figma's prototyping features emerged from a simple observation: designers were already connecting screens with lines and arrows. Why not make those connections functional?
              </p>
              <p>
                I contributed to the interaction design of <strong>smart animate</strong>—the feature that automatically generates transitions between frames based on layer matching. The magic was in the algorithm, but the challenge was in the interface: how do you expose powerful animation controls without overwhelming users who just want a simple click-through prototype?
              </p>
              <p>
                We chose progressive disclosure. Simple prototypes require zero configuration. Advanced users can dive into timing curves and custom easings. The same principle guided every feature we shipped.
              </p>
            </>
          )
        },
        {
          heading: "Impact",
          content: (
            <>
              <p>
                During my four years at Figma, the user base grew from <strong>under 100,000 to over 4 million designers</strong>. Components and Team Libraries became the foundation of enterprise design operations at companies like Uber, Airbnb, and Microsoft.
              </p>
              <p>
                More personally, Figma changed how I think about tool design. The best tools don't impose workflows—they <strong>amplify the workflows that already exist</strong>. That lesson continues to inform everything I design.
              </p>
            </>
          )
        }
      ]}
    />
  );
};

export default Figma;
