
const navBar = document.getElementById('navBarFx'); // points the navBar element
let scrollPosition = window.scrollY;                // last scrollY value

const navBarScrollAnimation = () => {
    //  JS Code for animating navbar on scroll,
    // scroll down, navbar disappears,
    // scroll up, navbar appears.

    let currentPos = window.scrollY;        // scrollY value after scrolling

    if (currentPos > scrollPosition && currentPos > 500) {  
        // on scroll down
        navBar.classList.add("navBar-disappear");
    } else {
        // on scroll up 
        navBar.classList.remove("navBar-disappear");
    }

    scrollPosition = currentPos;        // update the global scrollY variable
}

window.addEventListener('scroll', navBarScrollAnimation)