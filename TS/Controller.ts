
class Controller implements EventListenerObject 
{
    
    public handleEvent(ev:Event):void
    {   
        let bton:HTMLElement=<HTMLElement>ev.target
        var id:HTMLInputElement=Controller.$("InId");
        var nom:HTMLInputElement=Controller.$("InNo");
        var ape:HTMLInputElement=Controller.$("InAp");
        var eda:HTMLInputElement=Controller.$("InEd");
        var sex:HTMLInputElement=Controller.$("InS");
        var cuadro:HTMLElement=Controller.$("grilla");   
        var idNuevo:number;

        switch(bton.id)
        {
            case "limpV":
                localStorage.clear();
                break;
            case "altaV":
                
                //id
                var idList=Persona.traerLista();
                var ultimo:Cliente;
                idNuevo=0;
                if(idList.length>0)
                {
                    ultimo=idList.reduce(function(a, b) {
                    if(a.id>=b.id) return a
                    else if (a.id<=b.id) return b
                    });
                    idNuevo=ultimo.id+1;
                }
                else
                {
                    idNuevo=1;
                }
                alert(idNuevo)
                id.textContent=idNuevo;
                cuadro.hidden=false;
                break;
            case "closed":
                cuadro.hidden=true;
                break;
            case "elimV":
                break;
            case "Adding":
              
                //agrego
                var sexS:string= sex.options[tipo.selectedIndex].text;
                Cliente.AgregarCliente(sexS,nom,ape,idNuevo,eda);
                break;
            case "calcP":
                var lista:Array<Cliente>=Persona.traerLista();
                
                var suma:number=lista.reduce(function(a,b){
                    return a+b.edad
                },0);
                if(lista.length>0)
                {
                    Controller.$("promedio").value=(suma/lista.length).toString();
                }
                break;
            case "idV":
                if(Controller.$("idV").checked==true)
                {
                    Controller.filtercolumnShow(0);
                }
                else
                {
                    Controller.filtercolumnHide(0);
                }
                
                break;
            case "nombreV":
                if(Controller.$("nombreV").checked==true)
                {
                    Controller.filtercolumnShow(2);
                }
                else
                {
                    Controller.filtercolumnHide(2);
                }
                
                break;
            case "apellidoV":
                if(Controller.$("apellidoV").checked==true)
                {
                    Controller.filtercolumnShow(1);
                }
                else
                {
                    Controller.filtercolumnHide(1);
                }
                break;
            case "edadV":
                if(Controller.$("edadV").checked==true)
                {
                    Controller.filtercolumnShow(3);
                }
                else
                {
                    Controller.filtercolumnHide(3);
                }
                break;
            case "filtros":
                var filtrado=bton.options[bton.selectedIndex].text;
                if(filtrado=="Femenino")
                {
                    var autos= Persona.traerLista();
                    Persona.limpiarTabla();
                    var autosfiltrados=autos.filter(autito => autito.sexo.match("Femenino"))
                    Persona.cargarPagina(autosfiltrados);
                    
                }
                else if(filtrado=="Masculino")
                {
                    var camion= Persona.traerLista();
                    Persona.limpiarTabla();
                    var cmfiltrados=camion.filter(cm => cm.sexo.match("4x4"))
                    Persona.cargarPagina(cmfiltrados);
                }
                else
                {
                    var todos = Persona.traerLista();
                    Persona.limpiarTabla();
                    Persona.cargarPagina(todos);
                }
                break;
        }
    }

    public static $(ide:string):HTMLElement|null
    {
        return document.getElementById(ide);
    }

    private static filtercolumnHide(columna:number)
    {

        var lista=Persona.traerLista();
        var fila=Controller.$("mitabla")?.childNodes[1].childNodes[1];
        var celda= document.getElementsByTagName('th');
        celda[columna].style.display="none";
        for(var i:number=0;i<lista.length;i++)
        {
            Controller.$("tcuerpo")?.childNodes[i+1].childNodes[columna].style.display="none";
            
        } 
        
    }

    private static filtercolumnShow(columna:number)
    {

        var lista=Persona.traerLista();
        var fila=Controller.$("mitabla")?.childNodes[1].childNodes[1];
        var celda= document.getElementsByTagName('th');
        celda[columna].style.display="table-cell";

        for(var i:number=0;i<lista.length;i++)
        {
           Controller.$("tcuerpo")?.childNodes[i+1].childNodes[columna].style.display="table-cell"
        } 
        
    }
}

window.addEventListener("load",()=>
{
    
    //Persona.cargarPagina();

    let stage:EventListenerObject= new Controller();
    
    let btnDel = <HTMLElement>document.getElementById("elimV");
    btnDel.addEventListener("click",stage);
    
    let btnClear = <HTMLElement>document.getElementById("limpV");
    btnClear.addEventListener("click",stage);

    let btnPromedio = <HTMLElement>document.getElementById("calcP");
    btnPromedio.addEventListener("click",stage);
    
    let btnAlta = <HTMLElement>document.getElementById("altaV");
    btnAlta.addEventListener("click",stage);
    
    let btnAceptar = <HTMLElement>document.getElementById("Adding");
    btnAceptar.addEventListener("click",stage);

    
    let btnCerrar = <HTMLElement>document.getElementById("closed");
    btnCerrar.addEventListener("click",stage);

    let comboFiltro = <HTMLElement>document.getElementById("filtros");
    comboFiltro.addEventListener("change",stage)

    
    let idCB = <HTMLElement>document.getElementById("idV");
    idCB.addEventListener("change",stage)

    let nomCB = <HTMLElement>document.getElementById("nombreV");
    nomCB.addEventListener("change",stage)

    let apeCB = <HTMLElement>document.getElementById("apellidoV");
    apeCB.addEventListener("change",stage)

    let edadCB = <HTMLElement>document.getElementById("edadV");
    edadCB.addEventListener("change",stage)

});