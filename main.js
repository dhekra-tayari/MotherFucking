var fond= document.getElementById("fond");
var popup=document.getElementById("popup");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var mode=document.getElementById("mode");
var body=document.querySelector("body");
var para=document.querySelectorAll("p");
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");


window.addEventListener('load', function() {
    fond.style.display ="block";
    popup.style.display="block";
   setTimeout(function(){
        fond.style.display ="none";
        popup.style.display="none";
      }, 10000); 

      

});

btn1.addEventListener('click',function(){
    document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    fond.style.display ="none";
    popup.style.display="none";
    
})

btn2.addEventListener('click',function(){
    fond.style.display ="none";
    popup.style.display="none";
})

mode.addEventListener('click',function(){
    body.style.backgroundColor="magenta";
    for(let i=0;i<para.length;i++)
    {
        para[i].style.fontFamily="courier";
        para[i].style.color="blue";
    }
    for(let i=0;i<headings.length;i++)
    {
        headings[i].style.color="green";
        headings[i].style.fontFamily="Comic Sans";
    }
   
 
   
    

})





