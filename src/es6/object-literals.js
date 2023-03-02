function newUser(user, age, country, uId) {
    return { // * Con los parámetros de objeto puedes obviar la repetición de nombres, JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor.
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("bndx", 24, "COL", 1));