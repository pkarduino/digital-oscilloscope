// Start Oscilloscope
var beam = new Array();
var hpos1=110;
var vpos1=100;

// Preload Images
var inc_0 = new Image();
inc_0.src = "pngs/inc-off.png";
var inc_1 = new Image();
inc_1.src = "pngs/inc-on.png";
var dec_0 = new Image();
dec_0.src = "pngs/dec-off.png";
var dec_1 = new Image();
dec_1.src = "pngs/dec-on.png";
// set values
var rf_pot=170;
var ri_pot=170;
var volt_i = 0;
var volt_o = 0;
var vin_dsp = 0;
//

function beamit(){
for (i=1; i<201; i++){
var temp
temp="point" + i
beam[i] = document.getElementById(temp);
}
for (i=1; i<201; i++){
beam[i].style.left=110+i;
if(i<80){beam[i].style.top=100+i;}else{beam[i].style.top=i-20;}
}
}

//drag-drop pots
var p1Thumb = document.getElementById("pot1_set");
Drag.init(p1Thumb, null, 10, 170, 0, 0);
p1Thumb.onDrag = function(x, y){
rf_pot = Math.round(x*100)/100;
dsp_all();
};
//
var p2Thumb = document.getElementById("pot2_set");
Drag.init(p2Thumb, null, 10, 170, 0, 0);
p2Thumb.onDrag = function(x, y){
ri_pot = Math.round(x*100)/100;
dsp_all();
};
// Make Buttons Work
//
//
function fup_mv(){
document.images.incled.src = inc_1.src ;
inc_dec =1;
start_timer();
}
//
function fdn_mv(){
document.images.decled.src = dec_1.src ;
inc_dec =0;
start_timer();
}
//
function dsp_all(){
vin_dsp = volt_i/10;
volt_o = vin_dsp*(rf_pot+ri_pot)/ri_pot;
volt_o = Math.round(volt_o*100)/100;
linktext[5]=  vin_dsp;
show_text(5,'dvm2');
linktext[6]=  volt_o;
show_text(6,'dvm1');
linktext[4]= rf_pot + " K";
show_text(4,'p1val');
linktext[3]= ri_pot + " K";
show_text(3,'p2val');
}
// Timer
var tmr_1;
var tmr_2;
var t1_tm = 10;
//
function start_timer(){
t1_tm = 10;
tmr_1=setTimeout("ud_cnt();",t1_tm);
}
//
function ud_cnt(){

tmr_2=setTimeout("cnt_ud();",t1_tm);
}
//
function cnt_ud(){
tmr_1=setTimeout("ud_cnt();",t1_tm);
}
//
function stop_timer(){
clearTimeout(tmr_1);
clearTimeout(tmr_2);
document.images.incled.src = inc_0.src ;
document.images.decled.src = dec_0.src ;
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
// End Inverting Opamp Tutor