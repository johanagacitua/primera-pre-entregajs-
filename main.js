function saludo() {
    console.log("Bienvenido a namaste");
    alert("Bienvenido al namaste")
};

function inversor() {
    let monto = prompt ("Ingrese la cantidad de capital que desea invertir en $");
    if (monto !== "") {
        console.log("Usted desea invertir $ " + monto);
        alert("Usted desea invertir $ " + monto);
    } else { console.log("Ingrese el monto que desea invertir");
    monto = prompt ("Ingrese monto");
    }
 console.log ("Nuestros maestros se contactaran con vos a la brevedad");
 alert("Nuestros maestros se contactaran con vos a la brevedad");

}




function maestrias() {

    let maestrias = prompt("Diganos cuales son sus maestrias");
    if (maestrias != "") {
        console.log("Es un honor tenerte aqui, " + usuario + ", encontraremos el lugar perfecto para ti.")
        alert("Es un honor tenerte aqui, " + usuario + ", encontraremos el lugar perfecto para ti.")
    } else {
        alert("Ingrese por favor sus estudios");

        maestrias = prompt("Diganos cuales son sus formaciones");
        if (maestrias!= "") { console.log("Es un honor tenerte aqui, " + usuario + ", encontraremos el lugar perfecto para ti.")
        alert("Es un honor tenerte aqui, " + usuario + ", encontraremos el lugar perfecto para ti.")}
        else{
            alert("No ingreso los datos solicitados.");
            console.log("No ingreso los datos solicitados.")
            return false
        }

        
        
    }
}

function puesto() {
    console.log("Cual es el rol que te gustaria desempeñar en nuestra red?");
    alert("Cual es el rol que te gustaria desempeñar en nuestra red?");

    let cargo = prompt("Ingrese unicamente como valor, el numero indicado aqui, para el lugar que desea ocupar."
        + "\n" + "1) Estudiante" + "\n" + "2) Maestro" + "\n" + "3)Inversor");

    switch (cargo) {
        case "1":
            console.log("Gracias por tu interes en ser un estudiante de nuestra red");
            alert("Gracias por tu interes en ser un estudiante de nuestra red");

            break;

        case "2":
            console.log("Gracias por compartir tu conocimiento en nuestra red");
            alert("Gracias por compartir tu conocimiento en nuestra red");

            maestrias();

            break;
        case "3":
            console.log("Gracias por contribuir al desarrollo de la red");
            alert("Gracias por contribuir al desarrollo de la red");
            inversor();



    }





    ;
}


function permiso() {
    let objetivo = prompt("Eres mayor de 18 años?");
    if (objetivo.toLowerCase() == "si") {
        console.log("Es un placer conocerte," + usuario);
        alert("Es un placer conocerte, " + usuario);
        estudios();
        intereses();
        

    }
    else {
        console.log("Vuelve cuando lo seas");
        alert("Vuelve cuando lo seas");
        return false

    };
}

function intereses() {
    let intereses = prompt("Cuales son tus intereses? :" + "\n" + "1) Tarot" + "\n" + "2) Reiki" + "\n" + "3) Registros" + "\n" + "4) Terapia aurica" + "\n" + "5) Otro");
    if (intereses == "1" || intereses.toLowerCase() == "tarot") {
        console.log("Excelente");
        alert("Excelente");

        puesto();
    } else if (intereses == "2" || intereses.toLowerCase() == "reiki") { console.log("Estamos juntos en este camino"); alert("Estamos juntos en este camino");
    puesto(); }
    else if (intereses == "3" || intereses.toLowerCase() == "registros") {
        console.log("Te fascinara esta herramienta");
        alert("Te fascinara esta herramienta");

        puesto();
    } else if (intereses == "4" || intereses.toLowerCase() == "terapia aurica" || intereses.toLowerCase() == " terapia aurica" || intereses.toLowerCase() == "terapia") {
        console.log("De las mejores herramientas para el autoconocimiento"); alert("De las mejores herramientas de autoconocimiento");

        puesto();

    } else if (intereses == "5" || intereses.toLowerCase() == "otro") {
        console.log("Este sitio no es para ti");
        alert("Este sitio no es para ti")
        return false
    }
}

saludo();



let usuario = prompt("Ingrese su nombre y apellido");
if (usuario != "") {
    console.log("Hola, " + usuario + ", bienvenido a namaste");
    alert("Hola, " + usuario + ", bienvenido a namaste")
}
else {
    alert("Ingrese sus datos");
    usuario = prompt("Ingrese su nombre y apellido")
};

function estudios() {
    let estudios = prompt("Conoces tu aura y Espiritualidad")
    if (estudios.toLowerCase() == "si") {
        console.log("Que bueno tenerte aqui, " + usuario);
        alert("Que bueno tenerte aqui, " + usuario)
    }
    else {
        console.log("No importa, aqui comenzara nuestro camino a la sanacion.");
        alert("No importa, aqui comenzara nuestro camino a la sanacion.")
    }






}


permiso();