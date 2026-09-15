export default function Letter({
    letter,
    onToggle,
  }) {
    //console.log(letter);
    return (
      <li className={
        letter.isStarred ? 'selected' : ''
      }>
        <label>
          <input
            type="checkbox"
            checked={letter.isStarred}
            onChange={() => {
              onToggle(letter.id);
            }}
          />
          {letter.subject}
        </label>
      </li>
    )
  }
  