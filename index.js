//AIzaSyClIrqovzArCLjqFj9e9eGy21YNBpPlFD8
//'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=[YOUR_API_KEY]






const api_key = "AIzaSyClIrqovzArCLjqFj9e9eGy21YNBpPlFD8";


let popular = async () =>{
    try {
        
        // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${api_key}`;
        let res = await fetch(url);
        
        let data = await res.json();
        appendPop(data.items);

        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
popular();

let appendPop = (data) =>{
        let container = document.getElementById("popular");
    
        data.forEach(({id, snippet:{thumbnails,localized: {title} }}) =>{
           
            let div = document.createElement("div");
            
    
            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${id}`;
            iframe.allow = "fullscreen";
    
            let h3 = document.createElement("h3");
            h3.innerText = title;
    
            div.append(iframe,h3);
    
            container.append(div);
        })
    }






//---------------------YT-1------------------------//

let search = async () =>{
    let container = document.getElementById("popular");
    container.innerHTML=null;

    let pop_title = document.getElementById("popular_h3");
    pop_title.innerHTML=null;
    try {
        
        let query = document.getElementById("query").value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
        let res = await fetch(url);
        
        let data = await res.json();
        append(data.items);

        console.log(data);
    } catch (err) {
        console.log(err);
    }
};



let append = (data) =>{
    let container = document.getElementById("results");

    data.forEach(({id: {videoId}, snippet: {title, thumbnails} }) =>{
        // console.log(videoId);
        // console.log(title);
        let div = document.createElement("div");

        // let img = document.createElement("img");
        // img.src =thumbnails.default.url;

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "fullscreen";

        let h3 = document.createElement("h3");
        h3.innerText = title;

        div.append(iframe,h3);

        let video = {
            title,
            videoId,
        };
        div.onclick = () =>{
            playVideo(video);
        };

        container.append(div);
    })
}

let playVideo = (video) =>{
   
    localStorage.setItem("video", JSON.stringify(video))
    window.location.href = "video.html";

}

/*
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/7lar2-cNj3Y"    //video ID
title="YouTube video player" 
frameborder="0" 
allow="accelerometer;
 autoplay; clipboard-write; 
 encrypted-media; gyroscope; 
 picture-in-picture" allowfullscreen></iframe>
*/