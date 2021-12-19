"use strict";

const lmtn1 = new Limitene()
const lmtn2 = new Limitene()
const lmtn3 = new Limitene()
const lmtn4 = new Limitene()
const lmtn5 = new Limitene()
const lmtn6 = new Limitene()
const lmtn7 = new Limitene()

lmtn1.makeEvent("January 1, 2021", "Event x", "Some description for Event x", "img/event_icon.png")
lmtn1.makeEvent("February 2, 2021", "Event y", "Some description for Event y", "img/event_icon.png")
lmtn1.makeEvent("March 3, 2021", "Event z", "Some description for Event z", "img/event_icon.png")

lmtn2.makeEvent(null, "Step 1", "Lorem ipsum dolor sit amet 1")
lmtn2.makeEvent(null, "Step 2", "Lorem ipsum dolor sit amet 2")
lmtn2.makeEvent(null, "Step 3", "Lorem ipsum dolor sit amet 3")
lmtn2.makeEvent(null, "Step 4", "Lorem ipsum dolor sit amet 4")
lmtn2.makeEvent(null, "Step 5", "Lorem ipsum dolor sit amet 5")
lmtn2.makeEvent(null, "Step 6", "Lorem ipsum dolor sit amet 6")
lmtn2.makeEvent(null, "Step 7", "Lorem ipsum dolor sit amet 7")
lmtn2.makeEvent(null, "Step 8", "Lorem ipsum dolor sit amet 8")

lmtn3.makeEvent(null, "Seed", "Plants start out as a seed.", "img/seed_icon.png")
lmtn3.makeEvent(null, "Sprout", "Seeds germinate and start to sprout.", "img/sprout_icon.png")
lmtn3.makeEvent(null, "Plant", "Sprouts eventually grow into mature plants.", "img/plant_icon.jpeg")
lmtn3.makeEvent(null, "Flower", "Mature flowering plants will develop flowers.", "img/flower_icon.png")
lmtn3.makeEvent(null, "Fruit", "After flowering, the plant develops fruits.", "img/fruit_icon.png")

lmtn4.makeEvent("May 21, 2021", "Goal A", "Accomplished Goal A.")
lmtn4.makeEvent("October 16, 2021", "Goal B", "Accomplised Goal B.")
lmtn4.makeEvent("January 2022", "Goal C", "Expecting to accomplish Goal C in January of 2022.")
lmtn4.makeEvent("March 2022", "Goal D", "Expecting to accomplish Goal D in March of 2022.")
lmtn4.makeEvent("April 2022", "Goal E", "Expecting to accomplish Goal E in April of 2022.")

lmtn5.makeEvent("December 8", "Package shipped", "Your package was shipped out on December 8.", "img/shipping_icon.png")
lmtn5.makeEvent("December 12", "Cleared customs", "Your package cleared customs in Canada on December 12 at 2:45pm.", "img/customs_icon.png")
lmtn5.makeEvent("December 17", "Reached Scarborough", "Your package reached a post office in Scarborough, Canada at 11:10am on December 17.", "img/post_office_icon.png")
lmtn5.makeEvent("Estimated December 18", "Arriving in Toronto", "Your package is expected to arrive in Toronto on December 18 at 9:00am.", "img/truck_icon.png")

lmtn6.makeEvent("2010", "Hello world A", null, "img/hello_world_icon.png")
lmtn6.makeEvent("2011", "Hello world B", null, "img/hello_world_icon.png")
lmtn6.makeEvent("2012", "Hello world C", null, "img/hello_world_icon.png")
lmtn6.makeEvent("2013", "Hello world D", null, "img/hello_world_icon.png")
lmtn6.makeEvent("2014", "Hello world E", null, "img/hello_world_icon.png")

