const initSlider = () => {
    const sliderList = document.querySelector(".sliderWrapper .sliderList");
    const sliderButtons = document.querySelectorAll(".sliderWrapper .sliderBtn");
    const sliderScrollbar = document.querySelector(".sliderScrollbar");
    const scrollbarThumb = document.querySelector(".scrollbarThumb");
    const maxScrollLeft = sliderList.scrollWidth - sliderList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            scrollbarThumb.style.left = `${newThumbPosition}px`
        }

        document.addEventListener("mousemove", handleMouseMove);
    })

    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prevSlide" ? -150 : 150;
            const scrollAmount = sliderList.clientWidth = direction;
            sliderList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        sliderButtons[0].style.display = sliderList.scrollLeft <= 0 ? "none" : "block";
        sliderButtons[1].style.display = sliderList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    const updateScrollThumbPosition = () => {
        const scrollPosition = sliderList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    sliderList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);