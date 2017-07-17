
var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');
var angka  = 1;

function slideShow(){
  angka++;
  if( angka > 4 ){
    angka = 1;
  }
  slider1.src="asset/slider1/" + angka + ".jpg";
  slider2.src="asset/slider2/" + angka + ".jpg";
  slider3.src="asset/slider3/" + angka + ".jpg";
}
