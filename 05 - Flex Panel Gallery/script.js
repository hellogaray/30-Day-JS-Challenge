const panels = document.querySelectorAll(".panel");

function toggleOpen(event) {
    if (event.type === "mouseenter") {
        this.classList.add("open");
    } else if (event.type === "mouseleave") {
        this.classList.remove("open", "open-active"); // Ensure both are removed
    }
}

function toggleActive(event) {
    if (event.propertyName.includes("flex")) {
        if (this.classList.contains("open")) {
            this.classList.add("open-active");
        } else {
            this.classList.remove("open-active"); // Remove on hover out
        }
    }
}

panels.forEach(panel => panel.addEventListener("mouseenter", toggleOpen));
panels.forEach(panel => panel.addEventListener("mouseleave", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
