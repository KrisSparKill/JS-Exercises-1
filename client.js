"use strict";

// projectName and projectEditLink
const projectName = location.host.substring(0, location.host.indexOf("."));
const editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=solutions.js";

const links = Array.from(document.querySelectorAll(".solutions-edit-link"));

links.map(link => link.href = editSolutionsUrl);