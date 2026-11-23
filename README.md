# Alpha Studio — Portfolio

Portfolio bilingue FR/EN construit avec React + Vite.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir l'adresse locale affichée par Vite (généralement http://localhost:5173).

## Construire pour la production

```bash
npm run build
npm run preview
```

## Personnalisation indispensable avant publication

1. Dans `src/App.jsx`, remplacer `whatsappNumber = ""` par le numéro WhatsApp au format international, sans `+`, espaces ou tirets (ex. `229XXXXXXXX`).
2. Remplacer ou confirmer les textes de présentation et le statut de chaque projet.
3. Vérifier que vous avez l'autorisation de présenter chaque réalisation et d'utiliser les visuels/contenus associés.
4. Pour Little Traveler, anonymiser tout prénom ou contenu personnel avant de partager publiquement la page du projet.
5. Vérifier les affirmations, images et témoignages du projet Luméa / AWA SHEA avant de les utiliser comme références commerciales.
6. Ajouter votre nom personnel dans la section À propos si vous souhaitez signer le portfolio en votre nom.
7. Les liens Google Fonts nécessitent une connexion Internet ; les polices système prennent le relais si elles ne chargent pas.

## Structure

- `src/App.jsx` : contenu, projets, langue et lien WhatsApp.
- `src/styles.css` : identité visuelle responsive.
- `src/main.jsx` : point d'entrée React.
- `index.html` : métadonnées SEO de base.

## Note

Les projets sont explicitement présentés comme projets personnels, concepts ou travaux non finalisés lorsque nécessaire. Ne publiez pas de résultats, témoignages, statistiques ou relations clients qui n'ont pas été vérifiés et autorisés.
