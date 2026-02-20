import { useEffect, useRef, useState } from "react";
import { GithubIcon } from "@/lib/icons";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

function GitHubGraph() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [blockSize, setBlockSize] = useState(11);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;

      const weeks = 53;
      const margin = 4;
      const paddingCompensation = 0;

      const calculated = (width - paddingCompensation - weeks * margin) / weeks;

      setBlockSize(Math.max(6, calculated));
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-foreground justify-between">
        <h2 className="text-base font-semibold">GitHub</h2>
        <a
          href="https://github.com/Michelangelo-Costa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon className="text-base text-muted-foreground hover:text-foreground" />
        </a>
      </div>

      <div ref={containerRef} className="border border-border rounded p-3">
        <GitHubCalendar
          username="Michelangelo-Costa"
          weekStart={0}
          blockSize={blockSize}
          blockMargin={4}
          fontSize={12}
          colorScheme={resolvedTheme as "light" | "dark"}
        />
      </div>
    </div>
  );
}

export default GitHubGraph;
