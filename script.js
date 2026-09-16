const diseños = [

    {
        nombre: "Pink Coquette",

        edad: ["13-17", "18-25"],

        estilo: ["coquette"],

        color: ["rosa"],

        largo: ["cortas", "medianas"],

        ocasion: ["diario", "cita"],

        imagen: "img/pink-coquette.jpg",

        descripcion:
            "Uñas rosas delicadas con detalles de moños y pequeños corazones."
    },


    {
        nombre: "French Elegante",

        edad: ["18-25", "26-40", "41+"],

        estilo: ["elegante", "minimalista"],

        color: ["blanco", "nude"],

        largo: ["cortas", "medianas"],

        ocasion: ["diario", "boda", "graduacion"],

        imagen: "img/french-elegante.jpg",

        descripcion:
            "Una manicura francesa clásica, limpia y elegante que combina con todo."
    },


    {
        nombre: "Red Glam",

        edad: ["18-25", "26-40"],

        estilo: ["glamour", "atrevido"],

        color: ["rojo"],

        largo: ["medianas", "largas"],

        ocasion: ["fiesta", "cita"],

        imagen: "img/red-glam.jpg",

        descripcion:
            "Rojo intenso con detalles brillantes para un look llamativo y sofisticado."
    },


    {
        nombre: "Black Luxury",

        edad: ["18-25", "26-40", "41+"],

        estilo: ["atrevido", "glamour"],

        color: ["negro"],

        largo: ["medianas", "largas", "extra"],

        ocasion: ["fiesta"],

        imagen: "img/black-luxury.jpg",

        descripcion:
            "Uñas negras con detalles dorados y acabado brillante."
    },


    {
        nombre: "Lavender Dream",

        edad: ["13-17", "18-25", "26-40"],

        estilo: ["divertido", "minimalista"],

        color: ["morado"],

        largo: ["cortas", "medianas"],

        ocasion: ["diario", "vacaciones"],

        imagen: "img/lavender-dream.jpg",

        descripcion:
            "Tonos lavanda suaves con pequeñas flores para un estilo fresco."
    },


    {
        nombre: "Ocean Nails",

        edad: ["13-17", "18-25", "26-40"],

        estilo: ["divertido"],

        color: ["azul"],

        largo: ["medianas", "largas"],

        ocasion: ["vacaciones", "diario"],

        imagen: "img/ocean-nails.jpg",

        descripcion:
            "Diseño inspirado en el océano con tonos azules y detalles brillantes."
    },


    {
        nombre: "Green Nature",

        edad: ["18-25", "26-40", "41+"],

        estilo: ["minimalista"],

        color: ["verde"],

        largo: ["cortas", "medianas"],

        ocasion: ["diario", "vacaciones"],

        imagen: "img/green-nature.jpg",

        descripcion:
            "Verde suave combinado con pequeños detalles naturales."
    },


    {
        nombre: "Rainbow Party",

        edad: ["13-17", "18-25"],

        estilo: ["divertido"],

        color: ["multicolor"],

        largo: ["medianas", "largas"],

        ocasion: ["fiesta", "vacaciones"],

        imagen: "img/rainbow-party.jpg",

        descripcion:
            "Cada uña tiene un color diferente para un look alegre y divertido."
    },


    {
        nombre: "Nude Chic",

        edad: ["26-40", "41+"],

        estilo: ["elegante", "minimalista"],

        color: ["nude"],

        largo: ["cortas", "medianas"],

        ocasion: ["diario", "boda"],

        imagen: "img/nude-chic.jpg",

        descripcion:
            "Tonos nude naturales con un acabado sofisticado y discreto."
    },


    {
        nombre: "Wedding Pearl",

        edad: ["18-25", "26-40", "41+"],

        estilo: ["elegante", "glamour"],

        color: ["blanco", "nude"],

        largo: ["medianas", "largas"],

        ocasion: ["boda"],

        imagen: "img/wedding-pearl.jpg",

        descripcion:
            "Diseño blanco perlado perfecto para una ocasión especial."
    }

];



const boton =
    document.getElementById("buscarBtn");

const contenedor =
    document.getElementById(
        "contenedorResultados"
    );



boton.addEventListener(
    "click",
    buscarDiseños
);



function buscarDiseños() {

    const edad =
        document.getElementById(
            "edad"
        ).value;


    const estilo =
        document.getElementById(
            "estilo"
        ).value;


    const color =
        document.getElementById(
            "color"
        ).value;


    const largo =
        document.getElementById(
            "largo"
        ).value;


    const ocasion =
        document.getElementById(
            "ocasion"
        ).value;



    /* COMPROBAR QUE TODO ESTÉ LLENO */

    if (
        !edad ||
        !estilo ||
        !color ||
        !largo ||
        !ocasion
    ) {

        contenedor.innerHTML = `

            <div class="mensaje">

                <span>💕</span>

                <p>
                    Por favor completa todas
                    las opciones para encontrar
                    tus diseños ideales.
                </p>

            </div>

        `;

        return;
    }



    /* BUSCAR COINCIDENCIA EXACTA */

    let resultados =
        diseños.filter(diseño => {

            return (

                diseño.edad.includes(edad) &&

                diseño.estilo.includes(estilo) &&

                diseño.color.includes(color) &&

                diseño.largo.includes(largo) &&

                diseño.ocasion.includes(ocasion)

            );

        });



    /*

       SI NO EXISTE UNA COINCIDENCIA
       EXACTA, BUSCAMOS LOS DISEÑOS
       QUE MÁS SE PARECEN.

    */

    if (
        resultados.length === 0
    ) {

        resultados = diseños

            .map(diseño => {

                let puntos = 0;


                if (
                    diseño.edad.includes(edad)
                ) {
                    puntos++;
                }


                if (
                    diseño.estilo.includes(estilo)
                ) {
                    puntos++;
                }


                if (
                    diseño.color.includes(color)
                ) {
                    puntos++;
                }


                if (
                    diseño.largo.includes(largo)
                ) {
                    puntos++;
                }


                if (
                    diseño.ocasion.includes(ocasion)
                ) {
                    puntos++;
                }


                return {

                    diseño: diseño,

                    puntos: puntos

                };

            })


            .filter(
                item => item.puntos >= 2
            )


            .sort(
                (a, b) =>
                    b.puntos - a.puntos
            )


            .slice(0, 4)


            .map(
                item => item.diseño
            );

    }



    mostrarResultados(
        resultados
    );

}



function mostrarResultados(
    resultados
) {


    if (
        resultados.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="mensaje">

                <span>😢</span>

                <p>
                    No encontramos diseños
                    similares. Prueba cambiando
                    alguna de tus preferencias.
                </p>

            </div>

        `;

        return;
    }



    contenedor.innerHTML =
        resultados.map(
            diseño => `

            <article class="tarjeta">


                <div class="tarjeta-imagen">

                    <img
                        src="${diseño.imagen}"
                        alt="${diseño.nombre}"
                        loading="lazy"
                    >

                </div>


                <div class="tarjeta-contenido">

                    <h3>
                        ${diseño.nombre}
                    </h3>


                    <p>
                        ${diseño.descripcion}
                    </p>


                    <span class="etiqueta">
                        💖 Recomendado para ti
                    </span>

                </div>


            </article>

        `
        ).join("");



    /*

       LLEVAR AL USUARIO
       HACIA LOS RESULTADOS

    */

    document
        .querySelector(".resultados")
        .scrollIntoView({
            behavior: "smooth"
        });

}