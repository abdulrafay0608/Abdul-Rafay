import React, { useRef, useEffect } from "react";

function AnimatedBackground({ interval = 1000 }) {
  const ref = useRef(null);

  useEffect(() => {
    let prevTime;

    function getRandomSpawnLocation() {
      const spawnLocationX = Math.round(Math.random() * (ref.current.parentElement.scrollWidth - 80));
      const spawnLocationY = Math.round(Math.random() * (ref.current.parentElement.scrollHeight - 80));
      return [`${spawnLocationX}px`, `${spawnLocationY}px`];
    }
    

    function animate(timestamp) {
      if (prevTime === undefined) {
        prevTime = timestamp;
      }
      if (timestamp - prevTime > interval) {
        const particle = document.createElement("div");
        particle.classList.add("sparkle");
        particle.onanimationend = () => particle.remove();
        [particle.style.left, particle.style.top] = getRandomSpawnLocation();
        ref.current.append(particle);
        prevTime = timestamp;
      }
      window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
  }, [interval]);

  return <div ref={ref} className="relative min-h-full "></div>;
}

export default AnimatedBackground;
