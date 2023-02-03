function Consultorio(nombre,paciente){
    this.nombre = 'Consultorio del mar';
    this.pacientes = [];


    //Getters
    this.getNombre = (nombre) =>{
        return this.nombre = nombre;
    }
    this.getPaciente = (paciente) => {
        return this.paciente = paciente;
    }

    //Setters  (paciente)
    this.setPaciente = (paciente) => { this.pacientes.push(paciente)

    }

    /// se debe trabajar teniendo en cuenta que desde consutltorio se parte la busqueda porque es el elemento que lo engloba todo///
    this.encontrarPaciente =  (nombrePaciente) =>{
         return this.pacientes.find (element => element.nombre == nombrePaciente)
         
}
 


};