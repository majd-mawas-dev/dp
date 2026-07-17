import { CSSProperties, MouseEvent, useRef } from "react";
import type { ProductKey } from "@/data/site";

export function ProductRender({
  variant,
  compact = false,
  annotation,
  className = "",
}: {
  variant: ProductKey;
  compact?: boolean;
  annotation?: string;
  className?: string;
}) {
  const stage = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = stage.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--rx", `${-y * 8}deg`);
    node.style.setProperty("--ry", `${x * 10}deg`);
    node.style.setProperty("--px", `${x * 12}px`);
    node.style.setProperty("--py", `${y * 10}px`);
  }

  function reset() {
    const node = stage.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--px", "0px");
    node.style.setProperty("--py", "0px");
  }

  return (
    <div
      ref={stage}
      onMouseMove={handlePointerMove}
      onMouseLeave={reset}
      className={`product-stage product-stage-${variant} ${compact ? "is-compact" : ""} ${className}`}
      style={
        {
          "--rx": "0deg",
          "--ry": "0deg",
          "--px": "0px",
          "--py": "0px",
        } as CSSProperties
      }
      aria-label={`Stylized placeholder render for ${variant}`}
      role="img"
    >
      <div className="product-spotlight" />
      <div className="product-reflection" />
      <div className="product-object">
        {variant === "activator" && <Activator />}
        {variant === "motor" && <Motor />}
        {variant === "locator" && <Locator />}
        {variant === "ultrasonic" && <Ultrasonic />}
      </div>
      <div className="product-floor" />
      {annotation && (
        <div className="product-annotation">
          <span>{annotation}</span>
          <i aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

function Activator() {
  return (
    <div className="device activator-device">
      <div className="activator-tip"><span /></div>
      <div className="activator-neck" />
      <div className="activator-body">
        <div className="device-rim" />
        <div className="device-button" />
        <div className="device-logo">A</div>
      </div>
      <div className="activator-cap" />
    </div>
  );
}

function Motor() {
  return (
    <div className="device motor-device">
      <div className="motor-console">
        <div className="motor-screen">
          <span>320</span><small>RPM</small>
          <i />
        </div>
        <div className="motor-controls"><b /><b /><b /></div>
        <div className="motor-gold-slot" />
      </div>
      <div className="motor-handpiece">
        <div className="motor-head"><span /></div>
        <div className="motor-grip"><i /><i /><i /></div>
        <div className="motor-tail" />
      </div>
    </div>
  );
}

function Locator() {
  return (
    <div className="device locator-device">
      <div className="locator-shell">
        <div className="locator-screen">
          <div className="locator-arc"><i /><i /><i /><i /><i /></div>
          <b>0.5</b><small>APEX</small>
        </div>
        <div className="locator-base-line" />
        <div className="locator-button" />
      </div>
      <div className="locator-cable"><i /><i /></div>
    </div>
  );
}

function Ultrasonic() {
  return (
    <div className="device ultrasonic-device">
      <div className="ultra-base">
        <div className="ultra-display"><span>04</span><small>LEVEL</small></div>
        <div className="ultra-dial"><i /></div>
        <div className="ultra-line" />
      </div>
      <div className="ultra-handpiece">
        <div className="ultra-tip"><i /></div>
        <div className="ultra-neck" />
        <div className="ultra-grip"><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}
