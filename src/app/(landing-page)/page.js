import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div
      className="container mx-auto  p-8 pb-20 sm:p-20
    font-[var(--font-geist-sans)]"
    >
      <HeroSection />
      <ProjectSection />
      <PostsSection />
    </div>
  );
}
