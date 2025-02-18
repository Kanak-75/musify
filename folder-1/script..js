const moodButtons = document.querySelectorAll(".mood-btn");
const musicFrame = document.getElementById("music-frame");

// Mood-to-Music Mapping (Corrected Embed Links)
const moodMusic = {
    happy: "",  
    sad: "",   
    energetic: "", 
    calm: ""
};

moodButtons.forEach(button => {
    button.addEventListener("click", function () {
        const mood = this.dataset.mood;
        musicFrame.src = moodMusic[mood] + "?autoplay=1";  // Auto-play music
        musicFrame.style.display = "block";  // Show the player
    });
});
