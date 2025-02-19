const moodButtons = document.querySelectorAll(".mood-btn");
const musicFrame = document.getElementById("music-frame");

// Mood-to-Music Mapping (Replace with your own YouTube links)
const moodMusic = {
    happy: "https://www.youtube.com/embed/d-diB65scQU", // Example: "Happy" by Pharrell Williams
    sad: "https://www.youtube.com/embed/YQHsXMglC9A",   // Example: "Someone Like You" by Adele
    energetic: "https://www.youtube.com/embed/fKopy74weus", // Example: "Believer" by Imagine Dragons
    calm: "https://www.youtube.com/embed/2X_2IdybTV0"   // Example: "Weightless" by Marconi Union
};

moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.dataset.mood;
        musicFrame.src = moodMusic[mood];
    });
});
