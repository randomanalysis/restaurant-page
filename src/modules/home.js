function homePage() {

    const contentDiv = document.getElementById("content");

    const container = document.createElement("div")
    container.classList.add("home-container");
    contentDiv.appendChild(container);

    const title = document.createElement("h1");
    title.innerHTML = "Adamo's Pizzeria";
    title.classList.add("main-title");
    container.appendChild(title);

    const subtitle = document.createElement("h5");
    subtitle.innerHTML = "Authentic New York-Style Pizza made in Manchester - if it isn't perfect, we don't serve it!";
    container.appendChild(subtitle);


    const copy = document.createElement("h4");
    copy.innerHTML = "Come join us for fantastic pizza, expertly selected Italian wines, craft beer, cocktails, and more, at Adamo's - family owned since 1983.";
    container.appendChild(copy);    
}

export {
    homePage
}
