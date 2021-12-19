"use strict";

const documentationDiv = document.createElement("div")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const title = document.createElement("h1")
const section1 = document.createElement("h2")
const section2 = document.createElement("h2")
const par1 = document.createElement("p")
div1.append(title)
div2.append(section1)
div2.append(par1)
div3.append(section2)
documentationDiv.append(div1)
documentationDiv.append(div2)
documentationDiv.append(div3)
document.body.append(documentationDiv)

$(documentationDiv).css({
  width: "80%",
  margin: "0 auto",
  marginBottom: "100px"
})

$(div1).css({
  width: "100%",
  marginTop: "50px",
  paddingBottom: "10px",
  textAlign: "left",
  borderBottom: "1px solid rgb(50, 50, 50)"
})

$(div2).css({
  width: "100%",
  marginTop: "50px",
  textAlign: "left"
})

$(div3).css({
  width: "100%",
  marginTop: "100px",
  textAlign: "left"
})

title.className = "documentation_title"
title.textContent = "Library Documentation"

$(section1).css({
  color: "rgb(92, 81, 129)",
  fontWeight: 400,
  fontSize: "21pt",
  marginBottom: "15px"
})
section1.textContent = "Getting Started"
par1.textContent = "To use the Limitene.js library, make sure to include jQuery as well as the following scripts and CSS files:"

const codeDiv1 = document.createElement("div")
div2.append(codeDiv1)
codeDiv1.className = "code_div"
const codeSnippet0 = document.createElement("p")
const codeSnippet1 = document.createElement("p")
const codeSnippet2 = document.createElement("p")
const codeSnippet3 = document.createElement("p")
const codeSnippet4 = document.createElement("p")
const codeSnippet5 = document.createElement("p")
codeDiv1.append(codeSnippet0)
codeDiv1.append(codeSnippet1)
codeDiv1.append(codeSnippet2)
codeDiv1.append(codeSnippet3)
codeDiv1.append(codeSnippet4)
codeDiv1.append(codeSnippet5)
codeSnippet0.textContent = "// CSS needed"
codeSnippet1.textContent = "<link rel='stylesheet' href='/path/to/limitene.css'>"
codeSnippet2.textContent = "// Scripts needed"
codeSnippet3.textContent = "<script src='/path/to/limiteneEvent.js'></script>"
codeSnippet4.textContent = "<script src='/path/to/limiteneImgDisplay.js'></script>"
codeSnippet5.textContent = "<script src='/path/to/limiteneTextDisplay.js'></script>"

const par2 = document.createElement("p")
div2.append(par2)
par2.innerHTML = "Create an instance of a Limitene timeline object using <span class='inline_code'>new Limitene()</span>, \
then add events to your new timeline by calling <span class='inline_code'>makeEvent(..options..)</span> (read API section for details on options).<br>\
Add your events in the order you want them to appear left to right or top to bottom in the timeline.<br><br>\
Note: make sure to add all your timeline events before drawing the timeline with <span class='inline_code'>makeTimeline(..options..)</span>.<br><br>\
After drawing the timeline for the first time, you can now change the colours of the timeline and use it to keep track of progress if desired.<br>\
Some example code:"

const codeDiv2 = document.createElement("div")
div2.append(codeDiv2)
codeDiv2.className = "code_div"
const codeSnippet6 = document.createElement("p")
codeDiv2.append(codeSnippet6)
codeDiv2.style.width = "100%"
codeSnippet6.innerHTML = "const lmtn = new Limitene()<br>\
lmtn.makeEvent('Jan 1, 2021', 'Event X', 'A description of event X.', '/path/to/associated_iconX')<br>\
lmtn.makeEvent('Feb 1, 2021', 'Event Y', 'A description of event Y.', '/path/to/associated_iconY')<br>\
lmtn.makeTimeline(containingDiv, 'horizontal', 'alternate')<br>\
// Choose solid colours:<br>\
//  one for the edges and inactive nodes of the timeline,<br>\
//  one for nodes that are being hovered over or are selected<br>\
lmtn.setInactiveColour('(255, 63, 5)')<br>\
lmtn.setActiveColour('(250, 172, 62)')<br>\
// OR choose a gradient over a single colour (dark to light) for edges and inactive nodes<br>\
lmtn.setGradient('(10, 84, 64)')<br>\
// Track progress using the timeline!<br>\
lmtn.setProgress(eventIndex)"

$(section2).css({
  color: "rgb(92, 81, 129)",
  fontWeight: 400,
  fontSize: "21pt",
  marginBottom: "15px"
})
section2.textContent = "API"

const par3 = document.createElement("h2")
div3.append(par3)
$(par3).css({
  color: "rgb(80, 80, 80)",
  fontWeight: 400
})
par3.textContent = "Constructors"

const par4 = document.createElement("h3")
div3.append(par4)
$(par4).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "10px"
})
par4.textContent = "Limitene()"

