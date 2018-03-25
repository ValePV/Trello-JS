
 function create() {
    var change = document.getElementById("change");
    var container = document.getElementById("container");
    var formulario=document.createElement("form");
    formulario.classList.add("form");
    var input = document.createElement("input")
    input.classList.add("input");
    var but = document.createElement("button");
    but.classList.add("but");
    
    formulario.appendChild(input);
    formulario.appendChild(but);
    container.appendChild(formulario);

    
    but.textContent="Guardar";

    

    but.addEventListener("click", function(){
        var subTitle = input.value;
        



        container.removeChild(formulario);

        var container1 = document.createElement("form");
        container1.classList.add("cont1")
        var title = document.createElement("h2");
        title.classList.add("ti")
    
        var but1 = document.createElement("button");
        but1.classList.add("but1")
        but1.textContent = "Añadir"

        title.textContent=subTitle;

        
        container1.appendChild(title);
        container1.appendChild(but1);
        container.appendChild(container1);

   
    but1.addEventListener("click", function(){
        container1.removeChild(but1);
        var list = document.createElement("textarea");
        list.classList.add("list");
        var but2 = document.createElement("button");
        but2.classList.add("but2");
        but2.textContent="Añadir lista ...";
        
        
        container1.appendChild(list);
        container1.appendChild(but2);
        container.appendChild(container1);

    but2.addEventListener("click", function(){

        var text = document.createElement("p");
        text.classList.add("text");
        text.textContent = list.value;

        container1.appendChild(text);
        container.appendChild(container1);

    container1.insertBefore(text, list);

    })
    })
    })
  

   
}
