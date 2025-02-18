const moodButtons = document.querySelectorAll(".mood-btn");
const musicFrame = document.getElementById("music-frame");

// Mood-to-Music Mapping (Corrected Embed Links)
const moodMusic = {
    happy: "https://www.youtube.com/embed/BWczaSneA0Q",  
    sad: "https://www.youtube.com/embed/KtlgYxa6BMU",   
    energetic: "https://www.youtube.com/embed/739A3tJnq8g", 
    calm: "https://www.youtube.com/embed/41IaR01vEb0"
};

moodButtons.forEach(button => {
    button.addEventListener("click", function () {
        const mood = this.dataset.mood;
        musicFrame.src = moodMusic[mood] + "?autoplay=1";  // Auto-play music
        musicFrame.style.display = "block";  // Show the player
    });
});
