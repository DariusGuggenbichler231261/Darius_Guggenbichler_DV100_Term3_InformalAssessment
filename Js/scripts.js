console.log("Linked");

const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "VIVlf5kir3lE3ulDoMDJ6e-fzdykWY3kNY8q7FE2fzticKTTBg");
myHeaders.append("x-apihub-host", "AnimeList-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "10b0d633-40f8-43ee-af7f-812833c933a1");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

async function fetchHorimiyaInfo() {
    try {
        let response = await fetch("https://AnimeList-API.proxy-production.allthingsdev.co/v4/anime?q=Horimiya", requestOptions);
        let data = await response.text();

        DisplayAnime(data);
    } catch (error) {
        console.error("An error occurred while fetching the anime data:", error);
    }
}

function DisplayAnime(dataToDisplay) {
    let animeObject = JSON.parse(dataToDisplay);

    let data0 = animeObject.data[0];
    let data1 = animeObject.data[0].title;
    let data2 = animeObject.data[0].episodes;
    let data3 = animeObject.data[0].aired.string;
    let data4 = animeObject.data[0].synopsis;
    let data5 = animeObject.data[0].duration;
    let data6 = animeObject.data[0].rating;
    let data7 = animeObject.data[0].score;
    let data8 = animeObject.data[0].genres[0].name;

    let imag = animeObject.data[0].images.jpg.image_url;

    console.log("Data 0:", data0);
    console.log("Title: ", data1);
    console.log("Episodes: ", data2);
    console.log("Aired: ", data3);
    console.log("Synopsis: ", data4);
    console.log("Duration: ", data5);
    console.log("Rating: ", data6);
    console.log("Score: ", data7);
    console.log("Genre: ", data8);

    document.getElementById("img").innerHTML = `<img src="${imag}" alt="Anime Image 0">`;
    document.getElementById("title").innerHTML = data1;
    document.getElementById("ep").innerHTML = data2;
    document.getElementById("ad").innerHTML = data3;
    document.getElementById("syn").innerHTML = data4;
    document.getElementById("dur").innerHTML = data5;
    document.getElementById("rat").innerHTML = data6;
    document.getElementById("scr").innerHTML = data7;
    document.getElementById("gen").innerHTML = data8;
}
