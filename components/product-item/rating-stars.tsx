import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export const RatingStars = ({ howManyStars }: { howManyStars: number }) => {
  const fullStar = 0;
  const halfStar = 1;
  type StarType = typeof fullStar | typeof halfStar;

  const howManyStarsArray: StarType[] = [];

  while (howManyStars > 0) {
    if (howManyStars < 1) {
      howManyStarsArray.push(halfStar);
    } else {
      howManyStarsArray.push(fullStar);
    }

    howManyStars--;
  }

  if (Number.isInteger(howManyStars)) {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        {howManyStarsArray.map((current: StarType, index: number) => (
          <FontAwesomeIcon
            style={{ color: "rgb(249,185,80)" }}
            icon={current === fullStar ? faStar : faStarHalf}
            key={index}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}></div>
  );
};
