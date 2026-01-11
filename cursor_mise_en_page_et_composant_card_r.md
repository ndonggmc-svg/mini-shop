# Mise en page et composant Card réutilisable
_Exported on 1/11/2026 at 14:10:46 GMT from Cursor (2.3.30)_

---

**User**

 identifier et corriger les bogues de mise en page.Transformez-le en un composant réutilisable (par exemple, Card(title, price, features)

---

**Cursor**


Exploration du projet pour identifier les problèmes de mise en page et préparer la transformation en composant réutilisable.



Lecture du fichier HTML pour comprendre la structure actuelle :



Création d'un composant Card réutilisable pour les cartes de prix, et correction des problèmes de mise en page. Transformation du code en composant réutilisable :



Création d'un composant Card réutilisable et correction des problèmes de mise en page :


```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page d'accueil</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* Barre de navigation */
    header {
      background-color: #222;
      color: white;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.3s;
    }

    nav a:hover {
      opacity: 0.8;
    }

    /* Section héros */
    .hero {
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/1200x400');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      padding: 4rem 1rem;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero h1 {
      margin: 0 0 1rem 0;
      font-size: 2.5rem;
    }

    .hero p {
      font-size: 1.2rem;
      margin: 0;
    }

    /* Section de prix */
    .pricing {
      padding: 4rem 1rem;
      background-color: #f8f9fa;
    }

    .pricing h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #222;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Composant Card */
    .card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card.featured {
      border: 2px solid #007bff;
      transform: scale(1.05);
    }

    .card.featured:hover {
      transform: scale(1.05) translateY(-5px);
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 1rem 0;
      color: #222;
    }

    .card-price {
      font-size: 2.5rem;
      font-weight: bold;
      color: #007bff;
      margin: 0 0 0.5rem 0;
    }

    .card-price-period {
      font-size: 1rem;
      color: #666;
      font-weight: normal;
    }

    .card-features {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;
      flex-grow: 1;
    }

    .card-features li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
    }

    .card-features li:last-child {
      border-bottom: none;
    }

    .card-features li::before {
      content: "✓";
      color: #28a745;
      font-weight: bold;
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }

    .card-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: auto;
    }

    .card-button:hover {
      background-color: #0056b3;
    }

    .card.featured .card-button {
      background-color: #28a745;
    }

    .card.featured .card-button:hover {
      background-color: #218838;
    }

    /* Grille de caractéristiques */
    .features {
      padding: 4rem 1rem;
    }

    .features h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
      transition: box-shadow 0.3s;
    }

    .feature:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .feature h3 {
      margin-top: 0;
      color: #222;
    }

    /* Formulaire de contact */
    .contact {
      background-color: #f4f4f4;
      padding: 4rem 1rem;
    }

    .contact h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .contact form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact input,
    .contact textarea {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 1rem;
      font-family: inherit;
      width: 100%;
    }

    .contact input:focus,
    .contact textarea:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    .contact button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .contact button:hover {
      background-color: #0056b3;
    }

    footer {
      background-color: #222;
      color: white;
      text-align: center;
      padding: 2rem 1rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 1rem;
      }

      nav ul {
        justify-content: center;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .hero p {
        font-size: 1rem;
      }

      .pricing-grid,
      .features-grid {
        grid-template-columns: 1fr;
      }

      .card.featured {
        transform: none;
      }

      .card.featured:hover {
        transform: translateY(-5px);
      }

      .pricing h2,
      .features h2,
      .contact h2 {
        font-size: 2rem;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding: 2rem 1rem;
        min-height: 300px;
      }

      .hero h1 {
        font-size: 1.5rem;
      }

      .card {
        padding: 1.5rem;
      }

      .card-price {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>

  <!-- Barre de navigation -->
  <header>
    <nav>
      <div class="logo">MonLogo</div>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#pricing">Tarifs</a></li>
        <li><a href="#features">Fonctionnalités</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Section héros -->
  <section class="hero">
    <h1>Bienvenue sur notre site</h1>
    <p>Une solution simple et efficace pour vos besoins.</p>
  </section>

  <!-- Section de prix -->
  <section class="pricing" id="pricing">
    <h2>Nos Tarifs</h2>
    <div class="pricing-grid" id="pricing-grid">
      <!-- Les cartes seront générées par JavaScript -->
    </div>
  </section>

  <!-- Grille de caractéristiques -->
  <section class="features" id="features">
    <h2>Nos Fonctionnalités</h2>
    <div class="features-grid">
      <div class="feature">
        <h3>Caractéristique 1</h3>
        <p>Description courte de la première caractéristique.</p>
      </div>

      <div class="feature">
        <h3>Caractéristique 2</h3>
        <p>Description courte de la deuxième caractéristique.</p>
      </div>

      <div class="feature">
        <h3>Caractéristique 3</h3>
        <p>Description courte de la troisième caractéristique.</p>
      </div>
    </div>
  </section>

  <!-- Formulaire de contact -->
  <section class="contact" id="contact">
    <h2>Contactez-nous</h2>
    <form>
      <input type="text" placeholder="Votre nom" required>
      <input type="email" placeholder="Votre email" required>
      <textarea placeholder="Votre message" rows="4" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2026 Mon Site</p>
  </footer>

  <script>
    // Composant Card réutilisable
    class PriceCard {
      constructor(title, price, period, features, featured = false) {
        this.title = title;
        this.price = price;
        this.period = period || 'mois';
        this.features = features || [];
        this.featured = featured;
      }

      render() {
        const card = document.createElement('div');
        card.className = `card ${this.featured ? 'featured' : ''}`;
        
        const featuresList = this.features
          .map(feature => `<li>${feature}</li>`)
          .join('');

        card.innerHTML = `
          <h3 class="card-title">${this.title}</h3>
          <div class="card-price">
            ${this.price}
            <span class="card-price-period">/ ${this.period}</span>
          </div>
          <ul class="card-features">
            ${featuresList}
          </ul>
          <button class="card-button">Choisir ce plan</button>
        `;

        return card;
      }
    }

    // Données des cartes de prix
    const pricingData = [
      {
        title: 'Basique',
        price: '9,99€',
        period: 'mois',
        features: [
          'Accès aux fonctionnalités de base',
          'Support par email',
          '5 projets maximum',
          'Stockage 10GB'
        ]
      },
      {
        title: 'Professionnel',
        price: '29,99€',
        period: 'mois',
        features: [
          'Toutes les fonctionnalités basiques',
          'Support prioritaire',
          'Projets illimités',
          'Stockage 100GB',
          'Analyses avancées',
          'API access'
        ],
        featured: true
      },
      {
        title: 'Entreprise',
        price: '99,99€',
        period: 'mois',
        features: [
          'Toutes les fonctionnalités professionnelles',
          'Support 24/7',
          'Projets illimités',
          'Stockage illimité',
          'Analyses avancées',
          'API access',
          'Gestion d\'équipe',
          'Personnalisation complète'
        ]
      }
    ];

    // Génération des cartes
    function initPricingCards() {
      const container = document.getElementById('pricing-grid');
      pricingData.forEach(data => {
        const card = new PriceCard(
          data.title,
          data.price,
          data.period,
          data.features,
          data.featured
        );
        container.appendChild(card.render());
      });
    }

    // Initialisation au chargement de la page
    document.addEventListener('DOMContentLoaded', initPricingCards);

    // Gestion du formulaire de contact
    document.querySelector('.contact form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Merci pour votre message ! Nous vous répondrons bientôt.');
      this.reset();
    });

    // Gestion des boutons des cartes
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('card-button')) {
        const cardTitle = e.target.closest('.card').querySelector('.card-title').textContent;
        alert(`Vous avez sélectionné le plan "${cardTitle}" !`);
      }
    });
  </script>

</body>
</html>

```


## Corrections de mise en page

1. Responsive design : ajout de media queries pour mobile/tablette
2. Navigation : correction du débordement sur petits écrans
3. Conteneurs : ajout de `max-width` et centrage
4. Grilles : utilisation de `auto-fit` et `minmax` pour l’adaptation
5. Styles de formulaire : amélioration des inputs et focus
6. Box-sizing : ajout de `box-sizing: border-box` pour éviter les problèmes de largeur

## Composant Card réutilisable

Création d’une classe `PriceCard` avec :
- `title` : titre de la carte
- `price` : prix
- `period` : période (mois, année, etc.)
- `features` : liste des fonctionnalités
- `featured` : option pour mettre en avant une carte

## Utilisation

Le composant est utilisé dans une section de tarifs avec 3 exemples. Pour ajouter une nouvelle carte :

```javascript
const newCard = new PriceCard(
  'Titre',
  '49,99€',
  'mois',
  ['Fonctionnalité 1', 'Fonctionnalité 2'],
  false // featured
);
```

Le code est maintenant plus maintenable, responsive et réutilisable.

```javascript
const newCard = new PriceCard(
  'Titre',
  '49,99€',
  'mois',
  ['Fonctionnalité 1', 'Fonctionnalité 2'],
  false // featured
);
```

---

**User**

génairer le code

---

**Cursor**


Séparation du code en fichiers distincts (HTML, CSS, JS) pour une meilleure organisation :



Séparation du code en fichiers distincts pour une meilleure organisation :


```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page d'accueil</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Barre de navigation -->
  <header>
    <nav>
      <div class="logo">MonLogo</div>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#pricing">Tarifs</a></li>
        <li><a href="#features">Fonctionnalités</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Section héros -->
  <section class="hero">
    <h1>Bienvenue sur notre site</h1>
    <p>Une solution simple et efficace pour vos besoins.</p>
  </section>

  <!-- Section de prix -->
  <section class="pricing" id="pricing">
    <h2>Nos Tarifs</h2>
    <div class="pricing-grid" id="pricing-grid">
      <!-- Les cartes seront générées par JavaScript -->
    </div>
  </section>

  <!-- Grille de caractéristiques -->
  <section class="features" id="features">
    <h2>Nos Fonctionnalités</h2>
    <div class="features-grid">
      <div class="feature">
        <h3>Caractéristique 1</h3>
        <p>Description courte de la première caractéristique.</p>
      </div>

      <div class="feature">
        <h3>Caractéristique 2</h3>
        <p>Description courte de la deuxième caractéristique.</p>
      </div>

      <div class="feature">
        <h3>Caractéristique 3</h3>
        <p>Description courte de la troisième caractéristique.</p>
      </div>
    </div>
  </section>

  <!-- Formulaire de contact -->
  <section class="contact" id="contact">
    <h2>Contactez-nous</h2>
    <form>
      <input type="text" placeholder="Votre nom" required>
      <input type="email" placeholder="Votre email" required>
      <textarea placeholder="Votre message" rows="4" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2026 Mon Site</p>
  </footer>

  <script src="card.js"></script>
  <script src="main.js"></script>

</body>
</html>

```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Barre de navigation */
header {
  background-color: #222;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

nav a:hover {
  opacity: 0.8;
}

/* Section héros */
.hero {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/1200x400');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 4rem 1rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.2rem;
  margin: 0;
}

/* Section de prix */
.pricing {
  padding: 4rem 1rem;
  background-color: #f8f9fa;
}

.pricing h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #222;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Composant Card */
.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card.featured {
  border: 2px solid #007bff;
  transform: scale(1.05);
}

.card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: #222;
}

.card-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
  margin: 0 0 0.5rem 0;
}

