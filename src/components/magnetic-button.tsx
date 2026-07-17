import { MouseEvent, useRef } from "react";

export function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = ref.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate3d(${x * 0.08}px, ${y * 0.12}px, 0)`;
  }

  function reset() {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`button button-${variant} ${className}`}
    >
      <span>{children}</span>
    </a>
  );
}
