const carousel1 = document.querySelector(".carousel1"),
firstImg1 = carousel1.querySelectorAll("img")[0],
arrowIcons1 = document.querySelectorAll(".wrapper1 i");

let isDragStart1 = false, isDragging1 = false, prevPageX1, prevScrollLeft1, positionDiff1;

const showHideIcons1 = () => {
    // showing and hiding prev/next icon according to carousel1 scroll left value
    let scrollWidth1 = carousel1.scrollWidth1 - carousel1.clientWidth; // getting max scrollable width
    arrowIcons1[0].style.display = carousel1.scrollLeft == 0 ? "none" : "block";
    arrowIcons1[1].style.display = carousel1.scrollLeft == scrollWidth1 ? "none" : "block";
}

arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth1 = firstImg1.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel1 scroll left else add to it
        carousel1.scrollLeft += icon.id == "left1" ? -firstImgWidth1 : firstImgWidth1;
        setTimeout(() => showHideIcons1(), 60); // calling showHideIcons1 after 60ms
    });
});
arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth1 = firstImg1.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel1 scroll left else add to it
        carousel1.scrollLeft += icon.id == "left1" ? -firstImgWidth1 : firstImgWidth1;
        setTimeout(() => showHideIcons1(), 60); // calling showHideIcons1 after 60ms
    });
});
const autoSlide1 = () => {
    // if there is no image left to scroll then return from here
    if(carousel1.scrollLeft - (carousel1.scrollWidth1 - carousel1.clientWidth) > -1 || carousel1.scrollLeft <= 0) return;

    positionDiff1 = Math.abs(positionDiff1); // making positionDiff1 value to positive
    let firstImgWidth1 = firstImg1.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel1 left to take middle img center
    let valDifference = firstImgWidth1 - positionDiff1;

    if(carousel1.scrollLeft > prevScrollLeft1) { // if user is scrolling to the right
        return carousel1.scrollLeft += positionDiff1 > firstImgWidth1 / 3 ? valDifference : -positionDiff1;
    }
    // if user is scrolling to the left
    carousel1.scrollLeft -= positionDiff1 > firstImgWidth1 / 3 ? valDifference : -positionDiff1;
}

const dragStart1 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart1 = true;
    prevPageX1 = e.pageX || e.touches[0].pageX;
    prevScrollLeft1 = carousel1.scrollLeft;
}

const dragging1 = (e) => {
    // scrolling images/carousel1 to left according to mouse pointer
    if(!isDragStart1) return;
    e.preventDefault();
    isDragging1 = true;
    carousel1.classList.add("dragging1");
    positionDiff1 = (e.pageX || e.touches[0].pageX) - prevPageX1;
    carousel1.scrollLeft = prevScrollLeft1 - positionDiff1;
    showHideIcons1();
}

const dragStop1 = () => {
    isDragStart1 = false;
    carousel1.classList.remove("dragging1");

    if(!isDragging1) return;
    isDragging1 = false;
    autoSlide1();
}

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("touchstart", dragStart1);

document.addEventListener("mousemove", dragging1);
carousel1.addEventListener("touchmove", dragging1);

document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("touchend", dragStop1);

console.log("narayanj");