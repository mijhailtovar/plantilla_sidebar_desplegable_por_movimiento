// App.jsx
import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.jsx';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null); // Cambio: guardar ID en lugar del objeto

  function handleHover(letter) {
    setHighlightedId(letter.id); // Cambio: guardar solo el ID
  }

  //marca o desmarca articulos
  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      }
      return letter;
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedId} // Cambio: comparar IDs
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}