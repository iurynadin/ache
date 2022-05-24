module.exports = {
    content: ["./pages/*.{html,js}"],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: '1120px',
                '2-xl': '1536px',
            },
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "1rem",
                xl: "1rem",
                "2-xl": "1rem"
            },
        },
        extend: {
            colors: {
                pink1: "#C11060",
                pinklight: "#EB7B99",
                paragraph: "#4A4949",
                cinza: "#ececee",
                itemsrodape: "#626161",
                menu: "rgba(0,0,0,0.3)",
                menusecundario: "rgba(83,83,83,0.6)"
            },
            fontFamily: {
                montserrat: ["Montserrat"],
                foco: ["foco"],
                foco100: ["Museo100"],
                foco300: ["foco-300"],
                foco700: ["foco-700"],
                foco900: ["foco-900"],
            },
            aspectRatio: {
                
            },
            backgroundImage: {
                hero: "url('../backgrounds/hero.jpg')",
                presidencia: "url('../backgrounds/presidencia.jpg')",
                curvadestaque2021: "url('../images/curva-destaques2021.png')",
            },
            backgroundPosition: {
                centerTop: 'center top',
                centerBottom: 'center bottom',
                heroPathxs: 'left -150px top 0',
            },
            backgroundSize: {
            }
        },
    },
    plugins: [],
};
