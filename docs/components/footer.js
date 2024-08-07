const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    footer {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(214, 74, 67, 1);
      box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
      color: #f0f0f0;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }

    footer ul {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 20px;
    }

    footer ul li {
      list-style: none;
    }

    footer a {
      font-weight: 700;
      font-size: 16px;
      padding: 10px 20px;
      color: #f0f0f0;
      text-decoration: none;
      transition: color 0.3s, background-color 0.3s;
    }

    footer a:hover {
      color: #1a1a40;
      background-color: #f0f0f0;
      border-radius: 5px;
    }
</style>

  <footer>
    <ul>
      &copy; 2024 Modegen.ai. All rights reserved.
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
