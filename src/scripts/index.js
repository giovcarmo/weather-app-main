import { screen } from "./screen.js"

const input = document.querySelector(".input")
const searchBtn = document.querySelector(".search-btn")
const searchBoxHover = document.querySelector(".hover-ativo")
const hoverLoading = document.querySelector(".hover-loading")

const days = document.getElementById("days").innerHTML

const wrongButtonContent = document.getElementById("wrong-button").innerHTML


document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('day-select')) {
        screen.renderContentLoading()
        setTimeout(() => {
            screen.renderContentWrong()
        }, 3000);
    }
});

const cityName = document.querySelectorAll(".city-name")
cityName.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        input.value = 'city name'
        searchBoxHover.classList.remove('hover')
    })
    input.addEventListener('click', () => {
        searchBoxHover.classList.remove('hover')
    })
})

searchBtn.addEventListener('click', () => {
    if (input.value.length === 0) {
        searchBoxHover.classList.add('hover')
        return
    }
    searchBoxHover.classList.remove('hover')
    hoverLoading.classList.add('hover')
    screen.renderContentLoading()
    setTimeout(() => {
        hoverLoading.classList.remove('hover')
        screen.renderContentNull()
    }, 3000);
})

searchBtn.addEventListener('click', e => {
    e.preventDefault()
})

const changeLink = document.getElementById("change-link")
const linkSelect = document.querySelectorAll(".link")

linkSelect.forEach(link => {
    changeLink.addEventListener("click", () => {
        if (changeLink.classList.contains("not-selected")) {
            screen.renderContentLoading()
            setTimeout(() => {
                hoverLoading.classList.remove('hover')
                screen.renderContentImperial()
            }, 1500);
        } else {
            screen.renderContentLoading()
            setTimeout(() => {
                hoverLoading.classList.remove('hover')
                screen.renderContent()
            }, 1500);
        }
        if (link.classList.contains("not-selected")) {
            link.classList.add("selected")
            link.classList.remove("not-selected")
            changeLink.classList.remove("not-selected")
            changeLink.classList.add("selected")
        } else {
            link.classList.remove("selected")
            link.classList.add("not-selected")
            changeLink.classList.add("not-selected")
            changeLink.classList.remove("selected")
        }

    })
})

changeLink.addEventListener('click', e => {
    e.preventDefault()
})

function renderScreen() {
    screen.renderContentLoading()
    setTimeout(() => {
    screen.renderContent()
    }, 3000);
}

renderScreen();

export { days, wrongButtonContent }
