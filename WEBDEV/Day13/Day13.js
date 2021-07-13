async function getData(){
    const res = await fetch('https://meme-api.herokuapp.com/gimme')
    const data = await res.json()
    return data;
}

document.querySelector("button").addEventListener("click", async () =>{
    let response = getData();
    let user = await response;

    if(document.querySelector("div") != null){
        document.querySelector("div").remove();
    }

    const box = document.createElement("div");
    document.body.appendChild(box);
    const cap = document.createElement("h2");
    const image = document.createElement("img");
    image.classList.add("image");
    cap.innerHTML = user.title;
    image.src = await user.url;
    box.appendChild(cap);
    box.appendChild(image);
})