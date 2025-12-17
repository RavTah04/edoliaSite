import React from 'react';

/*
  Cinematic splash inspired by logistics/cargo:
  - Typographic intro: "EDOLIA EXPORT" outline + filled, with tracking-in and scan bar
  - Cargo silhouettes (stylized) moving in parallax
  - Diagonal wipe transition before entering site
*/
const SplashScreen = () => {
  return (
    <div className="splash-overlay" role="status" aria-label="Chargement">
      <div className="splash-stage" aria-hidden="true">
        {/* Background grain for texture */}
        <div className="splash-grain" />
        {/* Perspective grid lines to evoke port infrastructure */}
        <div className="splash-grid" />

        {/* Wordmark */}
        <div className="splash-word splash-zoomout">
          {/* Outline */}
          <span className="splash-text splash-text-outline">EDOLIA</span>
          {/* Fill */}
          <span className="splash-text splash-text-fill scan-mask">EDOLIA</span>
          {/* Glitch layers for quick chromatic/glitch effect seen in reference */}
          <span className="splash-text splash-text-glitch glitch-r">EDOLIA</span>
          <span className="splash-text splash-text-glitch glitch-b">EDOLIA</span>
          {/* Scan bar */}
          <span className="scan-bar" aria-hidden="true" />
          {/* Diagonal shutter overlay that sweeps across */}
          <div className="splash-shutter" aria-hidden="true" />
        </div>

        {/* Diagonal wipe transition overlay */}
        <div className="splash-wipe" />
      </div>
    </div>
  );
};

export default SplashScreen;