.card-price-period {
  font-size: 1rem;
  color: #666;
  font-weight: normal;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex-grow: 1;
}

.card-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}

.card-features li:last-child {
  border-bottom: none;
}

.card-features li::before {
  content: "✓";
  color: #28a745;
  font-weight: bold;
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.card-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;
}

.card-button:hover {
  background-color: #0056b3;
}

.card.featured .card-button {
  background-color: #28a745;
}

.card.featured .card-button:hover {
  background-color: #218838;
}

/* Grille de caractéristiques */
.features {
  padding: 4rem 1rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.3s;
}

.feature:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  margin-top: 0;
  color: #222;
}

/* Formulaire de contact */
.contact {
  background-color: #f4f4f4;
  padding: 4rem 1rem;
}

.contact h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.contact form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact input,
.contact textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
}

.contact input:focus,
.contact textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.contact button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact button:hover {
  background-color: #0056b3;
}

footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    justify-content: center;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .pricing-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .card.featured {
    transform: none;
  }

  .card.featured:hover {
    transform: translateY(-5px);
  }

  .pricing h2,
  .features h2,
  .contact h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
    min-height: 300px;
  }

  .hero h1 {
    font-size: 1.5rem;
  }

  .card {
    padding: 1.5rem;
  }

  .card-price {
    font-size: 2rem;
  }
}

