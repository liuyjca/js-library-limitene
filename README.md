# Limitene.js
### Library for creating timelines, created by Yingjia Liu for CSC309H1 F2021 Individual Project

- Link to landing page of deployed web app: (https://limitene.herokuapp.com/)
- Link to documentation: (https://limitene.herokuapp.com/documentation.html)


## Getting Started
To use the Limitene.js library, make sure to include jQuery as well as the following scripts and CSS files:

```
  // CSS needed
  <link rel='stylesheet' href='/path/to/limitene.css'>
  // Scripts needed
  <script src='/path/to/limiteneEvent.js'></script>
  <script src='/path/to/limiteneImgDisplay.js'></script>
  <script src='/path/to/limiteneTextDisplay.js'></script>
```

Create an instance of a Limitene timeline object using `new Limitene()`, then add events to your new timeline by calling `makeEvent(..options..)` (read API section for details on options). Add your events in the order you want them to appear left to right or top to bottom in the timeline.  
  
Note: make sure to add all your timeline events before drawing the timeline with `makeTimeline(..options..)`.  

After drawing the timeline for the first time, you can now change the colours of the timeline and use it to keep track of progress if desired.  
Some example code:

```
const lmtn = new Limitene()  
lmtn.makeEvent('Jan 1, 2021', 'Event X', 'A description of event X.', '/path/to/associated_iconX')  
lmtn.makeEvent('Feb 1, 2021', 'Event Y', 'A description of event Y.', '/path/to/associated_iconY')  
lmtn.makeTimeline(containingDiv, 'horizontal', 'alternate')  
// Choose solid colours:  
//  one for the edges and inactive nodes of the timeline,  
//  one for nodes that are being hovered over or are selected  
lmtn.setInactiveColour('(255, 63, 5)')  
lmtn.setActiveColour('(250, 172, 62)')  
// OR choose a gradient over a single colour (dark to light) for edges and inactive nodes  
lmtn.setGradient('(10, 84, 64)')  
// Track progress using the timeline!  
lmtn.setProgress(eventIndex)
```
