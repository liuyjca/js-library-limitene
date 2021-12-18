"use strict";

function _addImages(events, nodes, nodeSize, lineThickness, imgSize, direction, imgDisplay, firstImgContainer, secondImgContainer) {
    let start = 0
    let end = 0
    let nullCount = 0
    let hoverEvent = new MouseEvent("mouseover", { "bubbles": true, "cancelable": true })
    let leaveEvent = new MouseEvent("mouseleave", { "bubbles": true, "cancelable": true })
    let emptyImages = []

    events.map((event, index) => {
        const firstNodeLeft = nodes[0].getBoundingClientRect().left
        const firstNodeTop = nodes[0].getBoundingClientRect().top
        const bounds = nodes[index].getBoundingClientRect()
        const timelineImg = document.createElement("img")
        if (event.img) {
            timelineImg.src = event.img

            timelineImg.onmouseover = () => {
                nodes[index].dispatchEvent(hoverEvent)
                timelineImg.style.cursor = "pointer"
            }

            timelineImg.onmouseleave = () => {
                nodes[index].dispatchEvent(leaveEvent)
                timelineImg.style.cursor = "normal"
            }

            timelineImg.onmousedown = () => {
                nodes[index].click()
            }

            nodes[index].onmouseover = () => {
                timelineImg.style.filter = "invert(10%)"
            }

            nodes[index].onmouseleave = () => {
                timelineImg.style.filter = "none"
            }
        } else {
            timelineImg.src = "../img/empty.png"
            emptyImages.push(timelineImg)
            nullCount++
        }

        timelineImg.className = "timeline_img"
        timelineImg.style.height = `${imgSize}px`
        timelineImg.style.width = `${imgSize}px`

        if (direction === "horizontal") {
            if (index === 0) {
                start = bounds.left + window.scrollX
            } else if (index === events.length - 1) {
                end = bounds.left + window.scrollX
            }

            if (imgDisplay === "top") {
                timelineImg.style.left = `${(bounds.left + window.scrollX) -
                    (firstNodeLeft + window.scrollX) -
                    index * imgSize + lineThickness / 2}px`

                firstImgContainer.append(timelineImg)
                secondImgContainer.style.height = "0px"
                secondImgContainer.style.padding = "5px"

            } else if (imgDisplay === "bottom") {
                timelineImg.style.left = `${(bounds.left + window.scrollX) -
                    (firstNodeLeft + window.scrollX) -
                    index * imgSize + lineThickness / 2}px`

                firstImgContainer.style.height = "0px"
                firstImgContainer.style.padding = "5px"
                secondImgContainer.append(timelineImg)

            } else if (imgDisplay === "alternate") {
                timelineImg.style.left = `${(bounds.left + window.scrollX) -
                    (firstNodeLeft + window.scrollX) -
                    Math.floor(index / 2) * imgSize + lineThickness / 2}px`

                if (index % 2 === 0) {
                    firstImgContainer.append(timelineImg)
                } else {
                    secondImgContainer.append(timelineImg)
                }
            } else {
                throw new Error("Invalid image display mode passed in")
            }
        } else {
            if (index === 0) {
                start = bounds.top + window.scrollY
            } else if (index === events.length - 1) {
                end = bounds.top + window.scrollY + nodeSize/2
            }

            if (imgDisplay === "left") {
                timelineImg.style.top = `${(bounds.top + window.scrollY) -
                    (firstNodeTop + window.scrollY) -
                    index * (imgSize + 3.5)}px`

                firstImgContainer.append(timelineImg)

            } else if (imgDisplay === "right") {
                timelineImg.style.top = `${(bounds.top + window.scrollY) -
                    (firstNodeTop + window.scrollY) -
                    index * (imgSize + 3.5)}px`

                secondImgContainer.append(timelineImg)
            } else if (imgDisplay === "alternate") {
                timelineImg.style.top = `${(bounds.top + window.scrollY) -
                    (firstNodeTop + window.scrollY) -
                    Math.floor(index / 2) * (imgSize + 3.5)}px`
                if (index % 2 === 0) {
                    firstImgContainer.append(timelineImg)
                } else {
                    secondImgContainer.append(timelineImg)
                }
            } else {
                throw new Error("Invalid image display mode passed in")
            }
        }
    })
    if (direction === "horizontal") {
        firstImgContainer.style.width = `${end - start + imgSize}px`
        secondImgContainer.style.width = `${end - start + imgSize}px`
    } else {
        firstImgContainer.style.height = `${end - start + imgSize}px`
        secondImgContainer.style.height = `${end - start + imgSize}px`
        firstImgContainer.style.marginTop = `-${imgSize / 2 - nodeSize / 2}px`
        secondImgContainer.style.marginTop = `-${imgSize / 2 - nodeSize / 2}px`
    }

    if (nullCount === events.length) {
        firstImgContainer.style.height = "0px"
        firstImgContainer.style.padding = "5px"
        secondImgContainer.style.height = "0px"
        secondImgContainer.style.padding = "5px"

        emptyImages.map((img) => {
            img.remove()
        })
    }
}