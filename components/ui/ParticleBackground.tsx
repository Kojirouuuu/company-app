'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const { initParticlesEngine } = await import('@tsparticles/react');
      await initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: '#3b82f6',
      },
      links: {
        color: '#3b82f6',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      className={`absolute inset-0 ${className}`}
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
