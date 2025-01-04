import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

(async () => {
  await loadAll(tsParticles);

  await tsParticles.addPreset("lightdark", {
    fullScreen: {
      enable: true,
    },
    particles: {
      links: {
        enable: true,
      },
      move: {
        enable: true,
      },
      number: {
        value: 70,
      },
      opacity: {
        value: { min: 0.3, max: 1 },
      },
      shape: {
        type: ["circle", "square", "triangle", "polygon"],
        options: {
          polygon: [
            {
              sides: 5,
            },
            {
              sides: 6,
            },
            {
              sides: 8,
            },
          ],
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  });

  await tsParticles.load({
    id: "light",
    options: {
      preset: "lightdark",
      particles: {
        color: {
          value: "#A5058E",
        },
        links: {
          color: "#A5058E",
        },
      },
    },
  });
})();
