try {
    hello ();
} catch (error) {
    console.log(error);
}

try {
    onotherFn();
} catch { // * con ES10 se aplico que la devoluvion del error en el catch, es opcional, si no definimos su entrada como un parametro no va a pasar nada, sin embargo el error es util y se recomienda usarlo
    console.log("esto es un error")
}