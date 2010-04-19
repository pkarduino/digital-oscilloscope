// Start JS Oscilloscope
var beam = new Array();
var wavef = new Array();
var hpos1=10;
var vpos1=78;
var pix1 =100;
var pix2 =101;
var vect =1;
var bounce = 400;
//demos
var dem_no=0;
var xmov;
wavef[1]= "Math.round(h_pot/3*(Math.sin(xmov*2/v_pot)));"
wavef[2]= "Math.round(h_pot/4*(Math.asin(Math.sin(xmov*2/v_pot))));";
wavef[3]= "Math.round(h_pot/3*((Math.sin(5*xmov/v_pot)>0)?1:-1));"
wavef[4]= "Math.round(h_pot/1.4*((xmov/v_pot)%1-0.5));"
wavef[5]= "Math.round(h_pot/3*(Math.tan(xmov*2/v_pot)));"
wavef[6]= "Math.round(h_pot/3*(Math.cos(xmov*2/v_pot)));";
wavef[7]= "Math.round(h_pot/3*(Math.sin(xmov*2/v_pot)));"
wavef[8]= "Math.round(h_pot/3*(Math.sin(xmov*2/v_pot)));"
wavef[9]= "Math.round(h_pot/3*(Math.sin(xmov*2/v_pot)));"

// Preload Images
var pwr_0 = new Image();
pwr_0.src = "pngs/orn-off.png";
var pwr_1 = new Image();
pwr_1.src = "pngs/orn-on.png";
var dem_0 = new Image();
dem_0.src = "pngs/blu-off.png";
var dem_1 = new Image();
dem_1.src = "pngs/blu-on.png";
// set values
var v_pot=170;
var h_pot=170;
//

function beamit(){
for (i=1; i<201; i++){
var t
t="point" + i
beam[i] = document.getElementById(t);
}
for (i=1; i<201; i++){
beam[i].style.left=10+i;
beam[i].style.top=100+Math.round(i/3);
}
}
//
function run_demo(){
for (i=1; i<201; i++){
beam[i].style.left=hpos1+i;
xmov=i;
pix2 = vpos1 + eval(wavef[dem_no])
beam[i].style.top=pix2;
vect = 1 + Math.abs(pix2-pix1);
if (vect>9){vect=9;}
beam[i].style.height=vect;
pix1=pix2;
}
}

//drag-drop pots
var p1Thumb = document.getElementById("pot1_set");
Drag.init(p1Thumb, null, 10, 170, 0, 0);
p1Thumb.onDrag = function(x, y){
v_pot = Math.round(x*100)/100;
dsp_all();
};
//
var p2Thumb = document.getElementById("pot2_set");
Drag.init(p2Thumb, null, 10, 170, 0, 0);
p2Thumb.onDrag = function(x, y){
h_pot = Math.round(x*100)/100;
dsp_all();
};
// Make Buttons Work
//
var pwr_on=0;
var dem_on=0;
//
function on_beam(){
if(pwr_on==0){
pwr_on=1;
document.images.powersw.src=pwr_1.src;
for (i=1; i<201; i++){
beam[i].style.visibility= "visible";
}
}
else
{
pwr_on=0;
document.images.powersw.src=pwr_0.src ;
for (i=1; i<201; i++){
beam[i].style.visibility= "hidden";
}
}
}
//
function on_demo(){
dem_on=1;
document.images.modesw.src=dem_1.src;
if(dem_no<9){dem_no++;}else{dem_no=1}
linktext[1]= dem_no;
show_text(1,'modeval');
run_demo();
setTimeout("off_dem();",bounce);
}
//
function dsp_all(){
linktext[4]= v_pot;
show_text(4,'p1val');
linktext[3]= h_pot;
show_text(3,'p2val');
run_demo();
}
//
function off_dem(){
document.images.modesw.src=dem_0.src;
dem_on=0;
}

//
// Online Help Start
//adapted from Link Description script- www.dynamicdrive.com
var linktext=new Array()
linktext[0]= "";
linktext[1]= "";
linktext[2]= "";
linktext[3]= "";
linktext[4]= "";
linktext[5]= "";
linktext[6]= "";
//
var ns6=document.getElementById&&!document.all
var ie=document.all

function show_text(thetext, whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=linktext[thetext]
else if (ns6) document.getElementById(whichdiv).innerHTML=linktext[thetext]
}

function resetit(whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=' '
else if (ns6) document.getElementById(whichdiv).innerHTML=' '
}
//  Online Help End
window.onload = beamit()
// End JS Oscilloscope