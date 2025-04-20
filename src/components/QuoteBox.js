import React, { useState, useEffect } from 'react';
import './QuoteBox.css';

const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "You don’t have to be perfect to be amazing.", author: "Unknown" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "We may encounter many defeats, but we must not be defeated.", author: "Maya Angelou" },
  { text: "Everything you can do or dream you can, begin it. Boldness has genius, power, and magic in it.", author: "Johann Wolfgang von Goethe" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Success doesn't come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
];

const QuoteBox = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [shuffledQuotes, setShuffledQuotes] = useState([]);

  // Function to shuffle the quotes
  const shuffleQuotes = (quotesArray) => {
    const shuffled = [...quotesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Set up the initial shuffled quotes
  useEffect(() => {
    setShuffledQuotes(shuffleQuotes(quotes));
  }, []);

  // Get the next quote
  const getNewQuote = () => {
    // Check if all quotes have been shown
    if (shuffledQuotes.length === 0) {
      setShuffledQuotes(shuffleQuotes(quotes)); // Reshuffle quotes
    } else {
      const nextQuote = shuffledQuotes[0]; // Get the first shuffled quote
      setQuoteIndex(nextQuote); // Update the current quote
      setShuffledQuotes(shuffledQuotes.slice(1)); // Remove the shown quote
    }
  };

  // Get current quote data
  const currentQuote = quoteIndex !== null ? quoteIndex : shuffledQuotes[0];

  return (
    <div className="quote-box">
      <p className="quote-text">"{currentQuote.text}"</p>
      <p className="quote-author">— {currentQuote.author}</p>
      <button className="quote-button" onClick={getNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
