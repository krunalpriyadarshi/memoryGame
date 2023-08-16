// Create a settings object for the memory game
const memoryGameSettings = {
    // Accessor property to get and set the player name
    get playerName() {
        const savedSettings = sessionStorage.getItem("memoryGameSettings");
        if (savedSettings) {
            return JSON.parse(savedSettings).playerName;
        } else {
            return "Krunal_Default"; // Default player name
        }
    },
    set playerName(name) {
        const settings = JSON.parse(sessionStorage.getItem("memoryGameSettings")) || {};
        settings.playerName = name;
        sessionStorage.setItem("memoryGameSettings", JSON.stringify(settings));
    },

    // Accessor property to get and set the number of images
    get numCards() {
        const savedSettings = sessionStorage.getItem("memoryGameSettings");
        if (savedSettings) {
            return JSON.parse(savedSettings).numCards;
        } else {
            return 48; // Default number of images
        }
    },
    set numCards(num) {
        const settings = JSON.parse(sessionStorage.getItem("memoryGameSettings")) || {};
        settings.numCards = num;
        sessionStorage.setItem("memoryGameSettings", JSON.stringify(settings));
    }
};

// Export the settings object
export default memoryGameSettings;
