import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ParallaxText from "./ParallaxText"; // Add this import statement

export default function RevealText() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      duration: 2000,
      origin: 'bottom',
      distance: '100px',
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="parallax-container">
          <ParallaxText baseVelocity={2}>
            Framer Motion Scroll Effect
          </ParallaxText>
          {/* Your other components */}
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to My Animated Text!</h1>
        {/* Your other components */}
      </div>
      <div className="reveal md:text-3xl text-blue-200 dark:text-blue-800">
        It uses a sticky container with a fixed height and a large space at the bottom. Finally, it calculates the scroll position and applies an opacity effect to each child based on its position.
      </div>
    </>
  );
}
