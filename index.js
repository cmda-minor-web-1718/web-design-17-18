const api = {
  xhr: new XMLHttpRequest(),
  api_key: "e1de72c519ca29d6b215d0864778c681",
  url: `https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value=cat&api_key=${this.api_key}`,
  onReady: function() {
    this.xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
         if (this.status === 200) {
           let flickr = JSON.parse(this.responseText);
          console.log(flickr);
          xhr.send();
         }
       }
    }
  },

}

var slideIndex = 1;
showSlides();

var left = document.getElementById('left');
var right = document.getElementById('right');

left.addEventListener('click',function(){
  plusDivs(-1);
}, true);

right.addEventListener('click',function(){
  plusDivs(+1);
}, true);

function plusDivs(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
  var allSlides = document.getElementsByClassName('aSlide');
  if (n > allSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = allSlides.length} ;
  for (i = 0; i < allSlides.length; i++) {
      allSlides[i].style.display = "none";
  }
  allSlides[slideIndex-1].style.display = "block";
}
