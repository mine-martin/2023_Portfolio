import { Particles } from "react-tsparticles";
import { Particle, loadFull } from "tsparticles";
import React, {
  useCallback
} from "react";

const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)

  }, [])
  const particlesLoaded = useCallback(async () => {

  }, [])

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
        fullScreen: { enabled: false },
        background: {
          color: {
            value: ""
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quatity: 100
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
          }
        },
        particles: {
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#f5d393",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enabled: true,
          },
          move: {
            directions: "none",
            enabled: true,
            outModes: {
              dafault: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />)
}

export default ParticlesContainer;
