"use strict"
function addText(events, nodes, nodeSize, lineThickness, textWidth, direction, imgDisplay, firstTextContainer, secondTextContainer) {
    let maxMarginTop = 0 
    let maxMarginBottom = 0

    events.map((event, index) => {
        const bounds = nodes[index].getBoundingClientRect()
        const timeLabel = document.createElement("h1")
        const titleLabel = document.createElement("p")

        if (event.time) {
            timeLabel.textContent = `${event.time}`
            timeLabel.style.width = `${textWidth}px`

            if (direction === "horizontal") {
                let offset = 0
                timeLabel.style.left = `${bounds.left + window.scrollX - textWidth/2 + nodeSize/2 + lineThickness}px`

                if (imgDisplay === "top") {
                    firstTextContainer.append(timeLabel)
                    secondTextContainer.style.padding = "0px"
                    
                    offset = (timeLabel.clientHeight - 20) > 0 ? timeLabel.clientHeight - 20 : 0
                    timeLabel.style.marginTop = `-${offset}px`
                    maxMarginTop = offset > maxMarginTop ? offset : maxMarginTop

                } else if (imgDisplay === "bottom") {
                    firstTextContainer.style.padding = "0px"
                    secondTextContainer.append(timeLabel)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTextContainer.append(timeLabel)

                        offset = (timeLabel.clientHeight - 20) > 0 ? timeLabel.clientHeight - 20 : 0
                        timeLabel.style.marginTop = `-${offset}px`
                        maxMarginTop = offset > maxMarginTop ? offset : maxMarginTop
                    } else {
                        secondTextContainer.append(timeLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
                
            } else {
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

        if (event.title) {
            titleLabel.textContent = `${event.title}`
            titleLabel.style.width = `${textWidth}px`

            if (direction === "horizontal") {
                let offset = 0
                titleLabel.style.left = `${bounds.left + window.scrollX - textWidth/2 + nodeSize/2 + lineThickness}px`

                if (imgDisplay === "top") {
                    firstTextContainer.append(titleLabel)
                    secondTextContainer.style.padding = "0px"

                    offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0
                    titleLabel.style.marginTop = `-${offset}px`
                    maxMarginTop = offset + maxMarginTop > maxMarginTop ? titleLabel.clientHeight + maxMarginTop/2 : maxMarginTop
                    
                } else if (imgDisplay === "bottom") {
                    titleLabel.style.marginTop = `${timeLabel.clientHeight + 10}px`
                    firstTextContainer.style.padding = "0px"
                    secondTextContainer.style.paddingBottom = `${timeLabel.clientHeight + 30}px`
                    secondTextContainer.append(titleLabel)

                    offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0
                    maxMarginBottom = offset > maxMarginBottom ? offset : 0

                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTextContainer.append(titleLabel)

                        offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0
                        titleLabel.style.marginTop = `-${offset}px`
                        maxMarginTop = offset + maxMarginTop > maxMarginTop ? titleLabel.clientHeight + maxMarginTop/2 : maxMarginTop
                    } else {
                        secondTextContainer.style.paddingBottom = `${timeLabel.clientHeight + 30}px`
                        secondTextContainer.append(titleLabel)
                        titleLabel.style.marginTop = `${timeLabel.clientHeight + 10}px`
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
            } else {
                if (imgDisplay === "left") {
                    firstTextContainer.append(titleLabel)
                } else if (imgDisplay === "right") {
                    secondTextContainer.append(titleLabel)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTextContainer.append(titleLabel)
                    } else {
                        secondTextContainer.append(titleLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
                titleLabel.style.top = `${bounds.top + window.scrollY + nodeSize - lineThickness - titleLabel.clientHeight/2}px`
            }
        }
    })
    firstTextContainer.style.paddingTop = `${maxMarginTop ? maxMarginTop + 50 : 0}px`
    secondTextContainer.style.paddingBottom = `${maxMarginBottom ? maxMarginBottom + 50 : 0}px`
}