let persona1 = {
    id:1,
    nombres:"morty antonio",
    apellidos:"smith sanchez",
    telefono:"123456789",
    ubicaciones:{
        ciudad:"springfield",
        direccion:"avenidad siempre viva",
    }
}
let persona2 = {
    id:2,
    nombres:"Homero J",
    apellidos:"Simpson",
    telefono:"123456789",
    ubicaciones:{
        ciudad:"springfield",
        direccion:"avenidad siempre viva",
    }
}
let persona3 = {
    id:3,
    nombres:"Lukas ",
    apellidos:"Skywaker",
    telefono:"1234567891",
    ubicaciones:{
        ciudad:"El espacio",
        direccion:"La luna",
    }
}

let personas = [persona1,   persona2, persona3];

function agregrarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    nuevoContacto = {
        id:id,
        nombres:nombres,
        apellidos:apellidos,
        telefono:telefono,
        ubicacion:{
            ciudad:ciudad,
            direccion:direccion
        }}
    personas.push(nuevoContacto);


}
agregrarContacto(123,"jota","bebesin","3112546878949849984564", "bogoteishon", "avenidad siempre muerta")


function eliminarContactoPorId(id){
     personas = personas.filter(persona => persona.id != id) 
}
eliminarContactoPorId(2)

function eliminarContactoPorNombres(nombres){
    personas = personas.filter(persona => persona.nombres != nombres)
}
eliminarContactoPorNombres("jota")

function mostrarEnPantalla() {
    personas.forEach(persona => {
        console.log(persona)
    });
}
mostrarEnPantalla();

function actualizarContactos(id, nombres, apellidos, telefono, ciudad, direccion){
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].id === id) {
            personas[i] = {
                id,
                nombres: nombres,
                apellidos: apellidos,
                telefono: telefono,
                ubicaciones: {
                    ciudad: ciudad,
                    direccion: direccion
                }
            }
        }
    }
}
actualizarContactos(1,"hoto", "apellidoasd","1312314123","bogotaad","calleasd12")
console.log(personas)