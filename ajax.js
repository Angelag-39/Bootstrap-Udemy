function ajax(){
    const http = new XMLHttpRequest(); //para hacer la solicitud
    const url ='file:///C:/Users/Angela/Desktop/programador_junior-master/index.html';  //la url que quiero cargar

    http.onreadystatechange = function(){  //funcion para mapear el estado de la solicitud
if(this.readyState== 4 && this.satatus ==200){
    console.log(this.responseText);
    document.getElementById("response").innerHTML = this.responseText;
        }
    } 
    http.open("GET",url);
    http.send();                            //Redy stay quando la solicitud se completo correctamente
                                       //status lo que me regresa el servidor
}
document.getElementById("boton").addEventListener("click",function(){
    ajax();
});    //ejemplo para solicitar
         //click = elemto para llamar la solicitud