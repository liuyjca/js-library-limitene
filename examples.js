"use strict"
const lmtn1 = new Limitene()
const lmtn2 = new Limitene()
const lmtn3 = new Limitene()
const lmtn4 = new Limitene()
lmtn1.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn1.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn1.makeEvent("Feb 1, 2015", "hello world", "this was a mistake...", "edit_icon.png")

lmtn2.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn2.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn2.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn2.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn2.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn2.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn2.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn2.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn2.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn2.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")

lmtn3.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn3.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn3.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")

lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn4.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn4.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn4.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")
lmtn4.makeEvent("2022", "goodbye world", "... this was a mistake.", "pfp.jpeg")
lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "edit_icon.png")

const div1 = document.createElement('div')
div1.style.width = `${document.body.clientWidth}px`
div1.className = "vertical_margins"
document.body.append(div1)

const div2 = document.createElement('div')
div2.style.width = `${document.body.clientWidth}px`
div2.className = "vertical_margins"
document.body.append(div2)

const div3 = document.createElement('div')
div3.style.height = `${window.innerHeight}px`
div3.style.width = `${document.body.clientWidth/2 - 100}px`
div3.style.float = "left"
div3.className = "vertical_margins"
document.body.append(div3)

const div4 = document.createElement('div')
div4.style.height = `${window.innerHeight}px`
div4.style.width = `${document.body.clientWidth/2 - 100}px`
div4.style.float = "left"
div4.className = "vertical_margins"
document.body.append(div4)

lmtn1.makeTimeline(div1, true, "horizontal", "bottom", "popup")
lmtn2.makeTimeline(div2, true, "horizontal", "top", "popup")
lmtn3.makeTimeline(div3, true, "vertical", "right", "popup")
lmtn4.makeTimeline(div4, true, "vertical", "alternate", "popup")