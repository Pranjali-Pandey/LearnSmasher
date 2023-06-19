const search = document.querySelector(".search-box input"),
    images = document.querySelector(".image-box");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searcValue = search.Value,
            Value = searcValue.toLowerCase();
        images.forEach(Image => {
            if (Value === Image.dataset.name) {
                return Image.style.display = "block";


            }
            image.style.display = "none";


        })



    }
});
search.addEventListener("keyup", () => {
    if (search.Value != "") return;
    images.forEach(image => {
        image.style.display = "block";
    })
})