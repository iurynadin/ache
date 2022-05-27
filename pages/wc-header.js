class HeaderElement extends HTMLElement {
    constructor() {
        super(); 
    }
    
    connectedCallback() {
        this.innerHTML = `
        <div class="bpvisor"><p></p></div>
        <header class="fixed top-0 left-0 h-[60px] lg:h-[76px] w-full block z-20 backdrop-blur bg-menu">
            <div class="container relative z-[1] flex items-center justify-between md:justify-start h-full">
                <div class="header__hambcont relative h-20 w-6 xl:w-[33px] flex items-center justify-center transition-all duration-300 z-40 mr-4 lg:mr-9">
                    <a role="button" class="navbar-burger relative transition-all duration-300 w-6 lg:w-[32px] h-[21px] block z-50" aria-label="menu">
                        <span aria-hidden="true" class="transition-all duration-300"></span>
                        <span aria-hidden="true" class="transition-all duration-300"></span>
                        <span aria-hidden="true" class="transition-all duration-300"></span>
                    </a>
                </div>

                <nav class="navTop hidden md:block">
                    <ul class="flex justify-start items-center">
                        <li class="text-white uppercase text-lg font-foco700 ">RELATÓRIO ANUAL 2021</li>
                        <li><a href="#">VERSÃO PDF</a></li>
                        <li><a href="#">DEMONSTRAÇÕES FINANCEIRAS PDF</a></li>
                        <li><a href="#">PT</a></li>
                        <li><a href="#">EN</a></li>
                    </ul>
                </nav>

                <span class="text-white uppercase text-base font-foco700 block md:hidden">RELATÓRIO ANUAL 2021</span>
        
                <img src="./svgs/logo_ache.svg" class="h-7 block md:hidden" alt="">
            </div>
        </header>

        <nav class="secundario fixed z-10 top-[60px] lg:top-[76px] left-0 w-full backdrop-blur-md bg-menusecundario flex flex-col items-center py-6">
            <ul class="menusecundario m-0 flex flex-col items-center">
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./mensagem-da-presidencia.html">MENSAGEM DA PRESIDÊNCIA</a></li>
                <li><a href="./destaques-2021.html">DESTAQUES 2021</a></li>
                <li><a href="./propositos-e-valores.html">ACHÉ</a></li>
                <li><a href="./estrutura-de-governanca.html">GOVERNANÇA E GESTÃO</a></li>
                <li><a href="./geracao-ache.html">DIÁLOGO E RELACIONAMENTO</a></li>
                <li><a href="#">EXCELÊNCIA NA GESTÃO DE RECURSOS </a></li>
                <li><a href="#">ANEXOS</a></li>
            </ul>
            <ul class="extras flex mt-2 md:hidden flex-col items-center">
                <li><a href="#" class="text-pinklight">PDF VERSÃO PDF</a></li>
                <li><a href="#" class="text-pinklight">DEMONSTRAÇÕES FINANCEIRAS PDF</a></li>
                <li><a href="#" class="text-pinklight">PT</a></li>
                <li><a href="#" class="text-pinklight">EN</a></li>
            </ul>
            <img src="./svgs/closemenu.svg" class="w-7 cursor-pointer mt-3 closeMenu" alt="">
        </nav>
        `;
    }
}
window.customElements.define('wc-header', HeaderElement);