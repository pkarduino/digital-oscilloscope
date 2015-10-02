18 April 2010
Attempt to make a JS and CSS Scope. Tried Pixel Graphics First.



18 April 2010
Demo link on Right, I was able to plot a Sine wave on the scope. Realized Line graphics are possible. Canvas/Ajax seems to be there, more for the future for all browsers to work.

19 April 2010
Thanks to some Vector Graphics gurus (see my resource site on right), Implemented a mini vector, it improved the sinewave, a bit jagged though. Just 3 lines of code.

SVG and Canvas are out of my scope and abilities now. But when all browsers work with it and someone provides a library. I will make canvas scope.

20 April 2010
Oscilloscope GUI Improved. More waveforms added. x and y position pots added. Sine, Square, Triangle and Sawtooth Fourier Series Periodic Functions working.

![http://digital-oscilloscope.googlecode.com/svn/trunk/oscope.jpg](http://digital-oscilloscope.googlecode.com/svn/trunk/oscope.jpg)

Operating Instructions -

Just turn it on and then press demo button for 1st Waveform and Press again the demo button for 2nd Wave and so on. Still working on formulas. Slide all the pots and see what happens.

Chrome Browser works best with this tutor, second is Firefox and Use IE only on a very new OS or Computer hardware.

26 April 2010
This Gadget is done for this stage, I will now try integrating with a IC simulation. The API is just the Equation text box. The equation can be loaded and rendered as waveform on scope.

Add this code to your Page to render a Web Oscilloscope Gadget

```
<iframe src="http://digital-oscilloscope.googlecode.com/svn/trunk/oscilloscope.html" marginwidth="0" marginheight="0" allowtransparency="true" frameborder="0" height="500" scrolling="no" width="330"></iframe>
```
