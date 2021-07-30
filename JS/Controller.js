"use strict";
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.handleEvent = function (ev) {
        var bton = ev.target;
        var id = Controller.$("InId");
        var nom = Controller.$("InNo");
        var ape = Controller.$("InAp");
        var eda = Controller.$("InEd");
        var sex = Controller.$("InS");
        var cuadro = Controller.$("grilla");
        var idNuevo;
        switch (bton.id) {
            case "limpV":
                localStorage.clear();
                break;
            case "altaV":
                //id
                var idList = Persona.traerLista();
                var ultimo;
                idNuevo = 0;
                if (idList.length > 0) {
                    ultimo = idList.reduce(function (a, b) {
                        if (a.id >= b.id)
                            return a;
                        else if (a.id <= b.id)
                            return b;
                    });
                    idNuevo = ultimo.id + 1;
                }
                else {
                    idNuevo = 1;
                }
                alert(idNuevo);
                id.textContent = idNuevo;
                cuadro.hidden = false;
                break;
            case "closed":
                cuadro.hidden = true;
                break;
            case "elimV":
                break;
            case "Adding":
                //agrego
                var sexS = sex.options[tipo.selectedIndex].text;
                Cliente.AgregarCliente(sexS, nom, ape, idNuevo, eda);
                break;
            case "calcP":
                var lista = Persona.traerLista();
                var suma = lista.reduce(function (a, b) {
                    return a + b.edad;
                }, 0);
                if (lista.length > 0) {
                    Controller.$("promedio").value = (suma / lista.length).toString();
                }
                break;
            case "idV":
                if (Controller.$("idV").checked == true) {
                    Controller.filtercolumnShow(0);
                }
                else {
                    Controller.filtercolumnHide(0);
                }
                break;
            case "nombreV":
                if (Controller.$("nombreV").checked == true) {
                    Controller.filtercolumnShow(2);
                }
                else {
                    Controller.filtercolumnHide(2);
                }
                break;
            case "apellidoV":
                if (Controller.$("apellidoV").checked == true) {
                    Controller.filtercolumnShow(1);
                }
                else {
                    Controller.filtercolumnHide(1);
                }
                break;
            case "edadV":
                if (Controller.$("edadV").checked == true) {
                    Controller.filtercolumnShow(3);
                }
                else {
                    Controller.filtercolumnHide(3);
                }
                break;
            case "filtros":
                var filtrado = bton.options[bton.selectedIndex].text;
                if (filtrado == "Femenino") {
                    var autos = Persona.traerLista();
                    Persona.limpiarTabla();
                    var autosfiltrados = autos.filter(function (autito) { return autito.sexo.match("Femenino"); });
                    Persona.cargarPagina(autosfiltrados);
                }
                else if (filtrado == "Masculino") {
                    var camion = Persona.traerLista();
                    Persona.limpiarTabla();
                    var cmfiltrados = camion.filter(function (cm) { return cm.sexo.match("4x4"); });
                    Persona.cargarPagina(cmfiltrados);
                }
                else {
                    var todos = Persona.traerLista();
                    Persona.limpiarTabla();
                    Persona.cargarPagina(todos);
                }
                break;
        }
    };
    Controller.$ = function (ide) {
        return document.getElementById(ide);
    };
    Controller.filtercolumnHide = function (columna) {
        var _a, _b;
        var lista = Persona.traerLista();
        var fila = (_a = Controller.$("mitabla")) === null || _a === void 0 ? void 0 : _a.childNodes[1].childNodes[1];
        var celda = document.getElementsByTagName('th');
        celda[columna].style.display = "none";
        for (var i = 0; i < lista.length; i++) {
            (_b = Controller.$("tcuerpo")) === null || _b === void 0 ? void 0 : _b.childNodes[i + 1].childNodes[columna].style.display = "none";
        }
    };
    Controller.filtercolumnShow = function (columna) {
        var _a, _b;
        var lista = Persona.traerLista();
        var fila = (_a = Controller.$("mitabla")) === null || _a === void 0 ? void 0 : _a.childNodes[1].childNodes[1];
        var celda = document.getElementsByTagName('th');
        celda[columna].style.display = "table-cell";
        for (var i = 0; i < lista.length; i++) {
            (_b = Controller.$("tcuerpo")) === null || _b === void 0 ? void 0 : _b.childNodes[i + 1].childNodes[columna].style.display = "table-cell";
        }
    };
    return Controller;
}());
window.addEventListener("load", function () {
    Persona.cargarPagina();
    var stage = new Controller();
    var btnDel = document.getElementById("elimV");
    btnDel.addEventListener("click", stage);
    var btnClear = document.getElementById("limpV");
    btnClear.addEventListener("click", stage);
    var btnPromedio = document.getElementById("calcP");
    btnPromedio.addEventListener("click", stage);
    var btnAlta = document.getElementById("altaV");
    btnAlta.addEventListener("click", stage);
    var btnAceptar = document.getElementById("Adding");
    btnAceptar.addEventListener("click", stage);
    var btnCerrar = document.getElementById("closed");
    btnCerrar.addEventListener("click", stage);
    var comboFiltro = document.getElementById("filtros");
    comboFiltro.addEventListener("change", stage);
    var idCB = document.getElementById("idV");
    idCB.addEventListener("change", stage);
    var nomCB = document.getElementById("nombreV");
    nomCB.addEventListener("change", stage);
    var apeCB = document.getElementById("apellidoV");
    apeCB.addEventListener("change", stage);
    var edadCB = document.getElementById("edadV");
    edadCB.addEventListener("change", stage);
});
