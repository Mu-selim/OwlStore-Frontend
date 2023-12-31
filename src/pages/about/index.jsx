import { SEO } from "../../components/SEO";
import { AboutHeader } from "./header";
import { TeamSection } from "./teamMembers";

export const AboutPage = () => {
  return (
    <main className="px-4 py-4 md:px-8">
      <SEO title="OwlStore - About" description="About OwlStore" />
      <AboutHeader />
      <TeamSection />
    </main>
  );
};
