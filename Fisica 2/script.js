const container = document.querySelector(".container")
const btnregistrase=document.getElementById("sign-up-btn")
let btniniciarsesion=document.getElementById("sign-in-btn")


btnregistrase.addEventListener("click",()=>{
    container.classList.add("sign-up-mode")
})
btniniciarsesion.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode") 
})   




function loguear() {  

	let Usuario = document.getElementById("Usuario").value;  
	let passwordnuevo = document.getElementById("clave").value;  

	if (Usuario == "20232000" && passwordnuevo == "hola5"){  

		window.location= "datos.html";             
	}

	else {

		alert("Datos incorrectos")      
	}   
	

}               

 
 

    