module.exports = {
    content: ["./pages/*.{html,js}"],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: '1280px',
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
                cinza: "#ECECEE",
                cinza2: "#E8E5E5",
                itemsrodape: "#626161",
                menu: "rgba(0,0,0,0.3)",
                menusecundario: "rgba(83,83,83,0.6)",
                lilas: "#7C2482"
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
                boxhome: "80/101",
            },
            backgroundImage: {
                hero: "url('../backgrounds/hero.jpg')",
                presidencia: "url('../backgrounds/presidencia.jpg')",
                ache: "url('../backgrounds/ache.jpg')",
                governanca: "url('../backgrounds/governanca.jpg')",
                dialogo: "url('../backgrounds/dialogo.jpg')",
                excelencia: "url('../backgrounds/excelencia.jpg')",
                anexos: "url('../backgrounds/anexos.jpg')",

                curvadestaque2021: "url('../images/curva-destaques2021.png')",
                boxache: "url('../images/boxache.jpg')",
                boxgovernanca: "url('../images/boxgovernanca.jpg')",
                boxdialogo: "url('../images/boxdialogo.jpg')",
                boxexcelencia: "url('../images/boxexcelencia.jpg')",
            },
            backgroundPosition: {
                centerTop: 'center top',
                centerBottom: 'center bottom',
                heroPathxs: 'left -150px top 0',
            },
            paddingLeft: {
                sidebar: '1rem',
            },
            dropShadow: {
                transpInters: '0 0 15px rgba(0, 0, 0, 0.25)',
            },
            backgroundSize: {
            }
        },
    },
    plugins: [],
};
