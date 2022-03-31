"use strict";

// projectName and projectEditLink
const projectName = location.host.substring(0, location.host.indexOf("."));
const editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=solutions.js";
document.getElementById("solutions-edit-link").href = editSolutionsUrl;