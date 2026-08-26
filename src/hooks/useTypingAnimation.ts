import { useEffect, useRef, useState } from "react";

const useTypingAnimation = (texts: string[], speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef({ textIndex: 0, charIndex: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = ref.current;
      const current = texts[s.textIndex] ?? "";

      if (!s.deleting && s.charIndex < current.length) {
        s.charIndex++;
        setDisplayed(current.slice(0, s.charIndex));
        timer = setTimeout(tick, speed);
      } else if (!s.deleting && s.charIndex === current.length) {
        s.deleting = true;
        timer = setTimeout(tick, pause);
      } else if (s.deleting && s.charIndex > 0) {
        s.charIndex--;
        setDisplayed(current.slice(0, s.charIndex));
        timer = setTimeout(tick, speed / 2);
      } else if (s.deleting && s.charIndex === 0) {
        s.deleting = false;
        s.textIndex = (s.textIndex + 1) % texts.length;
        timer = setTimeout(tick, speed / 2);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, [texts, speed, pause]);

  return displayed;
};

export default useTypingAnimation;
