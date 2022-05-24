class ButtonSaibaMaisElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

        const mainColor = (this.getAttribute('main-color') ? this.getAttribute('main-color') : 'white' );

        this.innerHTML = `
            <a href="${this.getAttribute('link')}" class="btnSaibaMais group flex flex-row items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-${mainColor} group-hover:fill-pinklight group-hover:rotate-90 group-hover:scale-110 group-hover:mr-4 transition-all duration-300 w-[30px] mr-2"  viewBox="0 0 35 35"><path d="M17.5,0A17.5,17.5,0,1,0,35,17.5,17.455,17.455,0,0,0,17.5,0ZM29,20.1H20.1V29H14.9V20.1H6V14.9h8.9V6h5.2v8.9H29Z"/></svg>
                <span class="uppercase text-${mainColor} group-hover:text-pinklight transition-all duration-300 text-xl md:text-[26px] font-foco700">${this.getAttribute('label')}</span>
            </a>
        `;
        }
    }
    window.customElements.define('wc-btn_saibmais', ButtonSaibaMaisElement);