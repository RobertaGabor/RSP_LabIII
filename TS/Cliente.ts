
class Cliente extends Persona
{
    edad:number;
    sexo:string;

    constructor(sexo:string,nombre:string,apellido:string,id:number,edad:number)
    {
        super(nombre,apellido,id);
        if(Cliente.validarEdad(edad)==true)
        {
            
            this.edad=edad;
            this.sexo=sexo;            
        }
    }
    public static validarEdad(edad:number):boolean
    {
        var numb=String(edad);
        if(edad!=undefined)
        {
            if(numb.match('^[0-9]+$'))
            {
                if(edad>0 && edad<150)
                {
                    return true;
                }
            }           
        }

        return false;
    }
    static CiudadanoToJSON(persona:Cliente)
    {
        let personaParse= "{" + Persona.PersonaToString(persona) +  ',"edad"'+":" + '"'+ persona.edad + '"' + ',"sexo"'+":" + '"' + persona.sexo +'"'+ "}";
        return JSON.parse(personaParse);
    }

    public static AgregarCliente(sexo:string,nombre:HTMLInputElement,apellido:HTMLInputElement,id:number,edad:HTMLInputElement):void{
        
        var car:Cliente= new Auto(sexo,nombre.value,apellido.value,id,Number(edad.value));
        Cliente.cargar(car);
        alert("Cliente agregado con exito!"); 
 
    }

    public static cargarCliente(ve:Cliente)
    {
        //load
        var lista:Array<Cliente>;
        lista=[]; //INICIALIZAR

        if(localStorage.length>0)
        {
            lista=JSON.parse(localStorage.getItem("Personas"));
        }

        if(ve!=undefined)
        {
            
            lista.push(ve);
            Persona.limpiarTabla();
            //limpiar tabla
        }

        localStorage.setItem("Personas",JSON.stringify(lista)); 

        for(var i=0;i<lista.length;i++)
        {

            Persona.Mostrar(lista[i].id,lista[i].nombre,lista[i].apellido,lista[i].edad,lista[i].sexo)
        }
    }
    }