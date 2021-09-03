# 1 : Appréhendez la logique de React

Un framework JS est un ensemble de classes, fonctions et utilitaires qui nous facilitent la création d’applications pour les navigateurs ou mobiles.

L’un des outils les plus populaires, React, qui est une bibliothèque aussi bien qu’un framework, permet de créer des interfaces utilisateurs.

L’approche technique de React est de créer du code modulaire, à base de composants réutilisables.

Trois des avantages de React sont sa communauté, sa documentation et ses opportunités professionnelles.

Vous savez maintenant comment transformer un simple fichier de HTML en React – et avez créé votre premier composant !


# 2. Écrivez du code modulaire avec les composants en JSX

Maintenant vous savez que :

une interface utilisateur (ou UI) est constituée de multiples composants React qui :

sont réutilisables ; par exemple, un bouton, un élément dans une liste, un titre,

regroupent la structure, les styles et le comportement d'un élément,

sont traduits par React en gros objets, qui sont ensuite greffés au DOM ;

le JSX est une syntaxe créée par React permettant d'écrire du JavaScript. Il faut suivre quelques règles :

deux composants doivent toujours être wrappés dans un seul composant parent,

les noms des composants commencent par une majuscule,

les balises des composants doivent être refermées.

# 3.Prenez en main Create React App

Les développeurs utilisent des outils automatisés pour faciliter leur expérience de développement.

Create React App (CRA) est la boîte à outils créée par Facebook, qui reste encore la référence pour initier un projet React.

Un projet initialisé avec CRA possède toujours : 

un fichier index.html   qui est le template où vivra notre app React ;

un package.json   qui liste les dépendances et les scripts ;

un fichier index.js   dans lequel notre app React est initialisée, et greffée au HTML.

CRA s'exécute avec l’aide d’un gestionnaire de paquet (dans ce cours, yarn).

Webpack permet d'importer simplement les fichiers entre eux.

# 5. Gagnez en temps et en efficacité grâce aux listes et aux conditions

À partir d’une liste de données,  map()   permet de créer une liste de composants React.

La prop  key   est indispensable dans les listes de composants.

Si vous voulez éviter les bugs, la prop  key   doit : 

être unique au sein de la liste ;

perdurer dans le temps.

La best practice pour créer une  key   est d’utiliser l’ id   unique associée à une donnée, et de ne pas vous contenter d'utiliser l'index de l'élément dans la liste.

Une condition ternaire permet d’afficher un élément ou un autre dans le JSX, répondant à la condition "if… else...".

Il existe d'autres manières de créer des conditions en React, notamment en sortant les conditions du JSX.

# 6. Gagnez en temps et en efficacité grâce aux listes et aux conditions

À partir d’une liste de données,  map()   permet de créer une liste de composants React.

La prop  key   est indispensable dans les listes de composants.

Si vous voulez éviter les bugs, la prop  key   doit : 

être unique au sein de la liste ;

perdurer dans le temps.

La best practice pour créer une  key   est d’utiliser l’ id   unique associée à une donnée, et de ne pas vous contenter d'utiliser l'index de l'élément dans la liste.

Une condition ternaire permet d’afficher un élément ou un autre dans le JSX, répondant à la condition "if… else...".

Il existe d'autres manières de créer des conditions en React, notamment en sortant les conditions du JSX.
