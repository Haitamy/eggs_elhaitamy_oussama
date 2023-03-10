import { Personne, bol, Epicerie, poele } from "./objet.js";
import { oignon, oeuf, fromage, epice, beurre } from "./instances.js";

export function goingTo(endroit) {
  Personne.seDeplacer(endroit.nom);
  console.log(Personne.nom + " est actuellement à la " + Personne.lieu);
  endroit.personnes.push(`${Personne.nom}`);
}

export function leave(endroit) {
  endroit.personnes.pop();
  console.log(`${Personne.nom} a quitté ${endroit.nom}`);
}

export function courses(prendreIngredient) {
  for (let i = 0; i < prendreIngredient.length; i++) {
    Personne.mainGauche.push(prendreIngredient[i]);
    Personne.mainDroite[0][0].contenu[i] = Personne.mainGauche[0];
    Personne.mainGauche.pop();
    console.log(
      `Vous avez mis ${Personne.mainDroite[0][0].contenu[i].nom} dans le panier`
    );
  }
}

export function payerCourses(contenuPanier) {
  for (let i = 0; i < contenuPanier.length; i++) {
    switch (contenuPanier[i]) {
      case "oignon":
        Personne.payerArticle(oignon);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i].nom}`
        );
        break;
      case "oeuf":
        Personne.payerArticle(oeuf);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i].nom}`
        );
        break;
      case "beurre":
        Personne.payerArticle(beurre);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i].nom}`
        );
        break;
      case "epice":
        Personne.payerArticle(epice);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i].nom}`
        );
        break;
      case "fromage":
        Personne.payerArticle(fromage);
        console.log(
          `Il reste ${Personne.argent} euros après avoir acheté ${contenuPanier[i].nom}`
        );
        break;
    }
  }
}

export function mettreDansBol(contenuPanier) {
  for (let i = 0; i < contenuPanier.length; i++) {
    bol.contenu.push(contenuPanier[i]);
    console.log(`${contenuPanier[i].nom} a été mis dans le bol`);
  }
  contenuPanier = [];
}

export function rendrePanier() {
  Personne.mainDroite = [];
  Epicerie.paniers.unshift("panier");
  console.log(`le panier a été rendu`);
}

export function mettreDansPoele() {
  poele.contenu.push(bol.contenu[0])
  bol.contenu=[]
  console.log(`${poele.contenu[0].nom} a été mis dans la poele`);
}