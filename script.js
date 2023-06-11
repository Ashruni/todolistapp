const ipBox = document.getElementById("input-data")
const listContainer = document.getElementById("unorderedlist")
function task(){
    if (ipBox === " ")
    {
        alert("you must write something");

    }
    else{
        let li =document.createElement("li");
        li.innerHTML = ipBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span);

    }
    ipBox.value="";
    save();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        save();


    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();

    }
},false);
function save(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function displaysave(){
    listContainer.innerHTML = localStorage.getItem("data");

}
displaysave()