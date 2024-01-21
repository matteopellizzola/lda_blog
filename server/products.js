function Product (id, name, description, ingredients, bakingDay, typeOfCooking, shelfLife, img1, img2) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.bakingDay = bakingDay;
    this.typeOfCooking = typeOfCooking;
    this.shelfLife = shelfLife;
    this.img1 = img1;
    this.img2 = img2;
}

function ProductsList () {
    this.productsList = [];

    this.add = (product) => {
        this.productsList.push(product);
    };
}

exports.Product = Product;
exports.ProductsList = ProductsList;