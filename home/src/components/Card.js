class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          position: relative;
          width: 200px;
          height: 150px;
          background: #fff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          margin: 0 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .card:hover .card-image {
          transform: scale(1.1);
        }





        .card svg {
          width: 48px;
          fill: #333;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .card__content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          background-color: #fff;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card:hover .card__content {
          transform: translate(-50%, -50%) rotate(0deg);
          opacity: 1;
        }

        .card__title {
          margin: 0;
          font-size: 18px;
          color: #333;
          font-weight: 700;
        }


        .card__description {
          margin: 8px 0 0;
          font-size: 12px;
          color: #777;
          line-height: 1.3;
        }


        .card:hover svg {
          scale: 0;
          transform: rotate(-45deg);
        }
      </style>
      <div class="card">
        <img class="card-image" src="${this.getAttribute('image') || ''}" alt="Card Image">

        <div class="card__content">
          <p class="card__title">${this.getAttribute('name') || 'Card Title'}</p>
          <p class="card__description">
            ${this.getAttribute('description') || 'No description available'}
          </p>

        </div>
      </div>
    `;
  }
}

customElements.define('team-card', Card);
