// =========================
// PANIER
// =========================

let panier = [];


// Ajouter un produit
function ajouterAuPanier(nom, prix) {

    panier.push({
        nom: nom,
        prix: prix
    });

    mettreAJourPanier();

    ouvrirPanier();
}


// Mettre à jour le panier
function mettreAJourPanier() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    // Nombre de produits
    cartCount.textContent = panier.length;


    // Panier vide
    if (panier.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Votre panier est vide.
            </p>
        `;

        cartTotal.textContent = "0 FCFA";

        return;
    }


    // Afficher les produits
    cartItems.innerHTML = "";

    panier.forEach((produit, index) => {

        const item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `

            <div>
                <h4>${produit.nom}</h4>

                <p>
                    ${produit.prix.toLocaleString("fr-FR")} FCFA
                </p>
            </div>

            <button
                class="remove-btn"
                onclick="supprimerProduit(${index})">
                Supprimer
            </button>

        `;

        cartItems.appendChild(item);

    });


    // Calcul du total
    let total = 0;

    panier.forEach(produit => {
        total += produit.prix;
    });


    cartTotal.textContent =
        total.toLocaleString("fr-FR") + " FCFA";
}


// Supprimer un produit
function supprimerProduit(index) {

    panier.splice(index, 1);

    mettreAJourPanier();
}


// Ouvrir le panier
function ouvrirPanier() {

    document
        .getElementById("cart-overlay")
        .classList.add("active");
}


// Fermer le panier
function fermerPanier() {

    document
        .getElementById("cart-overlay")
        .classList.remove("active");
}


// =========================
// COMMANDE
// =========================

function commander() {

    if (panier.length === 0) {

        alert("Votre panier est vide.");

        return;
    }


    alert(
        "Merci pour votre commande ! Nous allons vous contacter pour confirmer la livraison."
    );
}


// =========================
// FORMULAIRE
// =========================

function envoyerMessage(event) {

    event.preventDefault();

    const nom =
        document.getElementById("nom").value;

    alert(
        "Merci " + nom +
        " ! Votre message a bien été envoyé."
    );

    event.target.reset();
}