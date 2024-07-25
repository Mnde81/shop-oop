export class Layout {
    constructor() { }

    header() {
        const HTML = `<header>
        <img class="logo" src="./img/logo.png" alt="logo">
        <nav>
            <a href="#">Shops</a>
            <a href="#">Products</a>
        </nav>
        </header>`;
        return HTML;
    }

    main() {
        const HTML = `<main>
        <section class="section-1">
            Section 1
        </section>
        <section class="section-2">
            Section 2
        </section>
        </main>`;
        return HTML;
    }

    footer() {
        const HTML = `<footer>FOOTER</footer>`;
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}