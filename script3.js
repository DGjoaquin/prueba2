//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria

let datos = []
function validar(){
    let eTelefono = document.getElementById("telefono")
    let vTelefono = eTelefono.value 
    let eErrorTelefono = document.getElementById("errorTelefono")
    console.log(eTelefono)
    console.log(vTelefono)
    let ePassword = document.getElementById("password")
    let vPassword = ePassword.value
    let eErrorPassword = document.getElementById("errorPassword")
    console.log(ePassword)
    console.log(vPassword)
    if(vTelefono.length ==8 && vTelefono>=0){
        console.log("Si cumple")
        eErrorTelefono.innerText = ""
        eTelefono.style.backgroundColor = "green"
        eTelefono.style.color = "white"      
    }else{
        console.log("No cumple")
        alert("Debes ingresar 8 digitos")
        eErrorTelefono.innerHTML = "<strong>Debes ingresar <i>8 digitos</i>!</strong>"
        eTelefono.style.backgroundColor = "red"
        eTelefono.style.color = "white"
    }
    if(vPassword.length >=6){
        console.log("Si cumple")
        eErrorPassword.innerText = ""
        ePassword.style.backgroundColor = "green"
        ePassword.style.color = "white"
    }else{
        console.log("No cumple")
        alert("Debes ingresar mas de 5 caracteres")
        eErrorPassword.innerHTML = "<strong>Debes ingresar un minimo de <i>6 caracteres</i>!</strong>"
        ePassword.style.backgroundColor = "red"
        eTelefono.style.color = "white"
    }
    if(vTelefono.length ==8 && vTelefono>=0 && vPassword.length >=6){
        let d ={
            telefono : vTelefono,
            password : vPassword
        }
        datos.push(d)
        eTelefono.value = ""
        ePassword.value = ""
        console.log(datos)
        cargarDatos()
    }else{
        alert(" algunos datos no se cumplen")
    }
} 
function cargarDatos(){
    let eCuerpoTabla = document.getElementById("cuerpoTabla")
    let datosMap = datos.map((d,index)=>{
        return "<tr class='fuentesGrande'><td>"+d.telefono+"</td><td>"+d.password+"</td>"+
        "<td><button onclick='eliminar("+index+")'>Eliminar</button><button onclick='actualizarForm("+index+")'>Actualizar</button></td></tr>"
    })
    console.log(datosMap)
    let datosStr = datosMap.join("")
    console.log(datosStr)
    eCuerpoTabla.innerHTML = datosStr
}
function eliminar(indice){
    if(confirm("¿seguro que quieres borrar los datos?")){
        datos =datos.filter((d,index)=>{
            if(index != indice){
                return d
            }
        })
        cargarDatos()
    }else{
        alert("se cancelo la eliminacion de datos")
    }
}
function actualizarForm(indice){
    let eTelefono = document.getElementById("telefono1")
    let ePassword = document.getElementById("password1")
    let dato = datos.filter((d,index)=>{
        if(index == indice){
            return d
        }
    }) 
    console.log(dato)
    eTelefono.value = dato[0].telefono
    ePassword.value = dato[1].password
    let eBtnActualizar = document.getElementById("btnActualizar")
    eBtnActualizar.value = indice
}
function actualizar(){
    let eTelefono = document.getElementById("telefono1")
    let vTelefono = eTelefono.value
    let ePassword = document.getElementById("password1")
    let vPassword = ePassword.value
    let eBtnActualizar = document.getElementById("btnActualizar")
    let indice = eBtnActualizar.value
    datos = datos.map((d,index)=>{
        if(index == indice){
            return {
                telefono : vTelefono,
                password : vPassword
            }
        }else{
            return d
        }
    })
    cargarDatos()
}
