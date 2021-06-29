var b = 0;
var r = 36;
document.querySelector("#booked").innerHTML = String(b);
document.querySelector("#remaining").innerHTML = String(r);
var Box = document.querySelectorAll(".box");
Box.forEach(book);
function book(item, index){
    item.addEventListener('click',()=>{
        if(item.classList.contains("boxclicked")){
            item.classList.remove("boxclicked");
            r += 1;
            b -= 1;
            document.querySelector("#booked").innerHTML = String(b);
            document.querySelector("#remaining").innerHTML = String(r);
        }
        else{
            item.classList.add("boxclicked");
            b += 1;
            r -= 1;
            document.querySelector("#booked").innerHTML = String(b);
            document.querySelector("#remaining").innerHTML = String(r);
        }
    });
}