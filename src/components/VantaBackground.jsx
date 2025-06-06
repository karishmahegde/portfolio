import { useEffect, useRef } from "react";

export default function VantaNetBackground({ darkMode }) {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null); // to keep track and clean up

  useEffect(() => {
    if (window.VANTA && window.VANTA.NET) {
      // Clean up previous effect
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }

      // Create new Vanta effect with config based on mode
      vantaEffectRef.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: darkMode ? 0x825969 : 0xe1838e,
        backgroundColor: darkMode ? 0x141414 : 0xece5d8,
        points: 6.0,
        maxDistance: 28.0,
        spacing: 20.0,
      });
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  }, [darkMode]); // re-run effect on mode change

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    ></div>
  );
}
