

window.addEventListener('load',function(){
    const random_colors = ['#3498db','#8e44ad','#2c3e50', '#bdc3c7','#c0392b']
    let addToCart = document.getElementById("addToCart")
    addToCart.addEventListener("click",function(){
        let randomIndex = Math.floor(Math.random() * random_colors.length);
        document.querySelector(".outer").style.backgroundColor = random_colors[randomIndex];
    })
})