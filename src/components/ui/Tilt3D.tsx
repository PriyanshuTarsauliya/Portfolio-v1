import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  perspective?: number;
  disabledOnTouch?: boolean;
  onClick?: () => void;
}

export const Tilt3D: React.FC<Tilt3DProps> = ({
  children,
  className = "",
  style = {},
  maxTilt = 14,
  scale = 1.02,
  glare = true,
  perspective = 1000,
  disabledOnTouch = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    }
  }, []);

  // Raw motion values between -0.5 and 0.5
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawHover = useMotionValue(0);

  // Smooth spring physics for natural elastic movement
  const springConfig = { damping: 22, stiffness: 280, mass: 0.6 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);
  const smoothHover = useSpring(rawHover, { damping: 25, stiffness: 350 });

  // Transforms for 3D rotation and scale
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const cardScale = useTransform(smoothHover, [0, 1], [1, scale]);

  // Glare position calculation
  const glareX = useTransform(smoothX, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [10, 90]);
  const glareOpacity = useTransform(smoothHover, [0, 1], [0, 0.65]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabledOnTouch && isTouchDevice) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    rawX.set(xPct);
    rawY.set(yPct);
  };

  const handlePointerEnter = () => {
    if (disabledOnTouch && isTouchDevice) return;
    rawHover.set(1);
  };

  const handlePointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
    rawHover.set(0);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      style={{
        perspective: `${perspective}px`,
        ...style,
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX: disabledOnTouch && isTouchDevice ? 0 : rotateX,
          rotateY: disabledOnTouch && isTouchDevice ? 0 : rotateY,
          scale: cardScale,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full transition-[box-shadow] duration-300 rounded-xl"
      >
        {children}

        {/* Dynamic Specular 3D Glare Sheen Overlay */}
        {glare && !isTouchDevice && (
          <motion.div
            style={{
              opacity: glareOpacity,
              background: useTransform(
                [glareX, glareY],
                ([x, y]) =>
                  `radial-gradient(circle 320px at ${x}% ${y}%, rgba(20, 235, 163, 0.22) 0%, rgba(255, 255, 255, 0.12) 30%, transparent 80%)`
              ),
              transform: "translateZ(30px)",
            }}
            className="absolute inset-0 pointer-events-none rounded-xl z-30 transition-opacity duration-200"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Tilt3D;
