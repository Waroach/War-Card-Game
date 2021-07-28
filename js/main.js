let suits = ['Spades','Diamonds','Clubs','Hearts']
let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']

function makeDecks(){
    let deck = new Array()

    for(i=0;i<suits.length;i++){
        for(x=0;x<values.length;x++){
            let card = {Value: values[x], Suit: suits[i]}
            deck.push(card)
        }
    }
    //console.log(deck)
    let hand1 = deck.splice(26)
    let hand2 = deck.splice(0,26)
    console.log(hand1)
    console.log(hand2)
}


function renderDeck(deck){
    document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}


makeDecks()




// Use Math. random() function to get the random number between(0-1, 1 exclusive).
// Multiply it by the array length to get the numbers between(0-arrayLength).
// Use Math. floor() to get the index ranging from(0 to arrayLength-1).


