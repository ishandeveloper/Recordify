// DOM ELEMENTS

const video = document.querySelector("video");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const videoSourceButton = document.getElementById("videoSource");

videoSourceButton.onclick = getvideoSources;

const { desktopCapturer } = require("electron");

async function getvideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ["window", "screen"],
  });


  
}
