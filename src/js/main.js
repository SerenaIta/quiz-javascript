// Quiz: Veuillez répondre aux questions ci-dessous. (50 min) (+15 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. VOus avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
// En JavaScript, une variable est un conteneur utilisé pour stocker des données, comme des nombres, des chaînes de caractères, des objets ou des valeurs booléennes.
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.

// const firstName = "Serena";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.

// let age = 22;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:

// - Balise HTML: input
// - Classe(s): class="card-input"
// - Attribut(s): id="password-input"

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE:

// - classe -> peut être utilisée sur différents plusieurs éléments et donc utilisée plusieures fois - > plusieurs éléments
// - l'ID -> peut être utilisé seulement une fois avec un élément unique - > un seul élément

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE:

// La méthode document.querySelector("..."); on l'utilise pour sélectionner un élément du DOM , donc un élément html, mais avec du CSS

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.

let cardContent = document.querySelector("p");

// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété .classList pour ajouter (.add("...")) la class ".highlight" à l'élément HTML.

cardContent.classList.add("highlight");

// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder" (.getAttribute("...")) de l'élément HTML <input> (ligne 17 du code HTML).
let inputElement = document.querySelector("#password-input");
let placeholderValue = inputElement.getAttribute("placeholder");

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:

// Un écouteur d'événement est une fonction en JS qui attend qu'un événement spécifique (comme un clic) se produise sur un élément, puis exécute une action en réponse.

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode .addEventListener("...", function() {...}) sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class ".hide" de l'élément HTML <p> (ligne 29-31 du code HTML).

let buttonElement = document.querySelector("#card-btn");

let paragraphElement = document.querySelector("#toggle-text");

buttonElement.addEventListener("click", function () {
  paragraphElement.classList.toggle("hide");
});
