"use strict"
function addText(events, nodes, nodeSize, lineThickness, textWidth, imgSize, direction, imgDisplay, firstTextContainer, secondTextContainer) {
    let start, end = 0
    events.map((event, index) => {
        if (event.time) {
            const bounds = nodes[index].getBoundingClientRect()
            const timeLabel = document.createElement("p")
            const titleLabel = document.createElement("p")
            timeLabel.className = "timeline_text"
            timeLabel.textContent = `${event.time}`
            timeLabel.style.width = `${textWidth}px`

            if (direction === "horizontal") {
                timeLabel.style.left = `${bounds.left + window.scrollX - textWidth/2 + nodeSize/2 + lineThickness}px`
                
                if (index === 0) {
                    start = bounds.left + window.scrollX
                } else if (index === events.length - 1) {
                    end = bounds.left + window.scrollX
                }

                if (imgDisplay === "top") {
                    firstTextContainer.append(timeLabel)
                    secondTextContainer.style.padding = "0px"
                } else if (imgDisplay === "bottom") {
                    firstTextContainer.style.padding = "0px"
                    secondTextContainer.append(timeLabel)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTextContainer.append(timeLabel)
                    } else {
                        secondTextContainer.append(timeLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
            } else {
                if (index === 0) {
                    start = bounds.top + window.scrollY
                } else if (index === events.length - 1) {
                    end = bounds.top + window.scrollY
                }

                if (imgDisplay === "left") {
                    firstTextContainer.append(timeLabel)
                } else if (imgDisplay === "right") {
                    secondTextContainer.append(timeLabel)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTextContainer.append(timeLabel)
                    } else {
                        secondTextContainer.append(timeLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
                timeLabel.style.top = `${bounds.top + window.scrollY + nodeSize - lineThickness - timeLabel.clientHeight/2}px`
            }
        }
    })
    // if (direction === "vertical") {
    //     firstTextContainer.style.height = `${end - start}px`
    //     secondTextContainer.style.height = `${end - start}px`
    // }
}