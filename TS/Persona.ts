class Persona
{
    nombre:string;
    apellido:string;
    id:number;

    constructor(nombre:string,apellido:string,id:number)
    {
        this.apellido=apellido;
        this.id=id;
        this.nombre=nombre;
    }

    static PersonaToString(human:Persona)
    {
        return '"nombre"' +":"+ '"'+human.nombre + '"'+ ',"apellido"'+":" + '"'+human.apellido + '"'+',"id"'+":" + '"'+human.id + '"';
    }
    
    public static Mostrar(id:number,nombre:string,apellido:string,edad:number,sexo:string):void{
        
        var cuerpo:HTMLElement|null=Controller.$("tcuerpo");
        var row= document.createElement("tr");
        cuerpo?.appendChild(row);
  
        var tdId=document.createElement("td");
        row.appendChild(tdId);
        var textoId=document.createTextNode(String(id));
        tdId.appendChild(textoId);
        tdId.appendChild(textoId);
        tdId.className="PRIMARY";

        var tdnom=document.createElement("td");
        row.appendChild(tdnom);
        var textoNom=document.createTextNode(nombre);
        tdnom.appendChild(textoNom);

        var tdape=document.createElement("td");
        row.appendChild(tdape);
        var textoape=document.createTextNode(apellido);
        tdape.appendChild(textoape);

        var tdedad=document.createElement("td");
        row.appendChild(tdedad);
        var textoe=document.createTextNode(String(edad));
        tdedad.appendChild(textoe);

        var tdsex=document.createElement("td");
        row.appendChild(tdsex);
        var textos=document.createTextNode(sexo);
        tdsex.appendChild(textos); 
        
    }

    public static cargarPagina(lista?:Array<Cliente>)
    {
        if (lista==undefined)
        {
            var lista:Array<Cliente>;
            lista=[]; //INICIALIZAR  
            if(localStorage.length>0)
            {
                lista=JSON.parse(localStorage.getItem("Personas"));
            } 
            for(var i=0;i<lista.length;i++)
            {
    
                Persona.Mostrar(lista[i].id,lista[i].nombre,lista[i].apellido,lista[i].edad,lista[i].sexo)
            }        
        }

    }
    public static limpiarTabla()
    {
        var elmtTable = document.getElementById('tcuerpo');
        var tableRows = elmtTable.getElementsByTagName('tr');
        var rowCount = tableRows.length;

        for (var x=rowCount-1; x>-1; x--) {
            elmtTable.removeChild(tableRows[x]);
        }
    }
    public static traerLista()
    {
        var lista:Array<Cliente>;
        lista=[]; //INICIALIZAR
        if(localStorage.length>0)
        {
            lista=JSON.parse(localStorage.getItem("Personas"));
        }
        return lista;
    }

}