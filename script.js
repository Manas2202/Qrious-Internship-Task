var videoId = document.getElementById("my-video");
var optText1 = document.getElementById("opt-text-1");
var optText2 = document.getElementById("opt-text-2");
var videoSrc = document.getElementById("video-src-id");

function onVideoPause(){
    console.log(videoId.style.zIndex);
  if (videoId.paused) {
    var optionDiv = (document.getElementById(
      "other-video-option-div-id"
    ).style.display = "flex");
    if (
      videoSrc.getAttribute("src") ===
      "./Qrious Creative Showreel 201920_1080p.mp4"
    ) {
      optText1.innerHTML = "Design";
      optText2.innerHTML = "Photography";
    } else if (videoSrc.getAttribute("src") === "./QCM-Design Sampler.mp4") {
      optText1.innerHTML = "Home";
      optText2.innerHTML = "Photography";
    } else if (
      videoSrc.getAttribute("src") === "./QCM_Photography_Sampler.mp4"
    ) {
      optText1.innerHTML = "Home";
      optText2.innerHTML = "Design";
    }  
  } else {
      console.log("CHECK");
      var optionDiv = (document.getElementById(
        "other-video-option-div-id"
      ).style.display = "none");
  }
}


function optClick2(){
    if (optText2.innerHTML === "Design") {
        videoSrc.setAttribute("src", "./QCM-Design Sampler.mp4");
        videoId.load();
        videoId.play();
        var optionDiv = (document.getElementById(
          "other-video-option-div-id"
        ).style.display = "none");
    } else if (optText2.innerHTML === "Photography") {
        videoSrc.setAttribute("src", "./QCM_Photography_Sampler.mp4");
        videoId.load();
        videoId.play();
        var optionDiv = (document.getElementById(
          "other-video-option-div-id"
        ).style.display = "none");
    } else if (optText2.innerHTML === "Home") {
        videoSrc.setAttribute(
          "src",
          "./Qrious Creative Showreel 201920_1080p.mp4"
        );
        videoId.load();
        videoId.play();
        var optionDiv = (document.getElementById(
          "other-video-option-div-id"
        ).style.display = "none");
    }
}


function optClick1() {
  if (optText1.innerHTML === "Design") {
    videoSrc.setAttribute("src", "./QCM-Design Sampler.mp4");
    videoId.load();
    videoId.play();
    var optionDiv = (document.getElementById(
      "other-video-option-div-id"
    ).style.display = "none");
  } else if (optText1.innerHTML === "Photography") {
    videoSrc.setAttribute("src", "./QCM_Photography_Sampler.mp4");
    videoId.load();
    videoId.play();
    var optionDiv = (document.getElementById(
      "other-video-option-div-id"
    ).style.display = "none");
  } else if (optText1.innerHTML === "Home") {
    videoSrc.setAttribute("src", "./Qrious Creative Showreel 201920_1080p.mp4");
    videoId.load();
    videoId.play();
    var optionDiv = (document.getElementById(
      "other-video-option-div-id"
    ).style.display = "none");
  }
}