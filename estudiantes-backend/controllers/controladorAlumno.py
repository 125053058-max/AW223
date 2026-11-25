from flask import Blueprint 

controladorAlumnoBP= Blueprint('controladorAlumno',__name__)

#ruta para que arranque
@controladorAlumnoBP.route('/')
def inicio():
    return 'Hola syy el backend alumno'
#ruta para insert
@controladorAlumnoBP.route('/guardarAlumno' ,methods=['POST'])
def guardar():
    return 'Se guardo el alumno'
#ruta para consulta todo
@controladorAlumnoBP.route('/consultaTodo')
def guardar():
    return 'Se consulto todos todos los alumnos'
#para actualizar
@controladorAlumnoBP.route('/actualizarAlumno' ,methods=['PUT'])
def actualizar():
    return 'Se actualizo el alumno'
#Ruta para eliminar
@controladorAlumnoBP.route('/eliminararAlumno' ,methods=['DELETE'])
def eliminar():
    return 'Se borro el alumno'


