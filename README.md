# PokePoke
Il s'agit d'un projet simple réaliser avec [React](https://reactjs.org/), [Mantine](https://mantine.dev/) et [PokéAPI](https://pokeapi.co/).

# Lien
Voir le site en action [ici](http://react-pokepoke.netlify.app)

# Features
- Router react utiliser pour accèder aux pages de l'application
  - Page d'accueil : accueil de l'application
  - Page "pokedex" : liste de plusieurs pokemons
  - Page "pokemon/:name" : page d'un pokemon particulier
  - Page "types" : tableau général sur les faiblesses de chaque type
  - Page "type/:name" : page avec un tableau sur les faiblesses des combinaisons possible avec le type choisi
  - Page "not found" : page 404 lors de l'accès à une page avec un paramettre qui n'existe pas
- Filtrer les pokemons par region d'apparition (génération) et par type
- Rechercher dynamiquement dans le pokedex
- Voir les détails de chaque pokemon
- Couleurs dynamiques en fonction du ou des types du pokemon 
- Voir les chaînes d'évolution de chaque pokemon et comment les faire évoluer
- Voir les chaînes d'évolution complexes (comme pour evoli par exemple)
- Changer les versions d'un pokemon en cliquant sur son nom (ex: vulpix -> vulpix-alola)
- Passer les images en mode shiny
- Design responsive

# Lancement du projet
- Cloner le projet en local
- Dans le dossier, lancer `npm install` puis `npm start`
- L'application se lance à l'adresse `http://localhost:3000/pokedex`

# TODO
- [ ] Ajouter un peu plus d'information dans les détails (faiblesses, compétences ...)
- [ ] Faire des pages pour les baies, compétences, ...
- [ ] Rajouter des filtres dans le pokedex (trier par jeu par exemple)