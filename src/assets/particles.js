const color = '#06b9d1'

export const config = {
  particles: {
    number: {
      value: 800,
    },
    color: {
      value: color,
    },
    shape: {
      type: 'circle',
      stroke: {
        color: color,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 10,
      },
    },
    size: {
      value: 5,
      random: false,
      anim: {
        enable: false,
        speed: 30,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: color,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'none',
      straight: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 0.4,
      },
      bubble: {
        distance: 100,
        size: 10,
      },
    },
  },
}
