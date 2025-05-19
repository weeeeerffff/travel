const form=document.querySelector("form")
const fio=document.querySelector("#fio")
const myplace=document.querySelector("#myplace")
const date_of_start=document.querySelector("#date_of_start")
const persons=document.querySelector("#persons")
const nights=document.querySelector("nights")

form.addEventListener ("submit", function(event){
    event.preventDefault()
    document.querySelector("#p1").innerHTML="<h3>ФИО: "+fio.value+"</h3>"
    document.querySelector("#p2").innerHTML="<h3>Куда едем: "+myplace.value+"</h3>"
    document.querySelector("#p3").innerHTML="<h3>Дата: "+date_of_start.value+"</h3>"
    document.querySelector("#p4").innerHTML="<h3>Количество путешественников: "+persons.value+"</h3>"
    document.querySelector("#p5").innerHTML="<h3>Количество ночей: "+nights.value+"</h3>"
    

})

const travel=document.querySelector("header h1")
window.addEventListener("scroll", function(event){
   console.log(scrollY)
   if (scrollY>100) 
       travel.style.transform="translateX(-100px)"
   else 
   travel.style.transform="translateX(0px)"
})

const alaskaL=document.querySelector("#left")
const alaskaR=document.querySelector("#right")
window.addEventListener("scroll", function(event){
   if (scrollY>600){
      alaskaL.style.transform="translateX(-100px)"
      alaskaR.style.transform="translateX(100px)"
   }
   if (scrollY>1000){
      alaskaL.style.transform="translateX(0)"
      alaskaR.style.transform="translateX(0)"
         }    
})

const japanImg=document.querySelectorAll("#Japan img")
const japanTxt=document.querySelector("#Japan div")
window.addEventListener("scroll", function(event){
   if (scrollY>1500){
      japanImg[0].style.transform="scale(1.1)"
      japanImg[1].style.transform="scale(1.1)"
      japanTxt.style.transform="skewY(10deg)"
   }
   if (scrollY>1700 || scrollY<1500){
      japanImg[0].style.transform="scale(1)"
      japanImg[1].style.transform="scale(1)"
      japanTxt.style.transform="skewY(0)"
         }    
})

document.addEventListener("DOMContentLoaded", function() {
   const egiptImages = document.querySelectorAll("#Egipt img");
   
   window.addEventListener("scroll", function() {
       const scrollPosition = window.scrollY; 
       const scrollFactor = 0.2; // Уменьшенная степень смещения

       // Применяем параллакс-эффект для каждого изображения
       egiptImages.forEach((img, index) => {
           // Смещение в зависимости от индекса изображения
           const direction = index % 2 === 0 ? 1 : -1; // Четные вправо, нечетные влево
           img.style.transform = `translateX(${scrollPosition * scrollFactor * direction}px)`;
       });
   });
});


document.addEventListener("DOMContentLoaded", function() {
   const franceSection = document.querySelector("#France");
   const images = franceSection.querySelectorAll("img");

   window.addEventListener("scroll", function() {
       const scrollPosition = window.scrollY;
       const scrollFactor = 0.1; // Настройте этот параметр для изменения скорости

       images.forEach((img, index) => {
           const direction = index % 2 === 0 ? 1 : 1; // Чередуем направление для изображений
           img.style.transform = `translateY(${scrollPosition * scrollFactor * direction - 120}px)`;
       });
   });
});
