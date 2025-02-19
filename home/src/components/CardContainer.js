class CardContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .card-container {
            gap: 10px;
            padding: 10px;
          }
        }

      </style>
      <div class="card-container">
        <team-card image="./assets/teammember1.jpeg" name="HurmanEjaz"description="As the Co-Founder of Interactions Private Limited, I spearhead innovation, business expansion, and tech solutions.
I oversee workflow optimization, financial structuring, and customer engagement to ensure success.
My skills encompass advanced software systems, artificial intelligence integration, cloud platforms, and digital evolution.
Beyond this, I have expertise in crafting dynamic websites and mastering CSS for seamless user interfaces."></team-card>

        <team-card image="./assets/teammember2.jpeg" name="EsfandyarQureshi" description="Tech enthusiast with a passion for software development, AI, and cybersecurity. Skilled in full-stack web and mobile app development, system administration, and digital forensics. Continuously learning and innovating to optimize efficiency and performance. Always exploring new ways to solve problems and build smarter solutions"></team-card>

        <team-card image="./assets/teammember3.jpeg" name="AliSarfraz" description="As the Co-Founder of Interactions Private Limited, I lead business strategy, innovation, and technology development.
I manage operations, financial planning, and client relations to ensure efficiency and growth.
My  expertise spans enterprise software, AI solutions, cloud computing, and digital transformation.
Alongside this, I offer freelance services on Fiverr, delivering tailored software solutions"></team-card>

        <team-card image="./assets/teammember4.jpeg" name="MounimIjaz" description="As the Co-Founder of Interactions Private Limited, my drive strategic growth, innovation, and business development.
My oversee technology, operations, and financial planning to ensure efficiency and scalability.
My expertise includes enterprise software, AI solutions, cloud services, and digital transformation.
With strong leadership, my deliver impactful, secure, and tailored software solutions for businesses."></team-card>

        <team-card image="./assets/teammember5.jpeg" name="TahaMoazzam" description="You are a full-stack developer and owner of interaction with expertise in C++, JavaScript, React, Node.js, and SQL. You specialize in AI, cybersecurity, and 3D web experiences, integrating computer vision, machine learning, and interactive 3D models into your projects. Your skills extend to assembly language programming, low-level system development, and microprocessor-based applications. With a strong foundation in data structures, algorithms, and database management, you build high-performance, real-world solutions."></team-card>


      </div>

    `;
  }
}

customElements.define('team-card-container', CardContainer);
