class SharedFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
        <footer>
        <p>@Pedro Santos</p>
        <p>Copyright © <span id="currentYear">${currentYear}</span>. All rights are reserved.</p>
        </footer>
        `;
    }
}

class SharedNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div class="nav_logo">
                <img src="./img/F1_75_Logo.png" class="logo" alt="F1 Blog">
            </div>
            <div class="navbar">
                <a href="./index.html">Home</a>
                <a href="./standings.html">Standings</a>
                <a href="./rules.html">Rules</a>
            </div>
        </nav >
        `;
    }
}

customElements.define("shared-footer", SharedFooter);
customElements.define("custom-nav", SharedNav);
