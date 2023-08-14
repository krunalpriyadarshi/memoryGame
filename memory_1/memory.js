// Function to preload images
function preloadImages(imagePaths, callback) {
    let loadedImages = 0;
    for (let i = 0; i < imagePaths.length; i++) {
        const img = new Image();
        img.onload = function () {
            loadedImages++;
            if (loadedImages === imagePaths.length) {
                callback();
            }
        };
        img.src = imagePaths[i];
    }
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

$(function () {
    $("#tabs").tabs();

    const imagePaths = [
        //'images/back.png',
        //'images/blank.png',
        'images/card_1.png',
        'images/card_2.png',
        'images/card_3.png',
        'images/card_4.png',
        'images/card_5.png',
        'images/card_6.png',
        'images/card_7.png',
        'images/card_8.png',
        'images/card_9.png',
        'images/card_10.png',
        'images/card_11.png',
        'images/card_12.png',
        'images/card_13.png',
        'images/card_14.png',
        'images/card_15.png',
        'images/card_16.png',
        'images/card_17.png',
        'images/card_18.png',
        'images/card_19.png',
        'images/card_20.png',
        'images/card_21.png',
        'images/card_22.png',
        'images/card_23.png',
        'images/card_24.png'
    ];

    // Preload images and display them in the 'cards' div
    preloadImages(imagePaths, function () {
        // Set default values for player name and number of cards
        const defaultPlayerName = "Krunal_Default";
        const defaultNumCards = 48;

        // Load player name from session storage or use default
        const savedSettings = sessionStorage.getItem("memoryGameSettings")
            ? JSON.parse(sessionStorage.getItem("memoryGameSettings"))
            : { playerName: defaultPlayerName, numCards: defaultNumCards };

        $("#player_name").val(savedSettings.playerName);
        $("#num_cards").val(savedSettings.numCards);

        // Update the player name display
        updatePlayerNameDisplay();

        // Update the card layout
        updateCardLayout(savedSettings.numCards);
    });

    // Function to update card layout
function updateCardLayout(numCards) {
    // Clear existing cards
    const cardsDiv = $("#cards");
    cardsDiv.empty();

    // Randomly shuffle the image paths
    const shuffledImagePaths = shuffleArray(imagePaths);

    // Calculate rows and columns
    const numRows = Math.ceil(numCards / 8);
    
    // Generate the card elements and append them to the row divs
    for (let row = 0; row < numRows; row++) {
        const rowDiv = $("<div>").addClass("card-row");
        
        for (let col = 0; col < 8; col++) {
            const cardIndex = row * 8 + col;
            const img = $("<img>").attr("src", "images/back.png").addClass("card-image");
            rowDiv.append(img);
        }

        cardsDiv.append(rowDiv);
    }

    // Add event handlers to the images
    $(".card-image").on("click", function() {
        const img = $(this);
        const currentSrc = img.attr("src");

        // Toggle between original image and "back" image
        if (currentSrc === "images/back.png") {
            img.attr("src", shuffledImagePaths[img.index() % shuffledImagePaths.length]);
        } else {
            img.attr("src", "images/back.png");
        }
    });
}

    // Function to update player name display
    function updatePlayerNameDisplay() {
        const playerName = sessionStorage.getItem("memoryGameSettings")
            ? JSON.parse(sessionStorage.getItem("memoryGameSettings")).playerName
            : "";

        $("#player").text("Player: " + playerName);
    }

    // Load player name from session storage on page load
    updatePlayerNameDisplay();

    // Handle Save Settings button click
    $("#save_settings").click(function () {
        const playerName = $("#player_name").val();
        const numCards = parseInt($("#num_cards").val(), 10);

        // Save settings in session storage
        saveSettingsToSessionStorage(playerName, numCards);

        // Update the player name and card layout
        updatePlayerNameDisplay();
        updateCardLayout(numCards);

        // Reload the page
        location.reload();
    });

    // Function to save settings in session storage
    function saveSettingsToSessionStorage(playerName, numCards) {
        const settings = {
            playerName: playerName,
            numCards: numCards
        };

        sessionStorage.setItem("memoryGameSettings", JSON.stringify(settings));
    }
});