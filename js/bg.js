const body = document.querySelector('body');

const IMG_PATH = '../images';
const ARRAY_IMG = ['alberto-restifo-Ni4NgA64TFQ-unsplash.jpg',
    'bailey-zindel-NRQV-hBF10M-unsplash.jpg',
    'daniel-leone-g30P1zcOzXo-unsplash.jpg',
    'rula-sibai--vq7mi4oF0s-unsplash.jpg',
    'ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg',
    'simon-berger-twukN12EN7c-unsplash.jpg'
];

function bgInit() {
    const bgIdx = genRandom();
    paintImage(bgIdx);
}

function genRandom() {
    return Math.floor(Math.random() * ARRAY_IMG.length);
}

function paintImage(idx) {
    const img = new Image();
    img.src = `${IMG_PATH}/${ARRAY_IMG[idx]}`;
    img.classList.add('bg-img');
    body.appendChild(img);
}

bgInit();