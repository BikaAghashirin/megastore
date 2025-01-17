const listElem = document.querySelectorAll(".nav li a");


listElem.forEach((li)=> li.addEventListener("click", ()=>{
    listElem.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");
})
);