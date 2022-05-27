class MenuDialogoElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="./geracao-ache.html">Geração Aché</a></li>
                <li><a href="./medicos.html">Médicos</a></li>
                <li><a href="./consumidores.html">Consumidores</a></li>
                <li><a href="./clientes.html">Clientes</a></li>
                <li><a href="./fornecedores.html">Fornecedores</a></li>
                <li><a href="./setor-publico-e-associacoes.html">Setor Público e Associações</a></li>
                <li><a href="./comunidades.html">Comunidades</a></li>
            </ul>
        `;
    }
}
window.customElements.define('wc-menu-dialogo', MenuDialogoElement);  