var select=document.getElementById("selected");
var select1=document.getElementById("selected2");
var select2=document.getElementById("selected3");
var select3=document.getElementById("selected4");
var select4=document.getElementById("selected6");

var image=document.getElementById("check");
var image1=document.getElementById("check1");

var image2=document.getElementById("check2");
var image3=document.getElementById("check3");
var image4=document.getElementById("check5");

var para=document.getElementById("ingredient");
var product=document.getElementById("product");

select.addEventListener('click', function(){
    var isClicked = true;
    if (image.style.display === "none") {
        image.style.display="block";
        select.style.opacity="0.8";
        para.innerHTML="128-warm Nude";
        product.src="https://images-static.nykaa.com/media/catalog/product/8/d/8d9e9d86902395722434_1.jpg";
      }
      else{
        image.style.display="none";
        select.style.opacity="1";
      }

     
});
select1.addEventListener('click', function(){
    var isClicked = true;
    if (image1.style.display === "none") {
        image1.style.display="block";
        select1.style.opacity="0.8";
        para.innerHTML="220-Natural Beige ";
        product.src="https://images-static.nykaa.com/media/catalog/product/c/f/cf9d9d86902395722458_1.jpg";
      }
      else{
        image1.style.display="none";
        select1.style.opacity="1";
      }
     
});
select2.addEventListener('click', function(){
    var isClicked = true;
    if (image2.style.display === "none") {
        image2.style.display="block";
        select2.style.opacity="0.8";
        para.innerHTML="220 Natural Buff";
        product.src="https://images-static.nykaa.com/media/catalog/product/d/8/d8469d86902395722472_1.jpg";
      }
      else{
        image2.style.display="none";
        select2.style.opacity="1";
      }
     
});
select3.addEventListener('click', function(){
    var isClicked = true;
    if (image3.style.display === "none") {
        image3.style.display="block";
        select3.style.opacity="0.8";
        para.innerHTML="310 Sun Beige";
      }
      else{
        image3.style.display="none";
        select3.style.opacity="1";
        product.src="https://images-static.nykaa.com/media/catalog/product/f/2/f29b9d86902395722489_1.jpg";
      }
     
});
select4.addEventListener('click', function(){
    var isClicked = true;
    if (image4.style.display === "none") {
        image4.style.display="block";
        select4.style.opacity="0.8";
        para.innerHTML="330 Toffee ";
        product.src="https://images-static.nykaa.com/media/catalog/product/f/8/f8a59d86902395722496_1.jpg";
      }
      else{
        image4.style.display="none";
        select4.style.opacity="1";
      }
     
});