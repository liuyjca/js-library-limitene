"use strict";

$(window).on("load", function() {
  document.body.style.overflow = "hidden"
})

const headingDiv = document.createElement("div")
const heading = document.createElement("h1")
const subheading = document.createElement("h2")
const buttonDiv = document.createElement("div")
const examplesButton = document.createElement("button")
const docButton = document.createElement("button")

headingDiv.append(heading)
headingDiv.append(subheading)
document.body.append(headingDiv)
headingDiv.className = "heading_div"
heading.className = "heading"
heading.textContent = "Limitene.js"
subheading.className = "subheading"
subheading.textContent = "> a Javascript library that helps you make timelines <"

buttonDiv.append(examplesButton)
buttonDiv.append(docButton)
document.body.append(buttonDiv)
buttonDiv.className = "button_div"
examplesButton.className = "examples_button"
examplesButton.onclick = function(){ document.location = "examples.html"}
examplesButton.textContent = "- examples -"
docButton.className = "doc_button"
docButton.onclick = function(){ document.location = "documentation.html"}
docButton.textContent = "- documentation -"

// Showcase some empty timelines
const demoDiv1 = document.createElement("div")
const demoDiv2 = document.createElement("div")
const demoDiv3 = document.createElement("div")
const blockingDiv1 = document.createElement("div")
const blockingDiv2 = document.createElement("div")
const blockingDiv3 = document.createElement("div")
demoDiv1.className = "demo_div1"
demoDiv2.className = "demo_div2"
demoDiv3.className = "demo_div3"
blockingDiv1.className = "demo_div1"
blockingDiv2.className = "demo_div2"
blockingDiv3.className = "demo_div3"
document.body.append(demoDiv1)
document.body.append(demoDiv2)
document.body.append(demoDiv3)
document.body.append(blockingDiv1)
document.body.append(blockingDiv2)
document.body.append(blockingDiv3)

const lmtn1 = new Limitene()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeEvent()
lmtn1.makeTimeline(demoDiv1, "horizontal", "top")
lmtn1.setGradient("(0, 229, 255)")

const lmtn2 = new Limitene()
lmtn2.makeEvent()
lmtn2.makeEvent()
lmtn2.makeEvent()
lmtn2.makeEvent()
lmtn2.makeEvent()
lmtn2.makeEvent()
lmtn2.makeTimeline(demoDiv2, "vertical", "left")
lmtn2.setGradient("(255, 133, 117)")

const lmtn3 = new Limitene()
lmtn3.makeEvent()
lmtn3.makeEvent()
lmtn3.makeEvent()
lmtn3.makeEvent()
lmtn3.makeEvent()
lmtn3.makeEvent()
lmtn3.makeTimeline(demoDiv3, "vertical", "right")
lmtn3.setGradient("(255, 208, 97)")