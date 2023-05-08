function menuPage() {

    const contentDiv = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("menu-container");
    contentDiv.appendChild(container);


    //menu item 1

    const menu_card1 = document.createElement("div");
    menu_card1.classList.add("menu-card");
    container.appendChild(menu_card1);

    const menu_imagewrap1 = document.createElement("div");
    menu_imagewrap1.classList.add("menu-imagewrap");
    menu_card1.appendChild(menu_imagewrap1)

    const menu_pic1 = document.createElement("img");
    menu_pic1.classList.add("menu-pic");
    menu_pic1.src = "menu-images/pizza1.jpg";
    menu_imagewrap1.appendChild(menu_pic1);

    const menu_description1 = document.createElement("p");
    menu_description1.classList.add("menu-description");
    menu_description1.innerHTML = `The classic New York-style pizza, topped with our house tomato sauce and plenty of shredded mozzarella`;
    menu_imagewrap1.appendChild(menu_description1);

    const menu_name1 = document.createElement("h3");
    menu_name1.classList.add("menu-name");
    menu_name1.innerHTML = `Cheese and Tomato Pizza`;
    menu_card1.appendChild(menu_name1);

    const menu_price1 = document.createElement("h4");
    menu_price1.classList.add("menu-price");
    menu_price1.innerHTML = `£11`;
    menu_card1.appendChild(menu_price1);

    //menu item 2

    const menu_card2 = document.createElement("div");
    menu_card2.classList.add("menu-card");
    container.appendChild(menu_card2);

    const menu_imagewrap2 = document.createElement("div");
    menu_imagewrap2.classList.add("menu-imagewrap");
    menu_card2.appendChild(menu_imagewrap2)

    const menu_pic2 = document.createElement("img");
    menu_pic2.classList.add("menu-pic");
    menu_pic2.src = "menu-images/pizza3.jpg";
    menu_imagewrap2.appendChild(menu_pic2);

    const menu_description2 = document.createElement("p");
    menu_description2.classList.add("menu-description");
    menu_description2.innerHTML = `Add a little spice to your slice, with our generously topped pepperoni pizza`;
    menu_imagewrap2.appendChild(menu_description2);

    const menu_name2 = document.createElement("h3");
    menu_name2.classList.add("menu-name");
    menu_name2.innerHTML = `Pepperoni Pizza`;
    menu_card2.appendChild(menu_name2);

    const menu_price2 = document.createElement("h4");
    menu_price2.classList.add("menu-price");
    menu_price2.innerHTML = `£13`;
    menu_card2.appendChild(menu_price2);

    //menu item 3

    const menu_card3 = document.createElement("div");
    menu_card3.classList.add("menu-card");
    container.appendChild(menu_card3);

    const menu_imagewrap3 = document.createElement("div");
    menu_imagewrap3.classList.add("menu-imagewrap");
    menu_card3.appendChild(menu_imagewrap3)

    const menu_pic3 = document.createElement("img");
    menu_pic3.classList.add("menu-pic");
    menu_pic3.src = "menu-images/pizza2.jpg";
    menu_imagewrap3.appendChild(menu_pic3);

    const menu_description3 = document.createElement("p");
    menu_description3.classList.add("menu-description");
    menu_description3.innerHTML = `Green bell pepper, red onion, mushrooms, jalepenos, and olives are our standard toppings, but you can customise this pizza with any combination of our veggie ingredients.`;
    menu_imagewrap3.appendChild(menu_description3);

    const menu_name3 = document.createElement("h3");
    menu_name3.classList.add("menu-name");
    menu_name3.innerHTML = `Veg Supreme Pizza`;
    menu_card3.appendChild(menu_name3);

    const menu_price3 = document.createElement("h4");
    menu_price3.classList.add("menu-price");
    menu_price3.innerHTML = `£12.50`;
    menu_card3.appendChild(menu_price3);

    //menu item 4

    const menu_card4 = document.createElement("div");
    menu_card4.classList.add("menu-card");
    container.appendChild(menu_card4);

    const menu_imagewrap4 = document.createElement("div");
    menu_imagewrap4.classList.add("menu-imagewrap");
    menu_card4.appendChild(menu_imagewrap4)

    const menu_pic4 = document.createElement("img");
    menu_pic4.classList.add("menu-pic");
    menu_pic4.src = "menu-images/pizza4.jpg";
    menu_imagewrap4.appendChild(menu_pic4);

    const menu_description4 = document.createElement("p");
    menu_description4.classList.add("menu-description");
    menu_description4.innerHTML = `Ham, Pepperoni, Spicy Beef and Pancetta make up our classic pizza, but you can customise this pizza with any combination of our meat toppings.`;
    menu_imagewrap4.appendChild(menu_description4);

    const menu_name4 = document.createElement("h3");
    menu_name4.classList.add("menu-name");
    menu_name4.innerHTML = `Meat Feat Pizza`;
    menu_card4.appendChild(menu_name4);

    const menu_price4 = document.createElement("h4");
    menu_price4.classList.add("menu-price");
    menu_price4.innerHTML = `£15`;
    menu_card4.appendChild(menu_price4);

}

export {
    menuPage
}
