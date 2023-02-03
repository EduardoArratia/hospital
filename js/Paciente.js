function Paciente(nombre,rut,edad,diagnostico){
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad ;
    this.diagnostico = diagnostico;

    this.getNombre = () =>{return this.nombre};// se escribre como getNombre para evitar que se pueda modificar ese dato.
    this.getRut = () =>{return this.rut};
    this.getEdad = () =>{return this.edad};
    this.getDiagnostico = () =>{return this.diagnostico};


}