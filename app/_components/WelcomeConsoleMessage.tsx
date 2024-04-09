"use client"

export const WelcomeConsoleMessage = () => {
    if (typeof window !== 'undefined') {
        console.log(
            "%cWelcome to my website !\n %cBuilt with React.js, Next.js, and Tailwind CSS.",
            "color: red; font-size: 20px; font-weight: bold; text-align: center;",
            "color: white; font-size: 16px; font-weight: bold; text-align: center;"
        );
    }

    return null;
}
