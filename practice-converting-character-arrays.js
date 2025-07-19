
//Task 1: Decode the Following Reversed Messages
//Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and arrays dynamically. Then log the messages.

// 1. Message 1: "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"

let messageOne = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";

let reversedMessageOne = messageOne.split("").reverse("").join("");

console.log(reversedMessageOne);


// 2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"

let messageTwo = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";

let reversedMessageTwo = messageTwo.split("").reverse("").join("");

console.log(reversedMessageTwo);

//3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI. lanoisseforp a ekil leef ot evah t'nod uoY"

let messageThree = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";

let reversedMessageThree = messageThree.split("").reverse("").join("");

console.log(reversedMessageThree);

//4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"

let messageFour = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

let reversedMessageFour = messageFour.split("").reverse("").join("");

console.log(reversedMessageFour);

//Task 2: Write your own reverse messages

// Messsage 5: "You will certainly experience imposter syndrome at first. The key is to just keep moving forward."

let messageFive = ".drawrof gnivom peek tsuj ot si yek ehT .tsrif ta emordnys retsopmi ecneirepxe ylniatrec lliw uoY";

let reversedMessageFive = messageFive.split("").reverse("").join("");

console.log(reversedMessageFive);

