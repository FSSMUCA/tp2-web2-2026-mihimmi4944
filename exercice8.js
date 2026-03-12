let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageCorrige = parseInt(age)
if (isNaN(ageCorrige) || ageCorrige <= 0) {
    console.log('age              : invalide')
} else {
    console.log('age              : ' + ageCorrige + ' (valide)')
}

let emailValide = email.includes("@") && email.indexOf(".") > email.indexOf("@") + 1
if (emailValide) {
    console.log('email            : "' + email + '" (valide)')
} else {
    console.log('email            : "' + email + '" (invalide : pas de point après @)')
}

let scoreCorrige = parseInt(scoreJeu)
if (isNaN(scoreCorrige)) {
    scoreCorrige = 0
}
console.log('scoreJeu         : ' + scoreCorrige + ' (extrait depuis "' + scoreJeu + '")')

let estAdminCorrige = estAdmin === "true"
console.log('estAdmin         : ' + estAdminCorrige + ' (attention : Boolean("false") = true, conversion manuelle requise)')

let connexionCorrige = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + connexionCorrige + '" (valeur par défaut via ??)')

let nombreConnexionsCorrige = Number(nombreConnexions)
if (nombreConnexionsCorrige === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
    console.log('nombreConnexions : ' + nombreConnexionsCorrige)
}

console.log("================================")