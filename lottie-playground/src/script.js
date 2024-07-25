
import { DotLottie } from '@lottiefiles/dotlottie-web';
import '@lottiefiles/dotlottie-wc';


//Lottie 1

// const dotLottie1 = new DotLottie({
//   autoplay: true,
//   loop: true,
//   canvas: document.querySelector('#canvas-1'),
//   src: "lotties/json/lottie1.json",
// });

//Lottie 2
const dotLottie2 = new DotLottie({
  autoplay: true,
  loop: true,
  backgroundColor: "pink", //on peut rajouter la couleur ici
  canvas: document.querySelector('#canvas-2'),
  src: "lotties/json/lottie2.json",
});

//Lottie 3

const dotLottie3 = new DotLottie({
  autoplay: true,
  loop: true,
  backgroundColor: "skyblue",
  canvas: document.querySelector('#canvas-3'),
  src: "lotties/lottiefile/lottie3.lottie",
});

//Lottie 4

const dotLottie4 = new DotLottie({
  autoplay: true,
  loop: true,
  backgroundColor: "skyblue",
  mode: "bounce-reverse",
  canvas: document.querySelector('#canvas-4'),
  src: "lotties/json/lottie4.json",
});

//Lottie 6

const dotLottie6 = new DotLottie({
  autoplay: true,
  loop: false,
  canvas: document.querySelector('#canvas-6'),
  src: "lotties/json/lottie6.json", // or .json file
});
