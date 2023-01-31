let contactos = ["jafetrodriguez", "oscarramirez", "julianalvana", "danielaavendanio"];

function agregarContacto(nombreContacto) {
    contactos.push(nombreContacto);
}

agregarContacto("sergiovargas");

function borrarContacto(nombreContacto) {
    let indiceContacto = contactos.indexOf(nombreContacto);
    contactos.splice(indiceContacto, 1);
    
}
borrarContacto("jafetrodriguez");
console.log(contactos);

function imprimirContactos(){
    for (const contacto of contactos) {
        console.log(contacto);
    }
}


imprimirContactos();
