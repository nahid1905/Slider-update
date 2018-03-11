var slider=document.querySelector(".photos img")
var right=document.querySelector(".sag")
var left=document.querySelector(".sol")
var sekil1 = document.querySelector(".slide1 img")
var sekil2 = document.querySelector(".slide2 img")
var sekil3 = document.querySelector(".slide3 img")
var sekil4 = document.querySelector(".slide4 img")
var sekil5 = document.querySelector(".slide5 img")
var i=0;
var j1 =6;
var j2 =7;
var j3 =0;
var j4 =1;
var j5 =2;
var tempPic;

var gallery=["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg","images/8.jpg"]



function changeSag(){
	i++
	j1++
	j2++
	j3++
	j4++
	j5++
	
	if (j1==gallery.length){
		j1=0;
	}
	if (j2==gallery.length){
		j2=0;
	}
	if (j3==gallery.length){
		j3=0;
	}
	if (j4==gallery.length){
		j4=0;
	}
	if (j5==gallery.length){
		j5=0;
	}
	if (i==gallery.length){
		i=0;
	}
	slider.setAttribute("src", gallery[i])

	sekil1.setAttribute("src", gallery[j1])
	sekil2.setAttribute("src", gallery[j2])
	sekil3.setAttribute("src", gallery[j3])
	sekil4.setAttribute("src", gallery[j4])
	sekil5.setAttribute("src", gallery[j5])	
}


function changeSol(){
	i--
	j1--
	j2--
	j3--
	j4--
	j5--
	if (i<0){
		i=gallery.length-1;
	}
		if (j1<0){
		j1=gallery.length-1;
	}
		if (j2<0){
		j2=gallery.length-1;
	}
		if (j3<0){
		j3=gallery.length-1;
	}
		if (j4<0){
		j4=gallery.length-1;
	}
		if (j5<0){
		j5=gallery.length-1;
	}
	slider.setAttribute("src", gallery[i])

	sekil1.setAttribute("src", gallery[j1])
	sekil2.setAttribute("src", gallery[j2])
	sekil3.setAttribute("src", gallery[j3])
	sekil4.setAttribute("src", gallery[j4])
	sekil5.setAttribute("src", gallery[j5])	
}

function sliderChange(par){


	for (var b = 0; b < gallery.length; b++) {

		if(par.querySelector("img").getAttribute("src")==gallery[b]){
			tempPic =b;
		}
	}

	if (tempPic> gallery.length){

	}

	j1=tempPic+6
	j2=tempPic+7
	j3=tempPic
	j4=tempPic+1
	j5=tempPic+2

	switch(j1) {
    case 8:
        j1 = 0;
        break;
    case 9:
        j1 =1;
        break;
	case 10:
        j1 =2;
        break;
        case 11:
        j1 =3;
        break;
        case 12:
        j1 =4;
        break;
        case 13:
        j1 =5;
        break;

}
	switch(j2) {
    case 8:
        j2 = 0;
        break;
    case 9:
        j2 =1;
        break;
	case 10:
        j2 =2;
        break;
        case 11:
        j2 =3;
        break;
        case 12:
        j2 =4;
        break;
        case 13:
        j2 =5;
        break;
        case 14:
        j2 =6;
        break;
        case 14:
        j2 =6;
        break;
}

	switch(j4) {
    	case 8:
        j4 = 0;
        break;
}
	switch(j5) {
    	case 8:
        j5 = 0;
        break;
    	case 9:
        j5 = 1;
        break;
}
	i=j3;

	slider.setAttribute("src", gallery[j3])
	sekil1.setAttribute("src", gallery[j1])
	sekil2.setAttribute("src", gallery[j2])
	sekil3.setAttribute("src", gallery[j3])
	sekil4.setAttribute("src", gallery[j4])
	sekil5.setAttribute("src", gallery[j5])
console.log(tempPic);
// var mainImg=document.querySelector(".photos img").setAttribute("src",par.querySelector("img").getAttribute("src"))


}