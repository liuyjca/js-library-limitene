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
  margin: "0 auto"
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
then add events to your new timeline by calling <span class='inline_code'>makeEvent(..options..)</span> (read API section for details on options). \
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
  marginBottom: "15px"
})
section2.textContent = "API"