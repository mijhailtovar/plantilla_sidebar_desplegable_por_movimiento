// Letter.jsx - Optimizado
export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}) {
  return (
    <li
      className={isHighlighted ? 'highlighted' : ''}
      onMouseEnter={() => onHover(letter)} // Cambio: solo un evento de hover
    >
      <button onClick={() => onToggleStar(letter)}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  );
}