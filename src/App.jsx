import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import RevealingText from "./components/RevealingText";
// import ScrollReveal from "../components/animata/text/scrollReveal";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="App">
        <div className="parallax-container">
          <ParallaxText baseVelocity={2}>
            Framer Motion Scroll Effect
          </ParallaxText>
          <ExampleComponent />
          <ParallaxText baseVelocity={-2}>
            Professional Parallax Scrolling
          </ParallaxText>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to My Animated Text!</h1>
        <RevealingText />

        {/* <ScrollReveal/> */}
      </div>
      

    </>
  );
}



