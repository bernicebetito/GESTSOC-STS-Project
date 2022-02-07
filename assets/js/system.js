function showsys() {
    var sysMore = document.getElementById("sys-more")
    var sysButton = document.getElementById("sys-button")
    if (sysMore.style.height != "100%") {
        sysMore.style.height = "100%"
        sysButton.disabled = false
        sysButton.classList.remove("disable-button")
        sysButton.classList.add("enable-button")
    } else {
        sysMore.style.height = "0"
        sysButton.disabled = true
        sysButton.classList.remove("enable-button")
        sysButton.classList.add("disable-button")
    }
}
