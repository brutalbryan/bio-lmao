window.onload = function() {
    var e = document.querySelectorAll(".browse li"),
        a = [];
    removeActiveClasses = function(e) {
        for (var a in e) e[a].className = e[a].className.replace(/(?:^|\s)active(?!\S)/g, "")
    };
    for (var r in e) e.hasOwnProperty(r) && (e[r].addEventListener("click", function() {
        event.preventDefault()
    }), e[r].addEventListener("mouseover", function() {
        a = [document.querySelector(".browse__menu .active"),
        document.querySelector(".browse__gallery .active")],
        removeActiveClasses(a),
        galleryToChange = document.querySelector(".browse__gallery ." + this.className),
        galleryToChange.className += " active",
        this.className += " active"
    }))
};
