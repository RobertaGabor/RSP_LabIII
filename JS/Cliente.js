"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(sexo, nombre, apellido, id, edad) {
        var _this = _super.call(this, nombre, apellido, id) || this;
        if (Cliente.validarEdad(edad) == true) {
            _this.edad = edad;
            _this.sexo = sexo;
        }
        return _this;
    }
    Cliente.validarEdad = function (edad) {
        var numb = String(edad);
        if (edad != undefined) {
            if (numb.match('^[0-9]+$')) {
                if (edad > 0 && edad < 150) {
                    return true;
                }
            }
        }
        return false;
    };
    Cliente.CiudadanoToJSON = function (persona) {
        var personaParse = "{" + Persona.PersonaToString(persona) + ',"edad"' + ":" + '"' + persona.edad + '"' + ',"sexo"' + ":" + '"' + persona.sexo + '"' + "}";
        return JSON.parse(personaParse);
    };
    Cliente.AgregarCliente = function (sexo, nombre, apellido, id, edad) {
        var car = new Auto(sexo, nombre.value, apellido.value, id, Number(edad.value));
        Cliente.cargar(car);
        alert("Cliente agregado con exito!");
    };
    Cliente.cargarCliente = function (ve) {
        //load
        var lista;
        lista = []; //INICIALIZAR
        if (localStorage.length > 0) {
            lista = JSON.parse(localStorage.getItem("Personas"));
        }
        if (ve != undefined) {
            lista.push(ve);
            Persona.limpiarTabla();
            //limpiar tabla
        }
        localStorage.setItem("Personas", JSON.stringify(lista));
        for (var i = 0; i < lista.length; i++) {
            Persona.Mostrar(lista[i].id, lista[i].nombre, lista[i].apellido, lista[i].edad, lista[i].sexo);
        }
    };
    return Cliente;
}(Persona));
