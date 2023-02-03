
const consultorio = new Consultorio("valpo")

pacientes.forEach(element =>{
    let pacientes = new Paciente(element.nombre, element.rut, element.edad, element.diagnostico);
    consultorio.setPaciente(pacientes) //elemento push (ver Consultorio.js) que agrega el pacientes al consultorio
});

    console.log("=============================\nPacientes:")

    consultorio.pacientes.forEach(element =>{
        console.log(`Nombre: ${element.nombre}\nEdad: ${element.edad} \nRut: ${element.rut}\nDiagnostico: ${element.diagnostico}`)

});
console.log("=============================\nPacientesEncontrado:")

console.log(consultorio.encontrarPaciente("Armando Mochas"))



