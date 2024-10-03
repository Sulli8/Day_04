window.addEventListener("load",function(){
    window.addEventListener('resize', function() {
        alert('Size matters');
    });
    
    const picture = document.querySelector('img');
    picture.addEventListener('mouseover', function() {
        alert('Pretty, isn\'t it?');
    });
})