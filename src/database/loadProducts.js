import { Product, ProductsList } from "./products";

function loadProducts () {
    const transcript = new ProductsList();

    transcript.add(new Product(
        1,
        "Panini morbidi colorati",
        "con curcuma, barbabietola, alga spirulina e carbone vegetale, pronti a accogliere la farcitura preferita",
        "Farina 🌾 di grano tenero tipo 0 macinata a pietra, 🥛, miele 🍯, sale 🧂, lievito madre e olio extravergine d’oliva.",
        "Giovedì",
        "Forno a legna",
        "5 giorni",
        "",
        ""
    ));
    transcript.add(new Product(
        2,
        "Sfoglietti",
        "crackers croccanti con vino bianco",
        "farina di grano antico tipo 2, olio extravergine di oliva, vino bianco, sale",
        "Martedì",
        "Forno a legna",
        "15 giorni",
        "./imgs/panini1.jpeg",
        "./imgs/panini2.jpeg"
    ));
    transcript.add(new Product(
        3,
        "Panini morbidi colorati",
        "con curcuma, barbabietola, alga spirulina e carbone vegetale, pronti a accogliere la farcitura preferita",
        "Farina 🌾 di grano tenero tipo 0 macinata a pietra, 🥛, miele 🍯, sale 🧂, lievito madre e olio extravergine d’oliva.",
        "Giovedì",
        "Forno a legna",
        "5 giorni",
        "./imgs/panini1.jpeg",
        "./imgs/panini2.jpeg"
    ));

    return transcript;
}

export default loadProducts;