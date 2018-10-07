particlesJS("particles-js", {
    particles: {
        number: {
            value: 70,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .1,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .05,
                sync: !1
            }
        },
        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 10,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .25,
            width: 1
        },
        move: {
            enable: !0,
            speed: 3,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "grab"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
});
