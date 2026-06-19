document.getElementById("enter_button").addEventListener("click", function () {
    
        const container = document.getElementById("display_area"); // Retreive the inputted name and make it constant
        const userName = document.getElementById("user_name").value.trim(); // Selecting the image container

    // Stop empty input
    if (userName === "") {
        alert("Please enter a name!");
        return;
    }

    const glamName = `✨ ${userName.toUpperCase()} ✨`;

    container.innerHTML = `<div class="result_text" id="result_text">${glamName}</div>`;

    setTimeout(() => {
        const text = document.getElementById("result_text");
        text.classList.add("show");
        setTimeout(() => text.classList.add("glow"), 300);
    }, 20);

});


document.getElementById("reset_button").addEventListener("click", function () {
    
    const container = document.getElementById("display_area"); // Selecting the image container
    const userName = document.getElementById("user_name"); // Retreive the inputted name and make it constant

    // Restore the image
    container.innerHTML = `<div class="homepage_image"></div>`;
    
    // Clear the input box
    userName.value = "";

});