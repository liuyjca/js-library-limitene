"use strict"
function Limitene() {
    // constructor function -- instantiates any variables that each
    //  Limitene timeline should have a unique version of
    this.events = []
    this.edges = []
    this.nodes = []
    this.imgContainers = []
    this.textContainers = []
    this.selected = null
    this.textIsDisplayed = true
}

Limitene.prototype = {
    makeTimeline: function(container, centeredInContainer, direction, imgDisplay, descrDisplay, hasProgress = false, scaled = false) {
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
        const firstTextContainer = document.createElement("div")
        const secondTextContainer = document.createElement("div")
        mainContainer.style.width = "fit-content"
        mainContainer.style.paddingLeft = `${imgSize}px`
        mainContainer.style.paddingRight = `${imgSize}px`
        mainContainer.append(firstTextContainer)
        mainContainer.append(firstImgContainer)
        mainContainer.append(timelineContainer)
        mainContainer.append(secondImgContainer)
        mainContainer.append(secondTextContainer)
        container.append(mainContainer)
        if (centeredInContainer) {
            mainContainer.style.margin = "0 auto"
        }

        let edgeLength = 0

        this.events.map((event, index) => {
            const newNodeContainer = document.createElement("div")
            const newNode = document.createElement("div")
            const innerNode = document.createElement("div")
            const newEdge = document.createElement("div")

            newNode.className = "timeline_node"
            newNode.style.height = `${nodeSize}px`
            newNode.style.width = `${nodeSize}px`
            newNode.style.border = `${lineThickness}px solid blue`
            innerNode.className = "inner_node"
            innerNode.style.height = `${nodeSize - 2}px`
            innerNode.style.width = `${nodeSize - 2}px`
            newEdge.className = "timeline_edge"

            newNode.addEventListener("click", (e) => {
                e.preventDefault()
                if (this.selected) {
                    this.selected[0].classList.remove("active_node")
                    this.selected[1].classList.remove("active_inner")
                    this.selected = null
                }
                newNode.classList.add("active_node")
                innerNode.classList.add("active_inner")
                this.selected = [newNode, innerNode]
            })

            if (!scaled) {

                if (direction === "horizontal") {
                    timelineContainer.className = "h_timeline_container"
                    firstImgContainer.className = "h_img_container"
                    secondImgContainer.className = "h_img_container"
                    firstTextContainer.className = "h_text_container"
                    secondTextContainer.className = "h_text_container"
                    
                    edgeLength = container.clientWidth / this.events.length - nodeSize
                    newEdge.style.height = `${lineThickness}px`
                    newEdge.style.width = `${edgeLength}px`

                } else if (direction === "vertical") {
                    mainContainer.style.display = "flex"
                    mainContainer.style.alignItems = "center"
                    
                    timelineContainer.className = "v_timeline_container"
                    firstImgContainer.className = "v_img_container"
                    secondImgContainer.className = "v_img_container"
                    firstTextContainer.className = "v_text_container"
                    secondTextContainer.className = "v_text_container"
                    timelineContainer.style.maxWidth = `${nodeSize + lineThickness*2}px`
                    firstImgContainer.style.paddingRight= "20px"
                    secondImgContainer.style.paddingLeft = "20px"

                    edgeLength = container.clientHeight / this.events.length - nodeSize
                    newEdge.style.height = `${edgeLength}px`
                    newEdge.style.width = `${lineThickness}px`

                } else {
                    throw new Error("Invalid direction passed in");
                }
            }
            console.log(event.title)
            
            newNode.append(innerNode)
            newNodeContainer.append(newNode)
            timelineContainer.append(newNodeContainer)
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
            if (direction === "horizontal") {
                textWidth = (this.textIsDisplayed ? 120 : 0)
            } else {
                textWidth = (this.textIsDisplayed ? 120 : 0)
            }
            
            const firstNodeLeft = this.nodes[0].getBoundingClientRect().left
            firstTextContainer.style.width = `${textWidth}px`
            secondTextContainer.style.width = `${textWidth}px`

            if (direction === "horizontal") {
                if (textWidth < imgSize & firstNodeLeft - imgSize <= 0) {
                    timelineContainer.style.marginLeft = `${imgSize}px`
                    timelineContainer.style.paddingRight = `${imgSize}px`
                } else if (textWidth >= imgSize & firstNodeLeft - textWidth/2 <= 0) {
                    timelineContainer.style.paddingLeft = `${textWidth/2}px`
                    timelineContainer.style.paddingRight = `${textWidth/2}px`
                }
            }

            addImages(this.events, this.nodes, nodeSize, lineThickness, imgSize, direction, imgDisplay, firstImgContainer, secondImgContainer)
            this.imgContainers.push([firstImgContainer, secondImgContainer])
            addText(this.events, this.nodes, nodeSize, lineThickness, textWidth, imgSize, direction, imgDisplay, firstTextContainer, secondTextContainer)
            this.textContainers.push([firstTextContainer, secondTextContainer])
        }
    },

    makeEvent: function(time, title, desc, img) {
        const event = new TimelineEvent(time, title, desc, img)
        this.events.push(event)
    },

    toggleImagesOff: function() {
        this.imgContainers.map((imgContainer) => {
            imgContainer[0].style.display = "none"
            imgContainer[1].style.display = "none"
        })
    },

    toggleImagesOn: function() {
        this.imgContainers.map((imgContainer) => {
            imgContainer[0].style.display = "block"
            imgContainer[1].style.display = "block"
        })
    },

    updateProgress: function(eventIndex) {

    }
}

function createTimelineNode() {
}

function createTimelineEdge() {

}