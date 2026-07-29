import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Container from "../common/Container";
import HeroGlowMouse from "./HeroGlowMouse";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <>
      <HeroBackground />
      <HeroGlowMouse />
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <Container>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <HeroLeft />
            <HeroRight />
          </div>
        </Container>
      </section>
      <ScrollIndicator />
    </>
  );
}
