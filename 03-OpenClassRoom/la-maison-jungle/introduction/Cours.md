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


# 7. Réutilisez vos composants avec les props

Les props sont des objets que l'on peut récupérer dans les paramètres de notre composant fonction.

Il existe deux syntaxes pour assigner une valeur à une prop :

les guillemets pour les  string ;

les accolades pour tout le reste : nombres, expressions JavaScript, booléen, etc.

La déstructuration est une syntaxe permettant de déclarer une variable en l'affectant directement à la valeur d'un objet (ou tableau).

Une prop est :

toujours passée par un composant parent à son enfant ;

considérée en lecture seule dans le composant qui la reçoit.

La prop  children   est renseignée en imbriquant les enfants dans le parent : <Parent><Enfant /></Parent>.

children   est utile lorsqu'un composant ne connaît pas ses enfants à l'avance.

# 8. Interagissez avec vos composants grâce aux événements

En React, un événement s'écrit dans une balise en  camelCase, et on lui passe la fonction à appeler.

Contrairement au JS, dans la quasi totalité des cas, vous n'avez pas besoin d'utiliser  addEventListener.

React passe un événement synthétique en paramètre des fonctions de callBack. Cet événement synthétique est similaire à un événement passé en natif dans le DOM,  sauf qu'il est compatible avec tous les navigateurs.

Il existe deux grandes manières de gérer les formulaires : les formulaires contrôlés ou non contrôlés. L'utilisation des formulaires contrôlés est recommandée.

Les formulaires contrôlés sauvegardent la valeur des champs dans le state local, et accèdent à la data entrée par l'utilisateur avec  onChange.

Les formulaires contrôlés permettent de filtrer le contenu, ou d'afficher un message d'erreur en fonction de la data qui est entrée par l'utilisateur.

Sachez qu'il existe également des bibliothèques qui vous permettent de gérer les formulaires et leur validation aussi proprement que possible, par exemple le très bon outil react-hook-form.

# 9. Mettez en place votre state local avec useState

Le state local est présent à l’intérieur d’un composant : ce composant peut être re-render autant de fois que l'on veut, mais les données seront préservées.

Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React.

useState   est un hook qui permet d’ajouter le state local React à des fonctions composants :

Il nous renvoie une paire de valeurs dans un tableau de 2 valeurs, récupérée dans les variables entre crochets.

Il faut initialiser votre state avec un paramètre passé entre parenthèses – un nombre, une string, un booléen, un tableau ou même un objet.

# 10. Partagez votre state entre différents composants

Pour utiliser un même état entre plusieurs composants, il faut :

faire remonter l'état dans le composant parent commun le plus proche ;

puis faire descendre la variable d'état et la fonction pour mettre à jour cet état dans des props.


# 11. Déclenchez des effets avec useEffect

useEffectpermet d'effectuer des effets : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée.

Le hook  useEffect   est appelé après chaque rendu de votre composant. Il est possible de préciser quelle modification de donnée déclenche les effets exécutés dans useEffect, avec le tableau de dépendances.

Un tableau de dépendances vide permet d'exécuter un effet uniquement au premier rendu de votre composant.
