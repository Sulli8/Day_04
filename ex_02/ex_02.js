window.addEventListener("load",function(){
    const paragraphs = document. querySelectorAll ("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = i
    }
})