"use strict";

// projectName and projectEditLinks
const projectName = location.host.substring(0, location.host.indexOf("."));
const editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=45-exercises.js";

const links = Array.from(document.querySelectorAll(".solutions-edit-link"));

links.map(link => link.href = editSolutionsUrl);