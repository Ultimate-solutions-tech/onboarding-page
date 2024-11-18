let loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";

    // Add a delay before hiding the loader (e.g., 2 seconds)
setTimeout(function() {
loader.style.display = "none";
}, 10000); // 5000 milliseconds = 5 seconds

}); // End of window.addEventListener("load") event listener


         // onboarding

    document.addEventListener("DOMContentLoaded", () => {
        const steps = document.querySelectorAll(".onboarding-step");
        const nextButtons = document.querySelectorAll(".next-btn");
        const finishButton = document.querySelector(".finish-btn");

        let currentStep = 0;

        // Function to update the active step
        const updateActiveStep = () => {
            steps.forEach((step, index) => {
                step.classList.toggle("active", index === currentStep);

                const indicators = step.querySelectorAll(".indicator-dot");
                indicators.forEach((dot, dotIndex) => {
                    dot.classList.toggle("active", dotIndex === currentStep);
                });
            });
        };

        // Event listener for "Next" buttons
        nextButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateActiveStep();
                }
            });
        });

        // Event listener for "Finish" button
        // Event listener for "Finish" button
        if (finishButton) {
            finishButton.addEventListener("click", () => {
        // Redirect to the main page
        window.location.href = "https://afriplantt-identifier.vercel.app/"; // Update this to your actual main page path
    });
}

// Initialize the active step
updateActiveStep();


        // Initialize the active step
        updateActiveStep();
    });

   