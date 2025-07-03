let arrObj = [
    {
        message: " ~2022 <br><br>some meetup around december , was wilding with the wwe moves ",
        vidlink: "Vids/fightvid.mp4"
    },
    {
        message: " ~2023 <br><br>2 twins birthday , no meetup coz they was busy , they always busy.<br><br>Why ? you may ask , nobody knows , nobody asks.",
        vidlink: "Vids/twinsbirth.mp4"
    },
    {
        message: "~2023<br><br>boy caught a stray. ",
        vidlink: "Vids/kylanrevengeupdated.mp4"
    },
    {
        message: " ~2025 or 2024 idk <br><br>was a meetup at shaolins house though , <br><br>this time no slap :( ... LaMe",
        vidlink: "Vids/KYlanbirthday9thjune.mp4"
    },
]

let grid_elem = document.querySelector(".grid"); 
let total_html = ""; 
function displayMain(){

  arrObj.forEach( (objItem) => {
    let singleHtml = `
     <div class="vid">
        <div class="vid-div">
            <video controls>
                <source src="./${objItem.vidlink}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div class="desc-div">
            <p>${objItem.message}</p>
        </div>
     </div>
    `; 

        total_html += singleHtml; 
    }); 

    grid_elem.innerHTML = total_html; 
}

displayMain(); 