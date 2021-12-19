"use strict";

const header = document.createElement("div")
const linkToLanding = document.createElement("a")
header.append(linkToLanding)
document.body.append(header)
header.className = "page_header"
linkToLanding.className = "link_to_landing"
linkToLanding.href = "./index.html"
linkToLanding.textContent = "Limitene.js"
