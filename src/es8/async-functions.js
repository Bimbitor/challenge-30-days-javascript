const fnAsync = () => {
    return new Promise((resolve, reject) => { //& La promesa recibe 2 parametros, resolve y reject
        (true) // & Lo más normal es usar algún tipo de validación que divida caminos entre el resolve y el reject, la condición no importa mucho, a no ser que la lógica lo requiera. Podemos usar un operador ternario o un if y que solo validenun true para arrancar resolve y cuyo else arranque reject
        ? setTimeout(() => resolve ("AsynC!!"), 2000) //& solo para simular una tardanza en la consulta, se usa un Timer
        : reject(new Error("Error")); //& Resolve y reject son funciones que retornan una respuesta que reporta el estado final de la ejecución de la promesa y podemos defnir su valor pasandolo como argumento
    });
}

const anotherFn = async () => { // & se crea una función asincrona
    console.log("before");
    const somethig = await fnAsync(); // & con await se llama la función operativa que construimos y que nos interesa, El código no continuará ejecución hasta que la intrucción await haya recibido la respuesta de la promesa
    console.log(somethig);
    console.log("After");// & el código consecuente a la obtención de la promesa, al estar en el mismo bloque, no se ejecutará hasta recibir la promesa. Tener en cuenta que toda la función se hace asincrona, no solo las líneas relacionadas
}

anotherFn();