const par5 = document.createElement("p")
div3.append(par5)
par5.style.marginTop = "10px"
par5.innerHTML = "Creates a Limitene instance with an initially empty collection of events.<br>\
This constructor takes no arguments—its only purpose is to initialize the private variables needed to build and store a timeline."

const par6 = document.createElement("h2")
div3.append(par6)
$(par6).css({
  color: "rgb(80, 80, 80)",
  fontWeight: 400,
  marginTop: "50px"
})
par6.textContent = "Methods"

const par7 = document.createElement("h3")
div3.append(par7)
$(par7).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "10px"
})
par7.textContent = "makeEvent(time, title, desc, img)"

const par8 = document.createElement("p")
div3.append(par8)
par8.style.marginTop = "10px"
par8.innerHTML = "Creates a new TimelineEvent object that represents an event in the Limitene timeline.<br><br>\
time  -  the time/date associated with this event<br>\
title  -  the 'title' of the event<br>\
desc  -  a description of the event<br>\
img  -  the path to an image/icon associated with this event<br><br>\
Any one of these parameters can be passed in as null."

const par9 = document.createElement("h3")
div3.append(par9)
$(par9).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "40px"
})
par9.textContent = "makeTimeline(container, direction, imgDisplay, displayOptions)"

const table = document.createElement("table")
div3.append(table)
table.innerHTML = "<tr><th>Property</th><th>Default</th><th>Type</th><th>Description</th></tr>\
<tr><td>container</td><td>document.body</td><td>Object</td><td>The container in which the timeline will be drawn.</td></tr>\
<tr><td>direction</td><td>'horizontal'</td><td>String</td><td>The direction in which the timeline will follow.\
<br>Choose between:<ul><li>'horizontal'</li><li>'vertical'</li></ul></td></tr>\
<tr><td>imgDisplay</td><td>'top' if direction == 'horizontal'<br>'left' if direction == 'vertical'</td><td>String</td><td>Defines which side of the timeline<br>the images and text will be drawn.\
<br><br>If you choose direction = 'horizontal',<br>you must choose between:<ul><li>'top'</li><li>'bottom'</li><li>'alternate'</li></ul><br>\
If you choose direction = 'vertical',<br>you must choose between:<ul><li>'left'</li><li>'right'</li><li>'alternate'</li></ul></td></tr>\
<tr><td>displayOptions</td><td>[true, true]</td><td>Array of bool</td><td>Allows you to choose whether or not<br>you want event times and/or event titles to be displayed on the timeline. \
<br>(They will still appear in the description<br>box for the event if they exist).<br>\
<br><ul class='shifted_ul'><li>[true, true] - both times and titles will be on the timeline</li>\
<li>[true, false] - times are displayed, titles are not</li>\
<li>[false, true] - titles are displayed, times are not</li>\
<li>[false, false] - neither times nor titles are displayed</li></ul></td></tr>"

const par10 = document.createElement("h3")
div3.append(par10)
$(par10).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "60px"
})
par10.textContent = "setInactiveColour(rgbColour)"

const par11 = document.createElement("p")
div3.append(par11)
par11.style.marginTop = "10px"
par11.innerHTML = "Sets the colour of the Limitene timeline's edges and inactive nodes (when they aren't being hovered over or aren't selected) to rgbColour.<br>\
rgbColour must be a String that takes the form (int, int, int), where each integer is greater than or equal to 0 and less than or equal to 255."

const par12 = document.createElement("h3")
div3.append(par12)
$(par12).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "40px"
})
par12.textContent = "setActiveColour(rgbColour)"

const par13 = document.createElement("p")
div3.append(par13)
par13.style.marginTop = "10px"
par13.innerHTML = "Sets the colour of the Limitene timeline's nodes when they are being hovered over or are selected, to rgbColour.<br>\
rgbColour must be a String that takes the form (int, int, int), where each integer is greater than or equal to 0 and less than or equal to 255."

const par14 = document.createElement("h3")
div3.append(par14)
$(par14).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "40px"
})
par14.textContent = "setGradient(rgbColour)"

const par15 = document.createElement("p")
div3.append(par15)
par15.style.marginTop = "10px"
par15.innerHTML = "Creates a gradient from rgbColour and applies it to the edges and inactive nodes of the timeline.<br>\
The active node colour is set to the inverse of the inactive node colour.<br>\
rgbColour must be a String that takes the form (int, int, int), where each integer is greater than or equal to 0 and less than or equal to 255."

const par16 = document.createElement("h3")
div3.append(par16)
$(par16).css({
  color: "rgb(100, 100, 100)",
  fontWeight: 400,
  fontSize: "16pt",
  marginLeft: "10px",
  marginTop: "40px"
})
par16.textContent = "setProgress(eventIndex)"

const par17 = document.createElement("p")
div3.append(par17)
par17.style.marginTop = "10px"
par17.innerHTML = "Sets the progress of the Limitene timeline to the event at eventIndex. \
eventIndex can range from -1 to the last event's index.<br>eventIndex = -1 turns the timeline into a progress tracker with no nodes shown as complete."