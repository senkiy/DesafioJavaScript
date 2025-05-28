

// carousel.js

// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
        Carousel._data = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;

            Carousel.Render(); // Render
            Carousel._interval = setInterval(function () {
                Carousel.Next();
            }, 5000);
        } else {
            throw "Iniciamento do metodo precisa de um array variavel.";
        }
    }

    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.Render();
    }

    static Render() {
        const item = Carousel._data[Carousel._sequence];
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");
        const indicatorsDiv = document.getElementById("carousel-indicators");
    
        if (carouselDiv && titleDiv && indicatorsDiv) {
            carouselDiv.innerHTML = `
                <a href="${item.link}">
                    <img src="img/${item.image}" alt="${item.title}" class="carousel-image"/>
                </a>
            `;
            titleDiv.innerHTML = `<a href="${item.link}">${item.title}</a>`;
    
            // Renderiza os botões indicadores
            indicatorsDiv.innerHTML = Carousel._data.map((_, index) => `
                <input type="radio" name="carousel-indicator" class="carousel-radio"
                    ${index === Carousel._sequence ? 'checked' : ''}
                    onclick="Carousel.GoTo(${index})" />
            `).join('');
        }
    }
    
    static GoTo(index) {
        Carousel._sequence = index;
        Carousel.Render();
        clearInterval(Carousel._interval); // Reinicia o intervalo
        Carousel._interval = setInterval(() => Carousel.Next(), 5000);
    }
    
}

