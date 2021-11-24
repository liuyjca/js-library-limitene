"use strict"
const lmtn1 = new Limitene()
const lmtn2 = new Limitene()
const lmtn3 = new Limitene()
const lmtn4 = new Limitene()
const lmtn5 = new Limitene()
const lmtn6 = new Limitene()

lmtn1.makeEvent("January 1, 2021", "Event x", "Lorem ipsum", "../img/edit_icon.png")
lmtn1.makeEvent("February 12, 2021", "Event y", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt urna venenatis sem lacinia, vitae consequat risus fermentum. Ut sit amet erat nibh. Suspendisse elementum hendrerit dolor, non aliquet enim aliquam vel. Aliquam vel laoreet purus.Morbi venenatis nisl eu dui efficitur venenatis. Nullam pellentesque mauris non libero porta, eget feugiat ipsum aliquam. Quisque vulputate velit est, vitae volutpat lorem lacinia ac. Integer gravida nulla non velit elementum, quis scelerisque massa euismod. Ut sit amet accumsan magna. Mauris tincidunt, risus vitae laoreet mollis, ligula nisl lobortis enim, quis volutpat turpis enim non neque. Pellentesque ac venenatis risus. Praesent posuere odio justo, ut cursus erat lacinia vel. Sed varius sem mi, id pulvinar quam scelerisque vel. Sed posuere neque et vehicula vulputate. Vestibulum maximus, libero non feugiat maximus, massa mi vestibulum felis, at lacinia velit justo ut massa. Etiam at malesuada ex. Duis pellentesque venenatis nibh id scelerisque. Donec ac augue et arcu varius mattis non vitae lorem. Sed fringilla et metus quis lacinia. Suspendisse mollis dignissim sollicitudin. Mauris vulputate neque id condimentum viverra. Maecenas dignissim orci commodo lectus consequat, ac vulputate elit sagittis. Proin sagittis leo sem, eu tincidunt tellus pulvinar et. Curabitur commodo lacus lorem, a vestibulum diam semper non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo nec magna a tempus. Morbi lacinia id eros ac elementum. In et posuere sem. Integer viverra in nisi at aliquam. Morbi semper lectus est, in rutrum leo sollicitudin a. Donec lectus sapien, cursus eget magna eget, sollicitudin ultricies elit. Sed congue nibh et augue facilisis, in faucibus eros feugiat. Nulla fermentum finibus lectus, a fermentum ex bibendum a. Nunc at congue leo. In varius, dui id iaculis mattis, sem lorem dignissim ligula, eget facilisis lacus est vel mauris. Aenean bibendum condimentum est, vulputate ornare lorem aliquet eu. Ut vitae euismod orci, quis rutrum felis. Cras vitae nisl aliquam, sollicitudin enim nec, blandit diam. Fusce sed lacus finibus, tempor magna non, facilisis quam. Vestibulum ac finibus eros. Pellentesque convallis at justo at viverra. Donec eget odio scelerisque quam viverra malesuada semper a sem. Donec dictum augue quam, id fermentum sem luctus in. Ut tristique nibh sed turpis interdum commodo. Praesent at augue eget felis convallis posuere. Fusce imperdiet purus at lectus feugiat, a vehicula nisi elementum. Praesent dignissim urna ut felis ullamcorper pellentesque. Etiam fermentum pharetra nisl sed tristique. Pellentesque nec varius ante. Morbi euismod, neque a tincidunt hendrerit, mauris velit egestas augue, quis fermentum eros est in leo. Nam a scelerisque velit.", "../img/pfp.jpeg")
lmtn1.makeEvent("March 3, 2021", "Event z", "hello!", "../img/edit_icon.png")

lmtn2.makeEvent(null, "Step 1", "Lorem ipsum dolor sit amet 1", "../img/edit_icon.png")
lmtn2.makeEvent(null, "Step 2", "Lorem ipsum dolor sit amet 2", "../img/pfp.jpeg")
lmtn2.makeEvent(null, "Step 3", "Lorem ipsum dolor sit amet 3", "../img/edit_icon.png")
lmtn2.makeEvent(null, "Step 4", "Lorem ipsum dolor sit amet 4", "../img/pfp.jpeg")
lmtn2.makeEvent(null, "Step 5", "Lorem ipsum dolor sit amet 5", "../img/edit_icon.png")
lmtn2.makeEvent(null, "Step 6", "Lorem ipsum dolor sit amet 6", "../img/pfp.jpeg")
lmtn2.makeEvent(null, "Step 7", "Lorem ipsum dolor sit amet 7", "../img/edit_icon.png")
lmtn2.makeEvent(null, "Step 8", "Lorem ipsum dolor sit amet 8", "../img/pfp.jpeg")
lmtn2.makeEvent(null, "Step 9", "Lorem ipsum dolor sit amet 9", "../img/edit_icon.png")
lmtn2.makeEvent(null, "Step 10", "Lorem ipsum dolor sit amet 10", "../img/pfp.jpeg")

lmtn3.makeEvent("2011", null, "hello world", null)
lmtn3.makeEvent("2012", null, "hello world", null)
lmtn3.makeEvent("2013", null, "hello world", null)
lmtn3.makeEvent("2014", null, "hello world", null)
lmtn3.makeEvent("2015", null, "hello world", null)

lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn4.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn4.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")

lmtn5.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn5.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn5.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn5.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn5.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn5.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn5.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn5.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn5.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")

lmtn6.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn6.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn6.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")
lmtn6.makeEvent("2022", "goodbye world", "... this was a mistake.", "../img/pfp.jpeg")
lmtn6.makeEvent("January 2021", "hello world", "this was a mistake...", "../img/edit_icon.png")

const div1 = document.createElement('div')
div1.style.width = "100%"
div1.className = "vertical_margins"
document.body.append(div1)

const div2 = document.createElement('div')
div2.style.width = "150%"
div2.className = "vertical_margins"
document.body.append(div2)

const div3 = document.createElement('div')
div3.style.width = "100%"
div3.className = "vertical_margins"
document.body.append(div3)

const div4 = document.createElement('div')
div4.style.height = `${window.innerHeight}px`
div4.style.width = `${document.body.clientWidth/2 - 100}px`
div4.style.float = "left"
div4.className = "vertical_margins"
document.body.append(div4)

const div5 = document.createElement('div')
div5.style.height = `${window.innerHeight}px`
div5.style.width = `${document.body.clientWidth/2 - 100}px`
div5.style.float = "left"
div5.className = "vertical_margins"
document.body.append(div5)

const div6 = document.createElement('div')
div6.style.height = `${window.innerHeight}px`
div6.style.width = `${document.body.clientWidth/2 - 100}px`
div6.style.float = "left"
div6.className = "vertical_margins"
document.body.append(div6)

lmtn1.makeTimeline(div1, false, "horizontal", "top")
lmtn2.makeTimeline(div2, true, "horizontal", "bottom")
lmtn3.makeTimeline(div3, true, "horizontal", "alternate")
lmtn4.makeTimeline(div4, true, "vertical", "right")
lmtn5.makeTimeline(div5, true, "vertical", "alternate")
lmtn6.makeTimeline(div6, true, "vertical", "left")