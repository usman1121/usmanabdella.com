import CaseStudy from "./CaseStudy";
import spotify1 from "@/assets/spotify-1.jpg";

const Spotify = () => {
  return (
    <CaseStudy
      title="Spotify"
      year="2020"
      subtitle="Redefining how millions of people discover, share, and experience music every day—making the world's largest audio library feel personal and intimate."
      role="Staff Product Designer"
      timeline="2020 — 2024"
      team="Design Systems, Personalization, Social"
      externalLink="spotify.com"
      images={[spotify1]}
      sections={[
        {
          heading: "The Challenge",
          content: (
            <>
              <p>
                Spotify had grown to over <strong>400 million users</strong> across 180+ markets, but with scale came complexity. The app that once felt like a friend who knew your music taste had become overwhelming. Users were spending more time searching and less time listening. The magic was fading.
              </p>
              <p>
                My mandate was clear: make Spotify feel personal again. Not through more features, but through <strong>intelligent restraint</strong>—showing the right thing at the right moment.
              </p>
            </>
          )
        },
        {
          heading: "Discovery & Research",
          content: (
            <>
              <p>
                We conducted a <strong>global listening study</strong> across 12 countries, sitting with users in their homes, cars, gyms, and workplaces. Music, we learned, isn't consumed—it's lived. It's the soundtrack to morning routines, workout sessions, heartbreaks, and celebrations.
              </p>
              <p>
                The insight that changed everything: users didn't want more recommendations. They wanted <strong>fewer, better ones</strong>. They wanted Spotify to understand not just what they listened to, but why.
              </p>
              <p>
                We mapped the emotional journey of listening across different contexts, identifying key moments where intervention could enhance rather than interrupt the experience.
              </p>
            </>
          )
        },
        {
          heading: "Design Process",
          content: (
            <>
              <p>
                I led the redesign of Spotify's <strong>Home experience</strong>, introducing what we called "Contextual Canvases"—dynamic layouts that adapt based on time of day, listening history, and inferred mood. Morning screens emphasized energy and focus; evening screens shifted toward discovery and relaxation.
              </p>
              <p>
                The design language evolved to support this fluidity. We developed a <strong>color extraction system</strong> that pulled palette from album artwork, creating immersive, artist-specific experiences that made each listening session feel unique.
              </p>
              <p>
                Typography received special attention. Working with the brand team, we refined the type scale for accessibility while maintaining Spotify's bold, confident voice. Every pixel served the music.
              </p>
            </>
          )
        },
        {
          heading: "Social Features",
          content: (
            <>
              <p>
                Music is inherently social, yet sharing on Spotify felt transactional. We reimagined <strong>collaborative playlists</strong> as living, breathing shared experiences. Real-time listening sessions let friends across the world experience albums together, synchronized to the millisecond.
              </p>
              <p>
                The "Blend" feature—which I helped conceptualize—created personalized playlists for any combination of friends, complete with a visual representation of musical overlap. It became one of Spotify's most shared features.
              </p>
            </>
          )
        },
        {
          heading: "Impact",
          content: (
            <>
              <p>
                The redesigned Home experience led to a <strong>27% increase in listening time</strong> and a 45% improvement in discovery playlist conversion. More importantly, user satisfaction scores climbed to their highest point in three years.
              </p>
              <p>
                The social features drove organic growth, with Blend generating over <strong>50 million shares</strong> in its first year. Spotify once again felt like a product made by people who understood why music matters.
              </p>
            </>
          )
        }
      ]}
    />
  );
};

export default Spotify;
