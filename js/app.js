var estudiantes = [
    {
        "codigo": 1,
        "nombre": "Ragnar",
        "nota": 4.9
    },
    {
        "codigo": 2,
        "nombre": "Floki",
        "nota": 4.8
    },
    {
        "codigo": 3,
        "nombre": "Lagertha",
        "nota": 4.7
    },
    {
        "codigo": 4,
        "nombre": "Rollo",
        "nota": 4.3
    },
    {
        "codigo": 5,
        "nombre": "Lothbrok",
        "nota": 4.8
    },
    {
        "codigo": 6,
        "nombre": "Ivar",
        "nota": 4.1
    },
    {
        "codigo": 7,
        "nombre": "Ubbe",
        "nota": 4.3
    },
    {
        "codigo": 8,
        "nombre": "King Ecbert",
        "nota": 4.8
    },
    {
        "codigo": 9,
        "nombre": "Queen Aslaug",
        "nota": 4.4
    },
    {
        "codigo": 10,
        "nombre": "Aethelwulf",
        "nota": 4.5
    }
];

// Muestra todos los estudiantes en una tabla:
function mostrarEstudiantes(){
    document.getElementById('alumnos').style.display = "table";
    var notasTBody = document.getElementById('notas');

    while(notasTBody.hasChildNodes()){
        notasTBody.removeChild(notasTBody.lastChild);
    }

    for(var i = 0; i < estudiantes.length; ++i){
        var nuevoTr = document.createElement('tr');

        var idTd = document.createElement('td');
        idTd.textContent = estudiantes[i].codigo;
        nuevoTr.appendChild(idTd);

        var nombreTd = document.createElement('td');
        nombreTd.textContent = estudiantes[i].nombre;
        nuevoTr.appendChild(nombreTd);

        var notaTd = document.createElement('td');
        notaTd.textContent = estudiantes[i].nota;
        nuevoTr.appendChild(notaTd);

        notasTBody.appendChild(nuevoTr);
    }
}

// Calcula el promedio de notas de todos los estudiantes:
function calcularNotaPromedio(){
    var sumaNotas = 0.0;

    for(var i = 0; i < estudiantes.length; ++i){
        sumaNotas += estudiantes[i].nota;
    }

    alert("La nota promedio es: " + (sumaNotas/estudiantes.length).toFixed(2));
}

// Calcula la nota mayor entre las notas de todos los estudiantes:
function calcularNotaMayor(){
    var indiceNotaMayor = 0;
    var notaMayor = estudiantes[indiceNotaMayor].nota;

    for(var i = 1; i < estudiantes.length; ++i){
        if(estudiantes[i].nota > notaMayor){
            notaMayor = estudiantes[i].nota;
            indiceNotaMayor = i;
        }
    }

    alert("El estudiante " + estudiantes[indiceNotaMayor].nombre + " tiene la nota mayor: " + notaMayor);
}

// Calcula nota menor entre las notas de todos los estudiantes:
function calcularNotaMenor(){
    var indiceNotaMenor = 0;
    var notaMenor = estudiantes[indiceNotaMenor].nota;

    for(var i = 1; i < estudiantes.length; ++i){
        if(estudiantes[i].nota < notaMenor){
            notaMenor = estudiantes[i].nota;
            indiceNotaMenor = i;
        }
    }

    alert("El estudiante " + estudiantes[indiceNotaMenor].nombre + " tiene la nota menor: " + notaMenor);
}
