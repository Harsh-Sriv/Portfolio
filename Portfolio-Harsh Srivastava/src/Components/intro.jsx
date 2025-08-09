import { useEffect, useState } from 'react';
import '../CSS/intro.css'; // Import the CSS file for styling

// No need for the import from Home.css here
// import '../pages/Home'; // REMOVE THIS LINE

function Intro() {
    const phrases = ["Harsh Srivastava", "a Web Developer", "A Problem Solver"]; // Added "a" for better grammar
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timeout;

        if (!isDeleting && charIndex === currentPhrase.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
                setTypingSpeed(50);
            }, 2000); // Increased pause to 2 seconds
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setTypingSpeed(150);
            }, 500); // Increased pause before typing next
        } else {
            timeout = setTimeout(() => {
                const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
                setText(currentPhrase.substring(0, updatedCharIndex));
                setCharIndex(updatedCharIndex);
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex, typingSpeed, phrases]);

    return (
        // Added a span for the blinking cursor
        <h1 className="intro-text">
            I am <span className="role">{text}</span>
        </h1>
    );
}

export default Intro;