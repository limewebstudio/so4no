$(".hamburger").click(function(){
	$(".main-nav-mob").toggleClass("move");
	$(this).toggleClass("close-menu"); 
});

var image_count = 5;
var interval = 4000; 
var time_out = 6; 
var i = 5;
var timeout;	
var opacity = 100;
function change_image() {
	opacity--;
	var j = i + 1;
	var current_image = 'img_' + i;
	if (i == image_count) j = 1;
	var next_image = 'img_' + j;
	document.getElementById(current_image).style.opacity=opacity/100;
	document.getElementById(current_image).style.filter='alpha(opacity='+opacity+')';
	document.getElementById(next_image).style.opacity= (100-opacity)/100;
	document.getElementById(next_image).style.filter=' alpha(opacity='+(100-opacity)+')';
	timeout = setTimeout("change_image()", time_out);
	if (opacity==0) {
		opacity = 100;
		clearTimeout(timeout);
		i++;
		if (i>image_count) i=1;
		timeout = setTimeout("change_image()", interval);
				}
}
change_image();

// Получаем переменные
let arrowLeft = document.getElementById("arrow-left"),
  arrowRight = document.getElementById("arrow-right"),
  sliderImg = document.getElementById("slider-img"),
  dotsWrap = document.getElementsByClassName("slider-dots")[0],
  dots = document.getElementsByClassName("dot"),
  left = 0,
  imgWidth = innerWidth/3,
  change = innerWidth*4/3;

// Стартовая позиция слайдера
sliderImg.style.left = left + 'px';

// Функция перелистывания слайдов
slideTo = (direction) => {
  if(innerWidth < 660){
    imgWidth = innerWidth;
    change = innerWidth*6;
  }
  if (direction == "left") left -= imgWidth;
  if (direction == "right") left += imgWidth;
  if (left < -change) left = 0;
  if (left > 0) left = -change;
  
  for (let item of dots) {
    item.classList.remove("active");
  }
  switch (left){
    case 0: 
      dots[0].classList.add("active");
      break;
    case -400: 
      dots[1].classList.add("active");
      break;
    case -800: 
      dots[2].classList.add("active");
      break;
  }
  sliderImg.style.left = left + 'px';
}

// Автоматическое переключение
let timerId = setInterval(function() {
  slideTo("left");
}, 3000);

// Добавляем события клика на кнопки
arrowLeft.addEventListener("click", () => {
  clearInterval(timerId);
  slideTo('left');
});

arrowRight.addEventListener("click", () => {
  clearInterval(timerId);
  slideTo('right');
});

// Добавляем события клика на точки
dotsWrap.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("dot")) {
    for (let item of dots) {
      item.classList.remove("active");
    }
    target.classList.add("active");
    switch (target){
      case dots[0]: 
        left = 0;
        break;
      case dots[1]: 
        left = -400;
        break;
      case dots[2]: 
        left = -800;
        break;
    }
    sliderImg.style.left = left + 'px';
  }
})






