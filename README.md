# Pokédex Web App
Il s'agit d'une application Web Pokédex construite à l'aide de ReactJS, Redux Toolkit et Axios. Il permet aux utilisateurs de rechercher et de parcourir les données Pokémon extraites de [PokeAPI](https://pokeapi.co/). L'application comprend une page de recherche, une page de liste avec défilement infini, une page de détails pour chaque Pokémon et un écran de favoris.

## Live Link

[https://lucky-cocada-355e1e.netlify.app)

## - **Page de recherche :** Les utilisateurs peuvent rechercher des Pokémon par leur nom. L'application effectue un appel API pour récupérer les données Pokémon et affiche des indicateurs de chargement et des messages d'erreur si nécessaire.

- **Page de liste :** Affiche une liste de Pokémon récupérés depuis l'API. La page prend en charge le défilement infini, chargeant plus de Pokémon à mesure que l'utilisateur fait défiler.

- **Page de détails :** Affiche des informations détaillées sur un Pokémon sélectionné, y compris ses capacités, ses types, ses statistiques et bien plus encore. Les utilisateurs peuvent ajouter un Pokémon à leurs favoris et l'enregistrer comme favori sur leur appareil. Les Pokémon mis en favoris peuvent être facilement identifiés et supprimés des favoris.

- **Écran des favoris :** Permet aux utilisateurs de voir tous leurs Pokémon favoris. Les données sont stockées localement sur l'appareil de l'utilisateur et les utilisateurs peuvent supprimer Pokémon de leurs favoris.

## Technologies Used

- ReactJS
- Redux Toolkit (pour la gestion de l'état)
- Axios (pour les appels API)
- Composant React Infinite Scroll (pour une fonctionnalité de défilement infini)
- React Redux (pour intégrer Redux avec React)
- React Router DOM (pour le routage au sein de l'application)
- React Tabs (pour la navigation par onglets)


## Getting Started

- Clonez le référentiel sur votre machine locale :
```bash
clone git https://github.com/Fahd-code/Pokedex-en-ReactJS.git
- Accédez au répertoire du projet :
```bash
cd Pokedex-en-ReactJS
- Installez les dépendances :
```bash
installation npm
- Démarrez le serveur de développement :
```bash
npm exécuter le développement
- Ouvrez l'application dans votre navigateur : http://localhost:5173/


## API Integration

Cette application s'intègre à [PokeAPI](https://pokeapi.co/) pour récupérer les données Pokémon. L'URL de base de l'API est https://pokeapi.co/api/v2. Les points de terminaison suivants sont utilisés :
- **/pokemon :** Récupère une liste de tous les Pokémon. (par défaut, limite de 20)
- **/pokemon/{name} :** Récupère des informations détaillées sur un Pokémon spécifique.

## Authors

- [@FahdBahjaji://github.com/Fahd-code) (Fahd Bahjaji)

