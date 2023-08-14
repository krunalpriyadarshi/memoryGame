$(function () {
    // ::Task-1
    $("#tabs").tabs();

    
    // ::Task-2
    const imagePaths = [
        'images/back.png',
        'images/blank.png',
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

    
    // ::Task-3
    // Preload images and display them in the 'cards' div
    preloadImages(imagePaths, function () {
        // Get the cards div
        const cardsDiv = $("#cards");

        // Generate the card elements and append them to the cardsDiv
        for (let i = 0; i < imagePaths.length; i++) {
            const img = $("<img>").attr("src", imagePaths[i]);
            cardsDiv.append(img);
        }

        // Set default number of cards
        const defaultNumCards = 48;
        updateCardLayout(defaultNumCards);
    });

    // Function to update card layout
    function updateCardLayout(numCards) {
        const cardsDiv = $("#cards");
        cardsDiv.empty();
        const rows = Math.ceil(numCards / 8);

        // Generate the card elements and append them to the cardsDiv
        for (let i = 0; i < numCards; i++) {
            const img = $("<img>").attr("src", imagePaths[i % 24]);
            cardsDiv.append(img);
        }
    }

    
    // ::Task-4
    // Handle Save Settings button click
    $("#save_settings").click(function() {
        const playerName = $("#player_name").val();
        const numCards = parseInt($("#num_cards").val(), 10);

        // Save player name and number of cards to session storage
        sessionStorage.setItem("playerName", playerName);
        sessionStorage.setItem("numCards", numCards);

        // Reload the page to apply the saved settings
        location.reload();
    });

    // Check if playerName and numCards are stored in session storage
    const savedPlayerName = sessionStorage.getItem("playerName");
    const savedNumCards = sessionStorage.getItem("numCards");

    // Display saved player name and numCards
    if (savedPlayerName) {
        $("#player_name").val(savedPlayerName);
    }
    if (savedNumCards) {
        $("#num_cards").val(savedNumCards);
    }
});