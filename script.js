let images = document.querySelectorAll(".gallery img");

let current = 0;


function openImage(img){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("bigImage").src = img.src;

    current = Array.from(images).indexOf(img);

}


function closeImage(){

    document.getElementById("lightbox").style.display="none";

}


function nextImage(){

    current++;

    if(current >= images.length)
    current=0;


    document.getElementById("bigImage").src = images[current].src;

}


function prevImage(){

    current--;

    if(current < 0)
    current=images.length-1;


    document.getElementById("bigImage").src = images[current].src;

}



function filterImages(category){


images.forEach(img=>{


if(category=="all" || img.classList.contains(category))

{

img.style.display="block";

}

else{

img.style.display="none";

}


});


}