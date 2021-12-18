"use strict";

function _addText(events, nodes, nodeSize, lineThickness, readjusted, edgeLength, textWidth, direction, imgDisplay, firstTimestampContainer, secondTimestampContainer, firstTitleContainer, secondTitleContainer) {
    let timestamp_start = 0
    let timestamp_end = 0
    let title_start = 0
    let title_end = 0
    let nullTimestampCount = 0
    let nullTitleCount = 0
    let timeLabels = []
    let titleLabels = []

    events.map((event, index) => {
        const firstNodeTop = nodes[0].getBoundingClientRect().top
        const bounds = nodes[index].getBoundingClientRect()
        const timeLabel = document.createElement("h1")
        const titleLabel = document.createElement("p")
        timeLabel.className = "time_label"
        titleLabel.className = "title_label"

        if (direction === "horizontal") {
            if (index === 0) {
                timestamp_start = bounds.left + window.scrollX
                title_start = bounds.left + window.scrollX
            } else if (index === events.length - 1) {
                timestamp_end = bounds.left + window.scrollX
                title_end = bounds.left + window.scrollX
            }
        } else {
            if (index === 0) {
                timestamp_start = bounds.top + window.scrollY
                title_start = bounds.top + window.scrollY
            } else if (index === events.length - 1) {
                timestamp_end = bounds.top + window.scrollY
                title_end = bounds.top + window.scrollY
            }
        }

        if (event.time) {
            timeLabel.textContent = `${event.time}`
            timeLabel.style.width = `${textWidth}px`

            if (direction === "horizontal") {
                let offset = 0
                if (!readjusted) {
                    timeLabel.style.left = `${index * (edgeLength + nodeSize + lineThickness*2)}px`
                } else {
                    timeLabel.style.left = `${index * (edgeLength + nodeSize + lineThickness*2) - textWidth/2 + nodeSize/2 + lineThickness}px`
                }

                if (imgDisplay === "top") {
                    firstTimestampContainer.append(timeLabel)
                    secondTimestampContainer.style.height = "0px"
                    secondTimestampContainer.style.padding = "5px"

                    offset = (timeLabel.clientHeight - 20) > 0 ? timeLabel.clientHeight - 20 : 0
                    timeLabel.style.marginTop = `-${offset}px`

                } else if (imgDisplay === "bottom") {
                    firstTimestampContainer.style.height = "0px"
                    firstTimestampContainer.style.padding = "5px"
                    secondTimestampContainer.append(timeLabel)
                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTimestampContainer.append(timeLabel)

                        offset = (timeLabel.clientHeight - 20) > 0 ? timeLabel.clientHeight - 20 : 0
                        timeLabel.style.marginTop = `-${offset}px`
                    } else {
                        secondTimestampContainer.append(timeLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }

            } else {
                timeLabel.style.position = "relative"
                timeLabel.style.float = "none"

                let sum = 0
                timeLabels.map((label) => {
                    sum += label.clientHeight
                }) 

                if (imgDisplay === "left") {
                    firstTimestampContainer.append(timeLabel)
                } else if (imgDisplay === "right") {
                    secondTimestampContainer.append(timeLabel)
                } else if (imgDisplay === "alternate") {
                    sum = 0
                    if (index % 2 === 0) {
                        timeLabels.map((label, index) => {
                            if (index % 2 === 0) {sum += label.clientHeight}
                        }) 
                        firstTimestampContainer.append(timeLabel)
                    } else {
                        timeLabels.map((label, index) => {
                            if (index % 2 > 0) {sum += label.clientHeight}
                        }) 
                        secondTimestampContainer.append(timeLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
                timeLabel.style.top = `${(bounds.top + window.scrollY) -
                    (firstNodeTop + window.scrollY) - sum - timeLabel.clientHeight / 2 +
                    nodeSize / 2 + lineThickness}px`
                timeLabels.push(timeLabel)  
            }
        } else {
            nullTimestampCount++
        }

        if (event.title) {
            titleLabel.textContent = `${event.title}`
            titleLabel.style.width = `${textWidth}px`

            if (direction === "horizontal") {
                let offset = 0
                if (!readjusted) {
                    titleLabel.style.left = `${index * (edgeLength + nodeSize + lineThickness*2)}px`
                } else {
                    titleLabel.style.left = `${index * (edgeLength + nodeSize + lineThickness*2) - textWidth/2 + nodeSize/2 + lineThickness}px`
                }

                if (imgDisplay === "top") {
                    firstTitleContainer.append(titleLabel)
                    secondTitleContainer.style.height = "0px"
                    secondTitleContainer.style.padding = "5px"

                    offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0
                    titleLabel.style.marginTop = `-${offset}px`

                } else if (imgDisplay === "bottom") {
                    titleLabel.style.marginTop = `${timeLabel.clientHeight + 10}px`
                    firstTitleContainer.style.height = "0px"
                    firstTitleContainer.style.padding = "5px"
                    secondTitleContainer.style.paddingBottom = `${timeLabel.clientHeight + 30}px`
                    secondTitleContainer.append(titleLabel)

                    offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0

                } else if (imgDisplay === "alternate") {
                    if (index % 2 === 0) {
                        firstTitleContainer.append(titleLabel)

                        offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0
                        titleLabel.style.marginTop = `-${offset}px`

                    } else {
                        secondTitleContainer.style.paddingBottom = `${timeLabel.clientHeight + 30}px`
                        secondTitleContainer.append(titleLabel)
                        
                        offset = (timeLabel.clientHeight + titleLabel.clientHeight) > 0 ? timeLabel.clientHeight + titleLabel.clientHeight : 0
                        titleLabel.style.marginTop = `${offset - 5}px`
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
            } else {
                titleLabel.style.position = "relative"
                titleLabel.style.float = "none"

                let sum = 0
                titleLabels.map((label) => {
                    sum += label.clientHeight
                })

                if (imgDisplay === "left") {
                    firstTitleContainer.append(titleLabel)
                } else if (imgDisplay === "right") {
                    secondTitleContainer.append(titleLabel)
                } else if (imgDisplay === "alternate") {
                    sum = 0
                    if (index % 2 === 0) {
                        titleLabels.map((label, index) => {
                            if (index % 2 === 0) {sum += label.clientHeight}
                        })
                        firstTitleContainer.append(titleLabel)
                    } else {
                        titleLabels.map((label, index) => {
                            if (index % 2 > 0) {sum += label.clientHeight}
                        })
                        secondTitleContainer.append(titleLabel)
                    }
                } else {
                    throw new Error("Invalid image display mode passed in")
                }
                titleLabel.style.top = `${(bounds.top + window.scrollY) -
                    (firstNodeTop + window.scrollY) - sum - titleLabel.clientHeight / 2 + 
                    nodeSize / 2 + lineThickness}px`
                titleLabels.push(titleLabel)
            }
        } else {
            nullTitleCount++
        }
    })

    if (direction === "horizontal") {
        firstTimestampContainer.style.width = `${timestamp_end - timestamp_start + textWidth}px`
        secondTimestampContainer.style.width = `${timestamp_end - timestamp_start + textWidth}px`
        firstTitleContainer.style.width = `${title_end - timestamp_start + textWidth}px`
        secondTitleContainer.style.width = `${title_end - timestamp_start + textWidth}px`
    } else {
        firstTimestampContainer.style.height = `${timestamp_end - timestamp_start}px`
        secondTimestampContainer.style.height = `${timestamp_end - timestamp_start}px`
        firstTitleContainer.style.height = `${title_end - title_start}px`
        secondTitleContainer.style.height = `${title_end - title_start}px`
        
        firstTimestampContainer.style.paddingRight = "10px"
        secondTimestampContainer.style.paddingLeft = "10px"
        firstTitleContainer.style.paddingRight = "10px"
        secondTitleContainer.style.paddingLeft = "10px"
    }

    if (nullTitleCount === events.length) {
        firstTitleContainer.style.height = "0px"
        firstTitleContainer.style.padding = "0px"
        secondTitleContainer.style.height = "0px"
        secondTitleContainer.style.padding = "0px"
    }

    if (nullTimestampCount === events.length) {
        firstTimestampContainer.style.height = "0px"
        firstTimestampContainer.style.padding = "5px"
        secondTimestampContainer.style.height = "0px"
        secondTimestampContainer.style.padding = "5px"

        firstTitleContainer.style.paddingBottom = "0px"
        secondTitleContainer.style.paddingTop = "0px"
    }
}