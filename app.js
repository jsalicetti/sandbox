const mainEl = document.querySelector("main");

console.log(mainEl);


// set the background color
mainEl.style.background = "var(--main-bg)";

// set the content of mainEl to an h1
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// center dom manipulation
mainEl.classList.add("flex-ctr");

// nav
const topMenuEl = document.getElementById("top-menu");

// adjust the height 
topMenuEl.style.height = "100%";

topMenuEl.style.background = "let(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

