import React from "react";

export const CardBody = ({ position, setSelectedCard, selectedCard }) => {
  return (
    <td key={position} onClick={() => setSelectedCard(position)}>
      {position === selectedCard ? "up" : "down"}
    </td>
  );
};

export const Cards = ({ amount }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const cardList = [...new Array(amount).keys()];

  return (
    <div>
      <table>
        <th>
          <h3>cards</h3>
        </th>
        <tbody>
          <tr>
            {cardList.map((cardNum) => (
              <CardBody
                key={cardNum}
                position={cardNum}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
