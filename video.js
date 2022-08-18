

let video = JSON.parse(localStorage.getItem("video"));

let container = document.getElementById("playlist");


    
    let div = document.createElement("div");

    
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.videoId}`;
    iframe.allow = "fullscreen";

    let h3 = document.createElement("h3");
    h3.innerText = video.title;

    div.append(iframe,h3);

    container.append(div);