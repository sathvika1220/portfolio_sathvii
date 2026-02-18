particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": ["#00FFFF", "#FF00FF", "#00FF00", "#FFA500"]




      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 3
        }
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "bottom-right",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": true,
          "rotateX": 3000,
          "rotateY": 3000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "remove"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 200,
          "size": 6,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 5
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#1a1a2e",
      "background_image": "",
      "background_position": "center center",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
