var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function initSlider(slides){
    /*
      Ejemplo de plantilla para cada slide:

          <div class="mySlides fade">
              <div class="numbertext">[index] / [total]</div>
              <img src="[img_url]" style="width:100%">
              <div class="text">[caption]</div>
          </div>

      Ejemplo del arreglo de incializacion:
            [
              {
                  "url" : "img/01.jpg",
                  "caption" : "Imagen 1"
              },
              {
                  "url" : "img/02.jpg",
                  "caption" : "Imagen 2"
              }
            ]
    */
    var tpl = document.getElementById("slider_template").innerHTML,
        slides_container = document.querySelector(".slideshow-container"),
        dots_container = document.querySelector(".dots");

    slides.forEach(function(slide_info, i){
        var slide = document.createElement("div");

        slide.innerHTML = tpl.replace("[index]", i+1)
                          .replace("[total]", slides.length)
                          .replace("[caption]", slide_info.caption);
        slide.className = "mySlides fade";
        slide.style.backgroundImage = "url("+slide_info["url"]+")";
        slides_container.appendChild(slide);

        var dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", function(){
            currentSlide(i+1);
        });
        dots_container.appendChild(dot);
    });

    showSlides(slideIndex);
}