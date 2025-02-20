const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "The future depends on what you do today. – Mahatma Gandhi",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
];

const btn = document.querySelector('button');

 btn.addEventListener('click', ()=>{

 const text = document.getElementById("content");  
 const index = Math.floor(Math.random()*quotes.length);
 text.textContent = quotes[index];

// Define a function named random_bg_color that generates a random RGB color and sets it as the background color of the document body.

    // Generate random values for red, green, and blue components between 0 and 255.
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // Output the generated color to the console.
    // Set the background color of the document body to the generated color.
    document.body.style.background = bgColor;

    text.style.color = bgColor;
    

// Call the random_bg_color function to set a random background color.

})