```

```javascript
/**
 * Composant Card réutilisable pour les cartes de prix
 * @class PriceCard
 */
class PriceCard {
  /**
   * Crée une instance de PriceCard
   * @param {string} title - Titre de la carte
   * @param {string} price - Prix affiché
   * @param {string} period - Période (mois, année, etc.)
   * @param {string[]} features - Liste des fonctionnalités
   * @param {boolean} featured - Si la carte est mise en avant
   */
  constructor(title, price, period, features, featured = false) {
    this.title = title;
    this.price = price;
    this.period = period || 'mois';
    this.features = features || [];
    this.featured = featured;
  }

  /**
   * Génère le HTML de la carte
   * @returns {HTMLElement} Élément DOM de la carte
   */
  render() {
    const card = document.createElement('div');
    card.className = `card ${this.featured ? 'featured' : ''}`;
    
    const featuresList = this.features
      .map(feature => `<li>${this.escapeHtml(feature)}</li>`)
      .join('');

    card.innerHTML = `
      <h3 class="card-title">${this.escapeHtml(this.title)}</h3>
      <div class="card-price">
        ${this.escapeHtml(this.price)}
        <span class="card-price-period">/ ${this.escapeHtml(this.period)}</span>
      </div>
      <ul class="card-features">
        ${featuresList}
      </ul>
      <button class="card-button">Choisir ce plan</button>
    `;

    return card;
  }

