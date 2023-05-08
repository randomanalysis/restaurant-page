function aboutPage() {

    const contentDiv = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("about-container");
    contentDiv.appendChild(container);


    const title = document.createElement("h1");
    title.innerHTML = "Contact Us";
    title.classList.add("main-title");
    container.appendChild(title);

    const address = document.createElement("h3");
    address.innerHTML = "Address";
    address.classList.add("addressHeading");
    container.appendChild(address);

    const addressline1 = document.createElement("h5");
    addressline1.innerHTML = "111 Carlito's Way";
    container.appendChild(addressline1);

    const addressline2 = document.createElement("h5");
    addressline2.innerHTML = "Bolton";
    container.appendChild(addressline2);

    const addressline3 = document.createElement("h5");
    addressline3.innerHTML = "BL1 1LB";
    container.appendChild(addressline3);

    const phone = document.createElement("h3");
    phone.innerHTML = "Phone No.";
    phone.classList.add("addressHeading");
    container.appendChild(phone);

    const phoneNumber = document.createElement("h5");
    phoneNumber.innerHTML = "01204 554 6655";
    container.appendChild(phoneNumber);

    const email = document.createElement("h3");
    email.innerHTML = "Email";
    email.classList.add("addressHeading");
    container.appendChild(email);

    const emailAddress = document.createElement("h5");
    emailAddress.innerHTML = "manager@adamospizza.com";
    container.appendChild(emailAddress);
};

export {
    aboutPage
}