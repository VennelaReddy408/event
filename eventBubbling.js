const Gparent=document.getElementById("grand")
Gparent.addEventListener("click",(e)=>{
    // e.stopPropagation();.
    setTimeout(()=>{
         console.log("Grand parent clicked")
    Gparent.style.backgroundColor="lightblue"

    },1000)
   
},true)

const P =document.getElementById("parent")
P.addEventListener("click",(e)=>{
    e.stopPropagation();
    setTimeout(()=>{
        
    console.log("parent clicked")
    P.style.backgroundColor="lightgreen"

    },1000)

},true)

const C =document.getElementById("child")
C.addEventListener("click",(e)=>{
    // e.stopPropagation();
    setTimeout(()=>{
        
    console.log("child clicked")
    C.style.backgroundColor="purple"
    },1000)

},false)


