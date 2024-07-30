document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const sidebarList = document.getElementById("sidebar-list");

    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        const items = sidebarList.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
            const a = items[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });
});
