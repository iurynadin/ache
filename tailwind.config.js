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
                lg: "1.5rem",
                xl: "0.5rem",
                "2-xl": "2rem"
            },
        },
        extend: {
            colors: {
                pink1: "#CF035C",
                paragraph: "#4A4949",
                cinza: "#E8E5E5",
                itemsrodape: "#626161"
            },
            fontFamily: {
                montserrat: ["Montserrat"],
                lato: ["Lato"],
            },
            aspectRatio: {
                
            },
            backgroundImage: {
                navLeft: "url('../svgs/topnav-left.svg')",
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
