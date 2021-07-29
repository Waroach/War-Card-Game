let suits = ['Spades','Diamonds','Clubs','Hearts']
let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
let deck=[],hand1=[],hand2=[]

document.querySelector('#play').addEventListener('click', Decks)
function Decks(){
    for(i=0;i<suits.length;i++){
        for(x=0;x<values.length;x++){
            let card = {Value: values[x], Suit: suits[i]}
            deck.push(card)
        }
    }
    createHands()
}

function createHands(){
    hand1 = deck.splice(26) // Clubs and Hearts
    hand2 = deck.splice(0,26) // Spades and Diamonds
    
    //NEEDS TO CHANGE Not fully working
    renderDeck(hand1)
}

function renderDeck(h){
    document.getElementById("deck").innerHTML = ""

	for(i=0;i<h.length;i++){
        console.log(h[i].Value)
        console.log(h[i].Suit)
		let card = document.createElement("div")
		let value = document.createElement("div")
		let suit = document.createElement("div")
		card.className = "card"
		value.className = "value"
		suit.className = `suit ${h[i].Suit}`

            // console.log(hand1[3].Suit)
		value.innerHTML = h[i].Value
		card.appendChild(value)
		card.appendChild(suit)

		document.getElementById("deck").appendChild(card)
	}
}




// Use Math. random() function to get the random number between(0-1, 1 exclusive).
// Multiply it by the array length to get the numbers between(0-arrayLength).
// Use Math. floor() to get the index ranging from(0 to arrayLength-1).