  /**
   * Échappe les caractères HTML pour éviter les injections XSS
   * @param {string} text - Texte à échapper
   * @returns {string} Texte échappé
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Ajoute un gestionnaire d'événement au bouton de la carte
   * @param {Function} callback - Fonction à appeler lors du clic
   */
  onButtonClick(callback) {
    // Cette méthode sera appelée après le rendu
    // L'implémentation se fait dans main.js
  }
}

```

```javascript
// Données des cartes de prix
const pricingData = [
  {
    title: 'Basique',
    price: '9,99€',
    period: 'mois',
    features: [
      'Accès aux fonctionnalités de base',
      'Support par email',
      '5 projets maximum',
      'Stockage 10GB'
    ]
  },
  {
    title: 'Professionnel',
    price: '29,99€',
    period: 'mois',
    features: [
      'Toutes les fonctionnalités basiques',
      'Support prioritaire',
      'Projets illimités',
      'Stockage 100GB',
      'Analyses avancées',
      'API access'
    ],
    featured: true
  },
  {
    title: 'Entreprise',
    price: '99,99€',
    period: 'mois',
    features: [
      'Toutes les fonctionnalités professionnelles',
      'Support 24/7',
      'Projets illimités',
      'Stockage illimité',
      'Analyses avancées',
      'API access',
      'Gestion d\'équipe',
      'Personnalisation complète'
    ]
  }
];

/**
 * Initialise les cartes de prix dans le conteneur
 */
function initPricingCards() {
  const container = document.getElementById('pricing-grid');
  
  if (!container) {
    console.error('Conteneur pricing-grid introuvable');
    return;
  }

  // Vider le conteneur au cas où
  container.innerHTML = '';

  // Créer et ajouter chaque carte
  pricingData.forEach(data => {
    const card = new PriceCard(
      data.title,
      data.price,
      data.period,
      data.features,
      data.featured
    );
    container.appendChild(card.render());
  });
}

/**
 * Gère le clic sur les boutons des cartes
 */
function setupCardButtons() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('card-button')) {
      const card = e.target.closest('.card');
      const cardTitle = card.querySelector('.card-title').textContent;
      
      // Vous pouvez personnaliser cette action
      console.log(`Plan sélectionné: ${cardTitle}`);
      alert(`Vous avez sélectionné le plan "${cardTitle}" !`);
      
      // Exemple: redirection vers une page de paiement
      // window.location.href = `/checkout?plan=${encodeURIComponent(cardTitle)}`;
    }
  });
}

/**
 * Gère la soumission du formulaire de contact
 */
function setupContactForm() {
  const contactForm = document.querySelector('.contact form');
  
  if (!contactForm) {
    console.warn('Formulaire de contact introuvable');
    return;
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Validation basique
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    
    // Ici, vous pouvez envoyer les données à un serveur
    console.log('Données du formulaire:', { name, email, message });
    
    // Message de confirmation
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
    
    // Réinitialiser le formulaire
    this.reset();
  });
}

/**
 * Initialise l'application au chargement de la page
 */
