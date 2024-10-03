window.addEventListener("load",function(){
    let carre = this.document.querySelector(".ex_09")
    let taille = carre.children[2].height
    let decrease
    carre.children[2].addEventListener("click",function(){
        let nombre = parseInt(carre.children[1].innerText) + 1
        carre.children[1].innerText = nombre + " kg"
        decrease = parseInt(carre.children[1].style.top) + 100
        carre.children[2].style.height = decrease
        console.log(carre.children[2].style.height)
      
    })
})