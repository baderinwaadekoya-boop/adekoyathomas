// Simple scroll animation or console log to confirm load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Thomas Hardy Portfolio Loaded Successfully.");
});

// You can add more interactive elements here as you learn JS!
function openWhatsApp(region) {
    let phoneNumber = "";
    let message = window.encodeURIComponent("Hello Thomas, I saw your portfolio and I'm interested in your AI and Automation services.");

    if (region === 'uk') {
        phoneNumber = "447474108553";
    } else if (region === 'ng') {
        phoneNumber = "2348035759848";
    }

    // Opens WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}