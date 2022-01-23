//ALL ELEMENTS//
const buttons = document.querySelectorAll("button");
//ALL ELEMENTS//

//ACTIVE BUTTONS//
    buttons.forEach((btn) => {
        btn.addEventListener("click", function() {
            buttons.forEach(btn=>btn.classList.remove("active"))
            this.classList.add("active");
        })
    })
//ACTIVE BUTTONS//
