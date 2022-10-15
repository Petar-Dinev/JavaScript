function deckOfCards(cards) {
    function createdCards(face, suit) {
        let faces = [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
          "A",
        ];
        let suits = {
          S: "\u2660 ",
          H: "\u2665 ",
          D: "\u2666",
          C: "\u2663",
        };
      
        if (faces.includes(face) == false) {
          throw new Error("Invalid face: " + face);
        }
      
        if (suits[suit] == undefined) {
          throw new Error("Invalid suit: " + suit);
        }
      
        let result = {
          face,
          suit: suits[suit],
          toString() {
            return this.face + result.suit;
          },
        };
      
        return result;
    }
    let result = [];
    for(let cardAsString of cards) {
        let face = cardAsString.slice(0,-1);
        let suit = cardAsString.slice(-1);
        let card;
        try {
         card = createdCards(face, suit);
         result.push(card);
        } catch (err) {
            console.log("Invalid card: " + cardAsString);
            result = [""];
        }
    }
    console.log(result.join(" "))
}


deckOfCards(['AS', '10D', 'KH', '1C']);