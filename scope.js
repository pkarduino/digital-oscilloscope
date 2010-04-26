// Start JS Oscilloscope
var beam = new Array();
var wavef = new Array();
var vacal = new Array();
var hpos1=0;
var vpos1=0;
var pix1 =100;
var pix2 =101;
var vect =1;
var bounce = 400;
//demos
var dem_no=0;
var xmov;
//
vacal[0]= "2/v_pot*("
vacal[1]= "1*("
vacal[2]= "0.66*("
vacal[3]= "1*("
vacal[4]= "2*("
vacal[5]= "1*("
vacal[6]= "1*("
vacal[7]= "0.5*("
vacal[8]= "1*("
vacal[9]= "0.07*("
vacal[10]= "1*("
//
wavef[0]= "1"
wavef[1]= "Math.sin(xmov*Math.PI/h_pot)"
wavef[2]= "Math.asin(Math.sin(xmov*Math.PI/h_pot))";
wavef[3]= "(Math.sin(xmov*Math.PI/h_pot)>0)?1:-1"
wavef[4]= "(xmov/h_pot)%1-0.5"
wavef[5]= "Math.sin(xmov)*Math.sin(xmov*Math.PI/h_pot)"
wavef[6]= "Math.exp(-(xmov-4)*(xmov-4)*100)";
wavef[7]= "Math.sin(xmov*15/h_pot)*Math.log(xmov/15)"
wavef[8]= "Math.sin(Math.exp(xmov*2/h_pot))"
wavef[9]= "Math.tan(xmov/h_pot)*Math.sin(xmov*2)"
wavef[10]= "1"

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
var v_pot=100;
var h_pot=100;
//
function beamit(){
for (i=1; i<201; i++){
var t
t="point" + i
beam[i] = document.getElementById(t);
}
for (i=1; i<201; i++){
beam[i].style.left=i;
beam[i].style.top=77;
}
}
//
function run_demo(){
for (i=1; i<201; i++){
beam[i].style.left=hpos1+i;
xmov=i;
pix2 = 77 - vpos1 + eval("Math.round(v_pot/2*" + vacal[dem_no] + "(" + wavef[dem_no] + ")));")
beam[i].style.top=pix2;
vect = 1 + Math.abs(pix2-pix1);
if (vect>12){vect=12;}
beam[i].style.height=vect;
pix1=pix2;
}
}

//drag-drop pots
var p1Thumb = document.getElementById("pot1_set");
Drag.init(p1Thumb, null, 5, 200, 0, 0);
p1Thumb.onDrag = function(x, y){
h_pot = Math.round(x*100)/100;
dsp_all();
};
//
var p2Thumb = document.getElementById("pot2_set");
Drag.init(p2Thumb, null, 0, 200, 0, 0);
p2Thumb.onDrag = function(x, y){
v_pot = Math.round(x*100)/100;
dsp_all();
};
//
var p3Thumb = document.getElementById("pot3_set");
Drag.init(p3Thumb, null, 0, 200, 0, 0);
p3Thumb.onDrag = function(x, y){
hpos1 = -100 + Math.round(x);
dsp_all();
};
//
var p4Thumb = document.getElementById("pot4_set");
Drag.init(p4Thumb, null, 0, 200, 0, 0);
p4Thumb.onDrag = function(x, y){
vpos1 = -80 + Math.round(x/1.25);
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
document.equat.mathy.value = "Enter Equation here and Press Load";
}
else
{
pwr_on=0;
document.images.powersw.src=pwr_0.src ;
for (i=1; i<201; i++){
beam[i].style.visibility= "hidden";
}
document.equat.mathy.value =""
linktext[1]=  "";
show_text(1,'modeval');
}
}
//
function on_demo(){
if (pwr_on==1){
dem_on=1;
document.images.modesw.src=dem_1.src;
if(dem_no<10){dem_no++;}else{dem_no=1}
linktext[1]=  wavef[dem_no];
show_text(1,'modeval');
run_demo();
setTimeout("off_dem();",bounce);
}
}
//
function dsp_all(){
linktext[3]= h_pot + " uS";
show_text(3,'p1val');
linktext[4]= (v_pot/10) + " V";
show_text(4,'p2val');
linktext[5]= "X - " + hpos1;
show_text(5,'p3val');
linktext[6]= "Y - " + vpos1;
show_text(6,'p4val');
run_demo();
}
//
function off_dem(){
document.images.modesw.src=dem_0.src;
dem_on=0;
}
//
function equ_put(){
if (pwr_on==1){
try
  {
dem_no = 10;
wavef[10] = document.equat.mathy.value ;
run_demo();
linktext[6]="<span style='color:#2D4296'>Equation has been rendered on Scope.</span>";
show_text(6,'modeval');
  }
catch(err)
  {
linktext[6]="<span style='color:#A10053'>Verify syntax, Formula has an error !</span>";
show_text(6,'modeval');
return;
  }
 }
}
//
function clr_all(){
document.equat.mathy.value =""
}
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