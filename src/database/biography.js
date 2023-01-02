function Biography (name, text) {
    this.name = name;
    this.text = text;
}

function BiographyObj () {
    this.biographyObj = {};

    this.add = (bio) => {
        this.biographyObj[bio.name] = bio.text;
    };
}

export { Biography, BiographyObj };