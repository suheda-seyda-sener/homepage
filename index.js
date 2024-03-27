const displayErrorMessage = (message) => {
    // Update the error box content
    const errorBox = document.querySelector('.error-box');
    errorBox.innerHTML = message;
    const searchInput = document.querySelector('.search-bar'); // Updated to target the search input
    searchInput.style.borderColor = "#EA9239"; // Updated to set border color to orange
};

const searchInput = document.querySelector('.search-bar'); // Assuming the search input has the class 'search-bar'
const searchButton = document.querySelector('.btn-search'); // Assuming the search button has the class 'btn-search'

searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const input = searchInput.value.trim();
    if (input !== "") {
        console.log("Performing search for:", input);
        searchInput.value = '';
        searchInput.focus();
    } else {
        displayErrorMessage('Please, fill out this field');
    }
});

searchInput.addEventListener('input', () => {
    const searchedText = searchInput.value.trim();
    if (searchedText !== "") {
        // Clear the error box content when there is input in the search field
        const errorBox = document.querySelector('.error-box');
        errorBox.innerHTML = ''; // Clear the error box content
        errorBox.style = '';
    }
});
