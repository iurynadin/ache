class FooterElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

        const backText = (this.getAttribute('lang')) ? 'Back to top' : 'Voltar ao topo';

        this.innerHTML = `
            <footer class="relative bg-cinza2 py-8 md:py-12 w-full">
                <div class="container">
                    <div class="text-itemsrodape text-[38px] leading-none font-foco100 mb-10">
                        Relatório Anual Ache 2021
                    </div>

                    <div class="grid md:grid-cols-3">
                        <div>
                            <ul>
                                <li><a href="#">Mensagem da Presidência</a></li>
                            </ul>

                            <ul>
                                <li><a href="#">Destaques 2021</a></li>
                            </ul>

                            <ul>
                                <li><strong>Aché</strong></li>
                                <li><a href="./propositos-e-valores.html">Propósito e Valores</a></li>
                                <li><a href="./perfil.html">Perfil</a></li>
                                <li><a href="#">Planejamento estratégico</a></li>
                            </ul>

                            <ul>
                                <li><strong>Governança e gestão</strong></li>
                                <li><a href="./estrutura-de-governanca.html">Estrutura de governança</a></li>
                                <li><a href="#">Compliance e gestão de riscos</a></li>
                                <li><a href="#">Inovação</a></li>
                                <li><a href="#">Desempenho setorial e do negócio</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li><strong>Diálogo e relacionamento</strong></li>
                                <li><a href="#">Geração Aché</a></li>
                                <li><a href="#">Médicos</a></li>
                                <li><a href="#">Consumidores</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">Fornecedores</a></li>
                                <li><a href="#">Setor Público e Associações</a></li>
                                <li><a href="#">Comunidades</a></li>
                            </ul>

                            <ul>
                                <li>Excelência na gestão de recursos</li>
                                <li><a href="#">Eficiência operacional</a></li>
                                <li><a href="#">Compromisso com o meio ambiente</a></li>
                            </ul>
                        </div>

                        <div class="relative">
                            <ul>
                                <li><strong>Anexos</strong></li>
                                <li><a href="#">Sobre o relatório</a></li>
                                <li><a href="#">Indicadores Ethos</a></li>
                                <li><a href="#">Temas materiais</a></li>
                                <li><a href="#">Conteúdos complementares de GRI e SASB</a></li>
                                <li><a href="#">Sumário de Conteúdo GRI</a></li>
                                <li><a href="#">Sumário de indicadores SASB</a></li>
                                <li><a href="#">Créditos</a></li>
                            </ul>

                            <a href="./index.html">
                                <img src="./svgs/logo_ache_pink.svg" class="h-10 relative mt-6 md:mt-0 md:absolute md:left-0 md:bottom-4" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
window.customElements.define('wc-footer', FooterElement);