
let flag = 0;
// by default this function will be called 
imageSlider(flag);


// function will called when user click next or prev  
function slider(num){
   flag  = flag + num;

   imageSlider(flag);
}



// function to slide image
function imageSlider(num){

    // selecting all the slides in form of array 
    let slides = document.getElementsByClassName('slide');

    // hiding all the slides before moving next 
    for(let key of slides){
        key.style.display = 'none';
    }

    // when slide reaches last it will switch first again 
    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    // when user click prev after first slide it will move last one 
    if(num < 0){
        flag = slides.length-1;
        num  =  slides.length-1;
    }

    slides[num].style.display = 'block';
}