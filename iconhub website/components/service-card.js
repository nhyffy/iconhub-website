class ServiceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Get attributes with fallbacks
        const icon = this.getAttribute('icon') || '⭐';
        const title = this.getAttribute('title') || 'Our Service';
        const description = this.getAttribute('description') || 'Professional service solution';

        this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/service-card.css">
      <div class="service-card">
        <div class="icon">${icon}</div>
        <h3 class="title">${title}</h3>
        <p class="description">${description}</p>
        <button class="cta-button">
          Learn More <span class="arrow">→</span>
        </button>
      </div>
    `;
    }
}

customElements.define('service-card', ServiceCard);