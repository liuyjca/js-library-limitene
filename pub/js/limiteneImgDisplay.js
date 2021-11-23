"use strict"
function addImages(events, nodes, nodeSize, lineThickness, imgSize, direction, imgDisplay, firstImgContainer, secondImgContainer) {
    let start, end = 0

    if (direction === "horizontal") {
        firstImgContainer.style.marginLeft = `-${imgSize/2 + nodeSize/2 + lineThickness}px`
        secondImgContainer.style.marginLeft = `-${imgSize/2 + nodeSize/2 + lineThickness}px`
    }

    events.map((event, index) => {
        if (event.img) {
            const bounds = nodes[index].getBoundingClientRect()
            const timelineImg = document.createElement("img")
            timelineImg.className = "timeline_img"
            timelineImg.src = event.img
            timelineImg.style.height = `${imgSize}px`
            timelineImg.style.width = `${imgSize}px`

            if (direction === "horizontal") {
                timelineImg.style.left = `${bounds.left + window.scrollX - imgSize/2 + nodeSize/2 + lineThickness}px`

                if (index === 0) {
                    start = bounds.left + window.scrollX
                } else if (index === events.length - 1) {
                    end = bounds.left + window.scrollX
                }

                if (imgDisplay === "top") {
                    firstImgContainer.append(timelineImg)
                    secondImgContainer.style.padding = "0px"
                } else if (imgDisplay === "bottom") {
                    firstImgContainer.style.padding = "0px"
                    secondImgContainer.append(timelineImg)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstImgContainer.append(timelineImg)
                    } else {
                        secondImgContainer.append(timelineImg)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
            } else {
                timelineImg.style.top = `${bounds.top + window.scrollY}px`

                if (index === 0) {
                    start = bounds.top + window.scrollY
                } else if (index === events.length - 1) {
                    end = bounds.top + window.scrollY
                }

                if (imgDisplay === "left") {
                    firstImgContainer.append(timelineImg)
                } else if (imgDisplay === "right") {
                    secondImgContainer.append(timelineImg)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstImgContainer.append(timelineImg)
                    } else {
                        secondImgContainer.append(timelineImg)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
            }

            nodes[index].onmouseover = ()=> {
                timelineImg.style.filter = "brightness(80%)"
            }

            nodes[index].onmouseleave = ()=> {
                timelineImg.style.filter = "brightness(100%)"
            }
        }
    })
    if (direction === "horizontal") {
        firstImgContainer.style.width = `${end - start + imgSize}px`
        secondImgContainer.style.width = `${end - start + imgSize}px`
    } else {
        firstImgContainer.style.height = `${end - start + imgSize}px`
        secondImgContainer.style.height = `${end - start + imgSize}px`
    }
}