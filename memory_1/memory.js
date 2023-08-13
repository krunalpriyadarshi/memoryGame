$(function() {
    // ::Task-1
    $("#tabs").tabs();
    
    // ::Task-2
    // Array of images
    const imageUrls = [
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
    function preloadImages(imageUrls) {
        for (const imageUrl of imageUrls) {
            const img = new Image();
            img.src = imageUrl;
        }
    }
    preloadImages(imageUrls);

    // ::Task-3
    // Default game settings
    let numCards = 48;
    let playerName = "Krunal";

    // Update settings based on user input
    $("#save_settings").click(function() {
        numCards = parseInt($("#num_cards").val());
        playerName = $("#player_name").val();
        // You can also perform validation and error handling here if needed
        updateGameSettingsUI();
    });

    // Function to update the UI based on the game settings
    function updateGameSettingsUI() {
        $("#player").text("Player: " + playerName);
        $("#num_cards").val(numCards);
    }

    // Call the function initially to set the default settings UI
    updateGameSettingsUI();        
});
