const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    nav {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(214, 74, 67, 1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 20px;
    }

    ul li {
      list-style: none;
    }

    a {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 16px;
      padding: 10px 20px;
      color: #f0f0f0;
      text-decoration: none;
      transition: color 0.3s, background-color 0.3s;
    }

    a:hover {
      color: #1a1a40;
      background-color: #f0f0f0;
      border-radius: 5px;
    }
</style>
  <header>
        <nav>
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="team.html">Team</a>
        </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
