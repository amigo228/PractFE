
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



for (let i = 0; i < buildings.length; i++ ) {
    const block = `
        <a href="${buildings[i].image}" data-fancybox="gallery startIndex=2">
            <img class="zoom" src="src/img/zoom.svg" alt="zoom">
        </a>
    `;
    build.insertAdjacentHTML("beforeend", block);

};
