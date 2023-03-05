
    
    function Mostrar_Ocultar_Experiencia(){
        var exl  = document.getElementById("exl");
        if (exl.style.display == "none"){
            exl.style.display = "block";
            document.getElementById("tocar").value = "Ocultar"
        }
        else {
            exl.style.display = "none";
            document.getElementById("tocar").value = "Mostrar"
        }
        

    }
    function Mostrar_Ocultar(){
        var herr  = document.getElementById("herr");
        if (herr.style.display == "none"){
            herr.style.display="block";
            document.getElementById("h4").value = "Ocultar"
        }
        else {
            herr.style.display= "none";
            document.getElementById("h4").value = "Mostrar"
        }
        

    }
    function cambiar() {
        var contenido= document.getElementById("titulo5").innerHTML;
        if (contenido=="Informacion Academica"){
            document.getElementById("titulo5").innerHTML= "ESTUDIOS PREVIOS";
        } 
        else {
            document.getElementById("titulo5").innerHTML= "Informacion Academica";

        }
    }
    
