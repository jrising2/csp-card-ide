
var playingCardController = (function () {
    var hand = [];
    var cardDeck = $("#cardDeck").playingCards();
    var cardHand = $("#cardHolder");

    init();

    return {

    };

    function init(){
        var card1 = cardDeck.draw();
        var card2 = cardDeck.draw();
        var card3 = cardDeck.draw();
        var card4 = cardDeck.draw();
        var card5 = cardDeck.draw();
        var card6 = cardDeck.draw();
        var card7 = cardDeck.draw();

        hand.push(card1);
        hand.push(card2);
        hand.push(card3);
        hand.push(card4);
        hand.push(card5);
        hand.push(card6);
        hand.push(card7);

        showHand();
    }

    function showHand(){
        var el = cardHand.html('');
        for(var i=0;i<hand.length;i++){
            el.append(hand[i].getHTML());
        }
    }
})();