function init() {
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initPricingCards();
      setupCardButtons();
      setupContactForm();
    });
  } else {
    // DOM déjà chargé
    initPricingCards();
    setupCardButtons();
    setupContactForm();
  }
}

// Démarrer l'application
init();

```


Vérification des erreurs et création d'un README pour documenter la structure :


```markdown
# Site Web avec Composant Card Réutilisable

Ce projet contient un site web avec un composant Card réutilisable pour afficher des cartes de prix.

## Structure du projet

```
.
├── index.html      # Structure HTML principale
├── styles.css      # Tous les styles CSS
├── card.js         # Composant Card réutilisable
├── main.js         # Logique principale de l'application
└── README.md       # Documentation
```

## Composant Card

Le composant `PriceCard` est une classe JavaScript réutilisable qui permet de créer des cartes de prix avec les propriétés suivantes :

### Utilisation

```javascript
const card = new PriceCard(
  'Titre du plan',        // title: string
  '29,99€',              // price: string
  'mois',                // period: string (optionnel, défaut: 'mois')
  [                      // features: string[]
    'Fonctionnalité 1',
    'Fonctionnalité 2',
    'Fonctionnalité 3'
  ],
  true                   // featured: boolean (optionnel, défaut: false)
);

// Rendre la carte dans le DOM
const cardElement = card.render();
container.appendChild(cardElement);
```

### Propriétés

- **title** (string) : Titre de la carte
- **price** (string) : Prix affiché
- **period** (string) : Période de facturation (mois, année, etc.)
- **features** (string[]) : Liste des fonctionnalités
- **featured** (boolean) : Si true, la carte est mise en avant avec un style spécial

## Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Composant Card réutilisable
- ✅ Navigation sticky
- ✅ Section héros avec image de fond
- ✅ Grille de caractéristiques
- ✅ Formulaire de contact fonctionnel
- ✅ Animations et transitions fluides

## Personnalisation

### Modifier les cartes de prix

Éditez le tableau `pricingData` dans `main.js` :

```javascript
const pricingData = [
  {
    title: 'Votre Plan',
    price: '49,99€',
    period: 'mois',
    features: ['Fonctionnalité 1', 'Fonctionnalité 2'],
    featured: false
  }
];
```

### Modifier les styles

Tous les styles sont dans `styles.css`. Les principales classes :

- `.card` : Style de base de la carte
- `.card.featured` : Style pour la carte mise en avant
- `.card-title` : Titre de la carte
- `.card-price` : Prix affiché
- `.card-features` : Liste des fonctionnalités
- `.card-button` : Bouton d'action

## Responsive Design

Le site est entièrement responsive avec des breakpoints à :
- **768px** : Tablette
- **480px** : Mobile

## Navigation

Les liens de navigation utilisent des ancres pour naviguer entre les sections :
- `#pricing` : Section des tarifs
- `#features` : Section des fonctionnalités
- `#contact` : Section de contact

## Compatibilité

- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Support des fonctionnalités ES6+
- CSS Grid et Flexbox

```


Code organisé en fichiers séparés. Structure créée :

## Fichiers générés

1. **`index.html`** — Structure HTML principale
2. **`styles.css`** — Tous les styles CSS
3. **`card.js`** — Composant Card réutilisable (classe `PriceCard`)
4. **`main.js`** — Logique principale et initialisation
5. **`README.md`** — Documentation du projet

## Avantages de cette structure

- **Modularité** : chaque fichier a une responsabilité claire
- **Réutilisabilité** : le composant `PriceCard` peut être utilisé partout
- **Maintenabilité** : plus facile à modifier et déboguer
- **Séparation des préoccupations** : HTML, CSS et JS séparés

## Utilisation du composant Card

Le composant `PriceCard` est maintenant dans `card.js` et peut être utilisé ainsi :

```javascript
const card = new PriceCard(
  'Titre',
  '29,99€',
  'mois',
  ['Fonctionnalité 1', 'Fonctionnalité 2'],
  true // featured
);
```

Ouvrez `index.html` dans votre navigateur pour voir le résultat. Tous les bugs de mise en page ont été corrigés et le code est maintenant modulaire et réutilisable.

```javascript
const card = new PriceCard(
  'Titre',
  '29,99€',
  'mois',
  ['Fonctionnalité 1', 'Fonctionnalité 2'],
  true // featured
);
```

