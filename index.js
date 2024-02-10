let div = document.getElementById('photo');
let currentCount = 0;
let something = ['imgs/just-phone-3150618_960_720.png', 'imgs/mobile-phone-5309288_960_720.png',
    'imgs/nokia-2115901_960_720.png', "imgs/phone-1419131_960_720.png", "imgs/nokia-2115901_960_720.png", "imgs/phone-5749753_960_720.png", "imgs/smartphone-153650_960_720.png", "imgs/phone-png-17028.png",
    "imgs/phone-png-17029.png", "imgs/phone-png-17033.png"];
document.getElementById('button').onclick = function () {
    if (currentCount < something.length - 1) {
        currentCount++;
        img1.src = something[currentCount];
    }
};

document.getElementById('button1').onclick = function () {
    if (currentCount > 0) {
        currentCount--;
        img1.src = something[currentCount];
    }
};