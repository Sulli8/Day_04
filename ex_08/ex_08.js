

window.addEventListener('load',function(){
    this.document.getElementById("productName").innerText = "Samsung 22"
    let tag = this.document.getElementById("tag")
    this.document.querySelector(".content").removeChild(tag)
    this.document.querySelector("img").src = "Samsung22.png"
    this.document.getElementById("price").innerText = "890"
    let paraphs  = this.document.querySelectorAll("p")
    paraphs[0].innerText = "Never miss that perfect shot again."
    paraphs[1].innerText = "Designed to revolutionise video and photography, with beyond cinematic 16K resolution."
    paraphs[2].innerText ="Get yours now !"
    let element = this.document.getElementById("addToCart")
    let p = this.document.createElement("p")
    p.innerText = "IN CART : 0"
    element.appendChild(p)

})