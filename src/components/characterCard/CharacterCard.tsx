function CharacterCard(props: { name: string; photo: string }) {
  return (
    <div className="character-card">
      {props.photo ? (
        <img
          className="character-card__img"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.photo}`}
          alt={`${props.name || "The actor"}'s photo`}
        />
      ) : (
        // In case the character doesn't have a poster image, render a gray-scaled div instead.
        <div
          className="character-card__img"
          title={`${props.name || "The actor"}'s photo`}
        ></div>
      )}

      <div className="character-card__data">
        <div className="character-card__title">{props.name}</div>
      </div>
    </div>
  );
}

export default CharacterCard;
