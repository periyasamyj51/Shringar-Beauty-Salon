export function renderAnimatedLetters(lines, slideIndex) {
  let offset = 0;

  return lines.map((line, lineIndex) => {
    const letters = Array.from(line).map((character, characterIndex) => {
      const delay = offset + characterIndex * 45;

      if (character === ' ') {
        return (
          <span
            aria-hidden="true"
            className="hero-letter hero-letter-space"
            key={`${slideIndex}-${lineIndex}-${characterIndex}-space`}
          >
            {' '}
          </span>
        );
      }

      return (
        <span
          aria-hidden="true"
          className="hero-letter"
          key={`${slideIndex}-${lineIndex}-${characterIndex}-${character}`}
          style={{ animationDelay: `${delay}ms` }}
        >
          {character}
        </span>
      );
    });

    offset += line.length * 45 + 140;

    return (
      <span className="hero-line" key={`${slideIndex}-${lineIndex}`}>
        {letters}
      </span>
    );
  });
}

export function renderAnimatedSentence(text, slideIndex) {
  return Array.from(text).map((character, characterIndex) => {
    if (character === ' ') {
      return (
        <span
          aria-hidden="true"
          className="hero-service-letter hero-service-space"
          key={`service-${slideIndex}-${characterIndex}-space`}
        >
          {' '}
        </span>
      );
    }

    return (
      <span
        aria-hidden="true"
        className="hero-service-letter"
        key={`service-${slideIndex}-${characterIndex}-${character}`}
        style={{ animationDelay: `${characterIndex * 26}ms` }}
      >
        {character}
      </span>
    );
  });
}