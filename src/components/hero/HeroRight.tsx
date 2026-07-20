import HeroPortrait from "./HeroPortrait";
import ParallaxWrapper from "./ParallaxWrapper";

export default function HeroRight() {
  return (
    <div
      className="
      flex
      justify-center
      relative
      "
    >
      <ParallaxWrapper>
        <HeroPortrait />
      </ParallaxWrapper>
    </div>
  );
}
