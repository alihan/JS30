const showcase = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  addProject();
});

function addProject() {
  let displayProjects = projects.map((project) => {
    return `<div class = 'container-block container-before'>
        <a target = '_blank' href = '${project.url}'>
        <img alt = '${project.title}' src = '${project.img}'>
        <span class = 'description'>${project.title}</span>
            </a>
            </div>`;
  });
  displayProjects = displayProjects.join("");
  showcase.innerHTML = displayProjects;
}

const projects = [
  {
    title: "JS Drum Kit",
    url: "js-drum-kit/index.html",
    img: "images/drum-kit.JPG",
  },
  {
    title: "JS Clock",
    url: "js-clock/index.html",
    img: "images/js-clock.JPG",
  },
  {
    title: "CSS Variables in JS",
    url: "css-variables/index.html",
    img: "images/css-variables.JPG",
  },
  {
    title: "Array Cardio Day 1",
    url: "array-cardio-day-1/index.html",
    img: "images/array-cardio-1.JPG",
  },
  {
    title: "Flex Panel Gallery",
    url: "flex-panel-gallery/index.html",
    img: "images/flex-panel-gallery.JPG",
  },
  {
    title: "Ajax Type Ahead",
    url: "ajax-type-ahead/index.html",
    img: "images/ajax-type-ahead.JPG",
  },
  {
    title: "Array Cardio Day 2",
    url: "array-cardio-day-2/index.html",
    img: "images/array-cardio-day-2.JPG",
  },
  {
    title: "Fun with HTML5 Canvas",
    url: "fun-with-html5-canvas/index.html",
    img: "images/canvas.JPG",
  },
  {
    title: "Dev Tools Domination",
    url: "dev-tools-domination/index.html",
    img: "images/dev-tools.JPG",
  },
  {
    title: "Hold Shift To Check Multiple Checkboxes",
    url: "hold-shift-and-check-checkboxes/index.html",
    img: "images/checkbox.JPG",
  },
  {
    title: "Custom HTML5 Video Player",
    url: "custom-video-player/index.html",
    img: "images/video-player.JPG",
  },
  {
    title: "Key Sequence Detection",
    url: "key-sequence-detection/index.html",
    img: "images/key-sequence.JPG",
  },
  {
    title: "Slide in on Scroll",
    url: "slide-in-on-scroll/index.html",
    img: "images/scroll.JPG",
  },
  {
    title: "Object and Arrays - Reference vs Copy",
    url: "js-references-vs-copying/index.html",
    img: "images/js-references.JPG",
  },
  {
    title: "Local Storage and Event Delegation",
    url: "local-storage/index.html",
    img: "images/local-storage.JPG",
  },
  {
    title: "CSS Text Shadow Mouse Move Effect",
    url: "mouse-move-shadow/index.html",
    img: "images/shadow.JPG",
  },
  {
    title: "Sorting Band Names without Article",
    url: "sort-without-articles/index.html",
    img: "images/sorting-bands.JPG",
  },
  {
    title: "Tally String Times with Reduce",
    url: "tally-string-times-with-reduce/index.html",
    img: "images/tally.JPG",
  },
  {
    title: "Webcam Fun",
    url: "webcam-fun/index.html",
    img: "images/webcam.JPG",
  },
  {
    title: "Speech Detection",
    url: "speech-detection/index.html",
    img: "images/speech.JPG",
  },
  {
    title: "Geolocation",
    url: "geolocation/index.html",
    img: "images/geolocation.JPG",
  },
  {
    title: "Follow Along links",
    url: "follow-along-links/index.html",
    img: "images/follow.JPG",
  },
  {
    title: "Speech Synthesis",
    url: "speech-synthesis/index.html",
    img: "images/speech2.JPG",
  },
  {
    title: "Sticky Nav",
    url: "sticky-nav/index.html",
    img: "images/fixed-nav.JPG",
  },
  {
    title: "JS Capture",
    url: "event-capture/index.html",
    img: "images/bubbling.JPG",
  },
  {
    title: "Follow Along Nav",
    url: "stripe-follow-along-nav/index.html",
    img: "images/stripe.JPG",
  },
  {
    title: "Click and Drag",
    url: "click-and-drag/index.html",
    img: "images/clickanddrag.JPG",
  },
  {
    title: "Video Speed Controller",
    url: "video-speed-controller/index.html",
    img: "images/videospeed.JPG",
  },
  {
    title: "Countdown Timer",
    url: "countdown-timer/index.html",
    img: "images/countdown.JPG",
  },
  {
    title: "Whack a Mole",
    url: "whack-a-mole/index.html",
    img: "images/whack.JPG",
  },
];
