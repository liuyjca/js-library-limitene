"use strict"
function Limitene() {
    // constructor function -- instantiates any variables that each
    //  Limitene timeline should have a unique version of
    this.events = []
    this.edges = []
    this.nodes = []
    this.imgContainers = []
    this.timeContainers = []
    this.titleContainers = []
    this.textIsDisplayed = true
    this.tooltips = []
    this.selected = null
    this.currVisibleDesc = null
    this.activeNodeColours = []
    this.edgeColours = []
    this.hasGradient = false
    this.container = null
    this.direction = ""
    this.imgDisplay = ""
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Fade timelines in and animate edges when scrolled into view
$(window).on("load", function () {
    $(window).scroll(function () {

        let windowBottom = $(window).scrollTop() + $(window).innerHeight()

        $(".main_container").each(function () {
            let objectBottom = $(this).offset().top + $(this).outerHeight()
            let objectTop = $(this).offset().top

            if (objectBottom > $(window).scrollTop() && objectTop < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(1000, 1)

                    $(this).find(".animated_edge").each(function () {
                        this.getAnimations()[0].play()
                    })
                }
            }
        })
    }).scroll()
});

Limitene.prototype = {
    makeTimeline: function (container, direction, imgDisplay) {
        this.container = container
        this.direction = direction
        this.imgDisplay = imgDisplay

        if (this.nodes.length > 0) {
            this.edges = []
            this.nodes = []
            this.imgContainers = []
            this.textContainers = []
            this.selected = null
            this.textIsDisplayed = true
        }

        if (!container) {
            container = document.body
        }
        const nodeSize = 10
        const lineThickness = 2
        const imgSize = 30

        const mainContainer = document.createElement("div")
        const timelineContainer = document.createElement("div")
        const firstImgContainer = document.createElement("div")
        const secondImgContainer = document.createElement("div")
        const firstTimestampContainer = document.createElement("div")
        const secondTimestampContainer = document.createElement("div")
        const firstTitleContainer = document.createElement("div")
        const secondTitleContainer = document.createElement("div")
        mainContainer.className = "main_container"
        mainContainer.style.width = container.clientWidth
        mainContainer.style.paddingLeft = `${imgSize}px`
        mainContainer.style.paddingRight = `${imgSize}px`
        mainContainer.append(firstTitleContainer)
        mainContainer.append(firstTimestampContainer)
        mainContainer.append(firstImgContainer)
        mainContainer.append(timelineContainer)
        mainContainer.append(secondImgContainer)
        mainContainer.append(secondTimestampContainer)
        mainContainer.append(secondTitleContainer)
        container.append(mainContainer)

        let edgeLength = 0

        this.events.map((event, index) => {
            const newNodeContainer = document.createElement("div")
            const newNode = document.createElement("div")
            const innerNode = document.createElement("div")
            const newEdge = document.createElement("div")
            const tooltip = document.createElement("span")
            const descBox = document.createElement("div")

            newNode.className = "timeline_node"
            newNode.style.height = `${nodeSize}px`
            newNode.style.width = `${nodeSize}px`
            newNode.style.border = `${lineThickness}px solid ${this.edgeColours[index]}`
            innerNode.className = "inner_node"
            innerNode.style.height = `${nodeSize - 2}px`
            innerNode.style.width = `${nodeSize - 2}px`
            innerNode.style.backgroundColor = `${this.activeNodeColours[index]}`
            newEdge.className = "timeline_edge"
            newEdge.style.backgroundColor = `${this.edgeColours[index]}`
            descBox.className = "desc_box"

            newNode.addEventListener("click", (e) => {
                e.stopImmediatePropagation()
                let tempNode = null

                if (this.selected) {
                    tempNode = this.selected[0]
                    this.currVisibleDesc.innerHTML = ""
                    this.currVisibleDesc.parentNode.removeChild(this.currVisibleDesc)

                    this.selected[0].classList.remove("active_node")
                    tempNode.style.borderColor = `${this.edgeColours[index]}`
                    this.selected[1].classList.remove("active_inner")
                    this.selected = null
                }

                if (tempNode !== newNode) {
                    newNode.classList.add("active_node")
                    newNode.style.borderColor = `${this.activeNodeColours[index]}`
                    innerNode.classList.add("active_inner")
                    this.selected = [newNode, innerNode]
                    this.currVisibleDesc = descBox

                    container.append(descBox)
                    const descTitle = document.createElement("h1")
                    const descTime = document.createElement("h2")
                    const descBody = document.createElement("p")
                    descTitle.className = "desc_title"
                    descTime.className = "desc_time"
                    descBody.className = "desc_body"
                    descTitle.textContent = `${event.title}`
                    descTime.textContent = `${event.time}`
                    descBody.textContent = `${event.desc}`
                    if (event.title) { descBox.append(descTitle) }
                    if (event.time) { descBox.append(descTime) }
                    if (event.desc) { descBox.append(descBody) }

                    const rgb = this.activeNodeColours[index].match(/\d+/g)
                    const R = rgb[0]
                    const G = rgb[1]
                    const B = rgb[2]
                    descBox.style.backgroundColor = `rgba(${R + ", " + G + ", " + B + ", " + 0.5})`

                    if (direction === "horizontal") {
                        descBox.style.marginLeft = `${window.scrollX + window.innerWidth / 2 - descBox.clientWidth / 2}px`
                        if ((secondTimestampContainer.clientHeight - 11 > 0 && secondTitleContainer.clientHeight - 6 <= 0) ||
                            (secondTitleContainer.clientHeight - 5 > 0 && secondTimestampContainer.clientHeight - 10 <= 0)) {
                            descBox.style.marginTop = "50px"
                        } else {
                            descBox.style.marginTop = "0px"
                        }
                    }
                }
            })

            newNode.addEventListener("mouseover", () => {
                newNode.style.borderColor = `${this.activeNodeColours[index]}`
                newNode.style.cursor = "pointer"
                $(tooltip).css({ visibility: "visible", opacity: "0.9" })
            })

            newNode.addEventListener("mouseleave", () => {
                if (!innerNode.classList.contains("active_inner")) {
                    newNode.style.borderColor = `${this.edgeColours[index]}`
                }
                newNode.style.cursor = "normal"
                $(tooltip).css({ visibility: "hidden", opacity: "0" })
            })

            if (direction === "horizontal") {
                timelineContainer.className = "h_timeline_container"
                firstImgContainer.className = "h_img_container"
                secondImgContainer.className = "h_img_container"
                firstTimestampContainer.className = "h_text_container"
                secondTimestampContainer.className = "h_text_container"
                firstTitleContainer.className = "h_text_container"
                secondTitleContainer.className = "h_text_container"

                edgeLength = container.clientWidth / this.events.length - nodeSize
                newEdge.style.height = `${lineThickness}px`
                newEdge.style.width = `${edgeLength}px`

                const tooltipWidth = edgeLength * 0.75
                tooltip.style.width = `${tooltipWidth}px`
                tooltip.style.marginLeft = `-${tooltipWidth / 2 - nodeSize / 2 + 5}px`

            } else if (direction === "vertical") {
                $(container).css({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" })
                mainContainer.style.margin = 0
                descBox.style.marginRight = "20px"

                timelineContainer.className = "v_timeline_container"
                firstImgContainer.className = "v_img_container"
                secondImgContainer.className = "v_img_container"
                firstTimestampContainer.className = "v_text_container"
                secondTimestampContainer.className = "v_text_container"
                firstTitleContainer.className = "v_text_container"
                secondTitleContainer.className = "v_text_container"
                timelineContainer.style.maxWidth = `${nodeSize + lineThickness * 2}px`
                firstImgContainer.style.paddingRight = "20px"
                secondImgContainer.style.paddingLeft = "20px"

                edgeLength = container.clientHeight / this.events.length - nodeSize
                newEdge.style.height = `${edgeLength}px`
                newEdge.style.width = `${lineThickness}px`
            } else {
                throw new Error("Invalid direction passed in");
            }
            tooltip.textContent = `${event.desc}`
            newNode.append(tooltip)
            newNode.append(innerNode)
            newNodeContainer.append(newNode)
            timelineContainer.append(newNodeContainer)
            this.tooltips.push(tooltip)
            this.nodes.push(newNode)
            if (index < this.events.length - 1) {
                this.edges.push(newEdge)
                timelineContainer.append(newEdge)
            }
        })

        if (this.events.length === 0) {
            console.log("No events found")
        } else {
            let textWidth = 0
            const firstNodeLeft = this.nodes[0].getBoundingClientRect().left
            let readjusted = false

            if (direction === "horizontal") {
                textWidth = this.textIsDisplayed ? edgeLength * 0.8 : 0

                if (textWidth >= imgSize && firstNodeLeft - textWidth / 2 <= 0) {
                    mainContainer.style.marginLeft = `${textWidth}px`
                    firstImgContainer.style.marginLeft = `-${imgSize / 2 - nodeSize / 2 - lineThickness}px`
                    secondImgContainer.style.marginLeft = `-${imgSize / 2 - nodeSize / 2 - lineThickness}px`
                    readjusted = true
                }
            } else {
                textWidth = (this.textIsDisplayed ? 120 : 0)
                timelineContainer.style.paddingLeft = `${textWidth * 2 + 20}px`
                timelineContainer.style.paddingRight = `${textWidth * 2 + 20}px`
            }

            addText(this.events, this.nodes, nodeSize, lineThickness, readjusted, edgeLength, textWidth, direction, imgDisplay,
                firstTimestampContainer, secondTimestampContainer, firstTitleContainer, secondTitleContainer)
            this.timeContainers.push(firstTimestampContainer, secondTimestampContainer)
            this.titleContainers.push(firstTitleContainer, secondTitleContainer)

            addImages(this.events, this.nodes, nodeSize, lineThickness, imgSize, direction, imgDisplay, firstImgContainer, secondImgContainer)
            this.imgContainers.push(firstImgContainer, secondImgContainer)

            const offset = textWidth - imgSize
            animateEdges(this.edges, edgeLength, lineThickness, mainContainer, direction, imgDisplay, offset)

            // Adjust tooltip position
            if (direction === "horizontal") {
                if (imgDisplay === "top") {
                    this.tooltips.map((tooltip, index) => {
                        tooltip.className = "tooltip tooltip_below"
                        tooltip.style.top = `${this.nodes[index].offsetTop + nodeSize + lineThickness + 8}px`
                    })
                } else if (imgDisplay === "bottom") {
                    this.tooltips.map((tooltip, index) => {
                        tooltip.className = "tooltip tooltip_above"
                        tooltip.style.top = `${this.nodes[index].offsetTop - tooltip.clientHeight - 8}px`
                    })

                } else if (imgDisplay === "alternate") {
                    this.tooltips.map((tooltip, index) => {
                        if (index % 2 === 0) {
                            tooltip.className = "tooltip tooltip_below"
                            tooltip.style.top = `${this.nodes[index].offsetTop + nodeSize + lineThickness + 8}px`
                        } else {
                            tooltip.className = "tooltip tooltip_above"
                            tooltip.style.top = `${this.nodes[index].offsetTop - tooltip.clientHeight - 8}px`
                        }
                    })
                }
            } else {
                this.tooltips.map((tooltip) => {
                    tooltip.style.width = `${textWidth}px`
                    tooltip.style.marginLeft = `-${textWidth / 2 - nodeSize / 2 + 5}px`
                })
                if (imgDisplay === "left") {
                    this.tooltips.map((tooltip, index) => {
                        tooltip.className = "tooltip tooltip_on_right"
                        tooltip.style.left = `${this.nodes[index].offsetLeft + tooltip.clientWidth / 2 + nodeSize / 2 + lineThickness + 8}px`
                    })
                } else if (imgDisplay === "right") {
                    mainContainer.style.paddingLeft = `${textWidth}px`
                    this.tooltips.map((tooltip, index) => {
                        tooltip.className = "tooltip tooltip_on_left"
                        tooltip.style.left = `${this.nodes[index].offsetLeft - tooltip.clientWidth / 2 - nodeSize / 2 - lineThickness - 8}px`
                    })
                } else if (imgDisplay === "alternate") {
                    this.tooltips.map((tooltip, index) => {
                        if (index % 2 === 0) {
                            tooltip.className = "tooltip tooltip_on_right"
                            tooltip.style.left = `${this.nodes[index].offsetLeft + tooltip.clientWidth / 2 + nodeSize / 2 + lineThickness + 8}px`
                        } else {
                            tooltip.className = "tooltip tooltip_on_left"
                            tooltip.style.left = `${this.nodes[index].offsetLeft - tooltip.clientWidth / 2 - nodeSize / 2 - lineThickness - 8}px`
                        }
                    })
                }
            }
        }
    },

    makeEvent: function (time, title, desc, img) {
        const event = new TimelineEvent(time, title, desc, img)
        this.events.push(event)
        this.activeNodeColours.push("rgb(51, 171, 171)")
        this.edgeColours.push("black")
    },

    setInactiveColour: function (rgbColour) {
        this.hasGradient = false
        this.edgeColours.map((edgeColour, i) => {
            this.edgeColours[i] = `rgb${rgbColour}`
            edgeColour = null
        })
        if (this.container) { redraw(this) }
    },

    setActiveColour: function (rgbColour) {
        this.activeNodeColours.map((activeNodeColour, i) => {
            this.activeNodeColours[i] = `rgb${rgbColour}`
            activeNodeColour = null
        })
        if (this.container) { redraw(this) }
    },

    setGradient: function (rbgColour1) {
        this.hasGradient = true
        // Single colour gradient
        const rgb = rbgColour1.match(/\d+/g)
        const R = rgb[0]
        const G = rgb[1]
        const B = rgb[2]
        this.edgeColours.map((edgeColour, i) => {
            const factor = (i + 1) / this.nodes.length
            const newR = Math.round(factor * R)
            const newG = Math.round(factor * G)
            const newB = Math.round(factor * B)
            this.edgeColours[i] = `rgb(${newR + ", " + newG + ", " + newB})`
            edgeColour = null
        })
        this.activeNodeColours.map((activeNodeColour, i) => {
            const factor = (i + 1) / this.nodes.length
            const newR = Math.round(255 - factor * R)
            const newG = Math.round(255 - factor * G)
            const newB = Math.round(255 - factor * B)

            this.activeNodeColours[i] = `rgb(${newR + ", " + newG + ", " + newB})`
            activeNodeColour = null
        })
        if (this.container) {
            redraw(this)
            console.log("hello??")
        }
    },

    toggleImagesOff: function () {
        $(this.imgContainers[0]).hide()
        $(this.imgContainers[1]).hide()
    },

    toggleImagesOn: function () {
        $(this.imgContainers[0]).show()
        $(this.imgContainers[1]).show()
    },

    toggleTimesOff: function () {
        $(this.timeContainers[0]).hide()
        $(this.timeContainers[1]).hide()
    },

    toggleTimesOn: function () {
        $(this.timeContainers[0]).show()
        $(this.timeContainers[1]).show()
    },

    toggleTitlesOff: function () {
        $(this.titleContainers[0]).hide()
        $(this.titleContainers[1]).hide()
    },

    toggleTitlesOn: function () {
        $(this.titleContainers[0]).show()
        $(this.titleContainers[1]).show()
    }
}

// For animating timeline edges
function animateEdges(edges, edgeLength, lineThickness, mainContainer, direction, imgDisplay, offset) {
    edges.map((edge, index) => {
        const animated_edge = document.createElement("div")
        const top = edge.offsetTop
        const left = edge.offsetLeft
        let bgColour = "rgba(0, 0, 0, 0)"
        $(mainContainer).parents().each(function () {
            const colour = $(this).css("background-color")
            if (colour !== "rgba(0, 0, 0, 0)" && bgColour === "rgba(0, 0, 0, 0)") {
                bgColour = colour
            }
        })
        if (bgColour === "rgba(0, 0, 0, 0)") {
            bgColour = "white"
        }

        if (direction === "horizontal") {
            animated_edge.className = "animated_edge"
            animated_edge.style.width = `${edgeLength}px`
            animated_edge.style.height = `${lineThickness}px`
            animated_edge.style.top = `${top}px`
            animated_edge.style.left = `${left}px`
            animated_edge.style.backgroundColor = `${bgColour}`

            const anim_duration = 1000 / edges.length
            let animation = animated_edge.animate([
                {
                    left: `${left}px`, width: `${edgeLength}px`,
                    easing: index === 0 ? "ease-in" :
                        index === edges.length - 1 ? "ease-out" : "linear"
                },
                { left: `${left + edgeLength}px`, width: 0 }
            ], {
                duration: anim_duration,
                iterations: 1,
                fill: "forwards",
                delay: anim_duration * index
            })
            animation.pause()
        } else {
            animated_edge.className = "animated_edge"
            animated_edge.style.width = `${lineThickness}px`
            animated_edge.style.height = `${edgeLength}px`
            animated_edge.style.top = `${top}px`

            if (imgDisplay === "right") {
                animated_edge.style.left = `${left + offset}px`
            } else {
                animated_edge.style.left = `${left}px`
            }

            animated_edge.style.backgroundColor = `${bgColour}`

            const anim_duration = 1500 / edges.length
            let animation = animated_edge.animate([
                {
                    top: `${top}px`, height: `${edgeLength}px`,
                    easing: index === 0 ? "ease-in" :
                        index === edges.length - 1 ? "ease-out" : "linear"
                },
                { top: `${top + edgeLength}px`, height: 0 }
            ], {
                duration: anim_duration,
                iterations: 1,
                fill: "forwards",
                delay: anim_duration * index
            })
            animation.pause()
        }
        mainContainer.append(animated_edge)
    })
}

function redraw(lmtnObj) {
    lmtnObj.nodes = []
    lmtnObj.edges = []
    lmtnObj.imgContainers = []
    lmtnObj.timeContainers = []
    lmtnObj.titleContainers = []
    lmtnObj.tooltips = []
    lmtnObj.selected = null
    lmtnObj.currVisibleDesc = null
    lmtnObj.activeNodeColours = lmtnObj.activeNodeColours
    lmtnObj.edgeColours = lmtnObj.edgeColours
    lmtnObj.hasGradient = lmtnObj.hasGradient
    lmtnObj.container.innerHTML = ""
    lmtnObj.makeTimeline(lmtnObj.container, lmtnObj.direction, lmtnObj.imgDisplay)
}