lmtn7.makeEvent(null, "Seed", "Plants start out as a seed.", "img/seed_icon.png")
lmtn7.makeEvent(null, "Sprout", "Seeds germinate and start to sprout.", "img/sprout_icon.png")
lmtn7.makeEvent(null, "Plant", "Sprouts eventually grow into mature plants.", "img/plant_icon.jpeg")
lmtn7.makeEvent(null, "Flower", "Mature flowering plants will develop flowers.", "img/flower_icon.png")
lmtn7.makeEvent(null, "Fruit", "After flowering, the plant develops fruits.", "img/fruit_icon.png")

const div1 = document.createElement('div')
const heading1 = document.createElement("div")
div1.style.width = "100%"
div1.style.paddingTop = "50px"
div1.className = "vertical_margins"
heading1.className = "example_heading"
heading1.textContent = "Simple horizontal timeline with default colours"
document.body.append(heading1)
document.body.append(div1)

const div2 = document.createElement('div')
const heading2 = document.createElement("div")
div2.style.width = "100%"
div2.className = "vertical_margins"
heading2.className = "example_heading"
heading2.textContent = "Horizontal timeline with gradient and no images or times"
document.body.append(heading2)
document.body.append(div2)

const div3 = document.createElement('div')
const heading3 = document.createElement("div")
div3.style.width = "100%"
div3.className = "vertical_margins"
heading3.className = "example_heading"
heading3.innerHTML = "Horizontal timeline with flat colours and only displaying images<br> -- showing the growth stages of a fruiting plant"
heading3.style.paddingTop = "150px"
document.body.append(heading3)
document.body.append(div3)

const div4 = document.createElement('div')
const heading4 = document.createElement("div")
div4.style.width = "100%"
div4.className = "vertical_margins"
heading4.className = "example_heading"
heading4.textContent = "Horizontal timeline with flat colours showing progress of a plan"
document.body.append(heading4)
document.body.append(div4)


const div5 = document.createElement('div')
const heading5 = document.createElement("div")
div5.style.height = `${window.innerHeight}px`
div5.style.width = `${document.body.clientWidth}px`
div5.className = "vertical_margins"
heading5.className = "example_heading"
heading5.textContent = "Vertical timeline with gradient showing progress of package shipment"
document.body.append(heading5)
document.body.append(div5)

const div6 = document.createElement('div')
const heading6 = document.createElement("div")
div6.style.height = `${window.innerHeight}px`
div6.style.width = `${document.body.clientWidth}px`
div6.style.float = "left"
div6.className = "vertical_margins"
heading6.className = "example_heading"
heading6.textContent = "Vertical timeline with default colours not displaying event titles + no descriptions"
document.body.append(heading6)
document.body.append(div6)

const div7 = document.createElement('div')
const heading7 = document.createElement("div")
div7.style.height = `${window.innerHeight}px`
div7.style.width = `${document.body.clientWidth}px`
div7.style.float = "left"
div7.className = "vertical_margins"
heading7.className = "example_heading"
heading7.textContent = "Vertical version of plant growth timeline"
heading7.style.paddingTop = "150px"
heading7.style.paddingBottom = "50px"
document.body.append(heading7)
document.body.append(div7)

lmtn1.makeTimeline(div1, "horizontal", "top")
lmtn2.makeTimeline(div2, "horizontal", "alternate")
lmtn3.makeTimeline(div3, "horizontal", "bottom", [false, false])
lmtn4.makeTimeline(div4, "horizontal", "top")
lmtn5.makeTimeline(div5, "vertical", "left")
lmtn6.makeTimeline(div6, "vertical", "alternate", [true, false])
lmtn7.makeTimeline(div7, "vertical", "right", [false, false])

lmtn2.setGradient("(210, 51, 235)")

lmtn3.setInactiveColour("(130, 179, 102)")
lmtn3.setActiveColour("(89, 96, 148)")

lmtn4.setInactiveColour("(10, 206, 255)")
lmtn4.setActiveColour("(168, 13, 155)")
lmtn4.setProgress(1)

lmtn5.setGradient("(255, 81, 0)")
lmtn5.setProgress(2)

lmtn7.setInactiveColour("(130, 179, 102)")
lmtn7.setActiveColour("(89, 96, 148)")