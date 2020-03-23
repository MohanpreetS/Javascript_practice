const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// function colorSetter() {
//     let rng1 = Math.floor(Math.random() * 255) + 1;
//     let rng2 = Math.floor(Math.random() * 255) + 1;
//     let rng3 = Math.floor(Math.random() * 255) + 1;

//     // let clr = rgb(rng1, rng2, rng3);
//     let rclr = `rgb(${rng1}, ${rng2}, ${rng3})`;
//     document.body.style.backgroundColor = rclr;
//     const heading = document.querySelector('#clr');
//     heading.innerText = rclr;
//     if (rng1 <= 30 || rng2 <= 30 || rng3 <= 30) {
//         heading.style.color = 'white';
//     } else {
//         heading.style.color = 'black';
//     }
//     // console.log('printing');
// }

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', colorSetter);
// // btn.addEventListener('click', () => console.log('clicked'));
