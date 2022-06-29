let navOpener = document.querySelector('.js-nav-opener');
let header = document.querySelector('.js-header');

navOpener.addEventListener('click', () => {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
});

let build = document.getElementById('main');
let buildings = [
    {
        image: 'src/img/build_1.svg',
    },
    {
        image: 'src/img/build_2.svg',
    },
    {
        image: 'src/img/build_3.svg',
    },
    {
        image: 'src/img/build4.jpg',
    },
    {
        image: 'src/img/build5.jpg',
    },
];



for (let i = 0; i < buildings.length; i++) {
    const block = `
        <a href="${buildings[i].image}" data-fancybox="gallery startIndex=2">
            <img class="zoom" src="src/img/zoom.svg" alt="zoom">
        </a>
    `;
    build.insertAdjacentHTML("beforeend", block);

};

$('.latest-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.679056,
            lng: -73.897570
        },
        zoom: 14
    });

    let locations = [
        {
            position: new google.maps.LatLng(40.679056, -73.897570),
        }
    ];

    const infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i <= locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
        });

        const content = `
        <p>${locations[i].position}</p>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor: marker,
                map,
            });
            map.setCenter(marker.getPosition());
        })
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    window.initMap = initMap;
});


