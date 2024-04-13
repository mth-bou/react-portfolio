"use client";

export const WelcomeConsoleMessage = () => {
    if (typeof window !== 'undefined') {

        // Prevent the console message from showing up every time the page is refreshed
        const hasConsoleMessageBeenShown = localStorage.getItem('consoleMessageShown');

        if (hasConsoleMessageBeenShown) {
            console.log(
                "%cWelcome to my website !\n %cBuilt with React, Next.js, and Tailwind CSS.",
                "color: red; font-size: 20px; font-weight: bold; text-align: center;",
                "color: white; font-size: 16px; font-weight: bold; text-align: center;"
            );
        }

        localStorage.setItem('consoleMessageShown', 'true');
    }

    return null;
}
