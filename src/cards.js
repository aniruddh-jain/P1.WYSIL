class Cards {
  constructor(t, id, ext, util, passi, acc) {
    this.text = t;
    this.id = id;
    this.externality = ext;
    this.utility = util;
    this.passion = passi;
    this.accomodating = acc;
  }
}

let card1 = new Cards("Reserved", 1, 1, 1, 3, 4);
let card2 = new Cards("Straight Laced", 2, 3, 1, 1, 5);
let card3 = new Cards("A bit right wing", 3, 3, 3, 3, 3);
let card4 = new Cards("Messy House", 4, 1, 1, 1, 5);
let card5 = new Cards("Exciting", 5, 3, 5, 5, 2);
let card6 = new Cards("Traumatic Childhood", 6, 2, 1, 3, 4);
let card7 = new Cards("Underachiever", 7, 3, 5, 4, 2);
let card8 = new Cards("Bit too fat", 8, 1, 3, 4, 5);
let card9 = new Cards("A bit burnt out", 9, 2, 2, 4, 4);
let card10 = new Cards("Well mannered", 10, 5, 5, 3, 1);
let card11 = new Cards("Threesomes are great", 11, 3, 3, 4, 4);
let card12 = new Cards("Bob Marley", 12, 3, 3, 3, 3);
let card13 = new Cards("Culture Vulture", 13, 3, 4, 4, 3);
let card14 = new Cards("Neglected Sibling", 14, 2, 3, 3, 4);
let card15 = new Cards("Ironic", 15, 3, 3, 4, 4);

let arraycards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15
  // ,
  // card16,
  // card17,
  // card18,
  // card19,
  // card20,
  // card21,
  // card22,
  // card23,
  // card24,
  // card25,
  // card26,
  // card27,
  // card28,
  // card29,
  // card30,
  // card31,
  // card32,
  // card33,
  // card34,
  // card35,
  // card36,
  // card37,
  // card38,
  // card39,
  // card40,
  // card41,
  // card42,
  // card43,
  // card44,
  // card45,
  // card46,
  // card47,
  // card48,
  // card49,
  // card50,
  // card51,
  // card52,
  // card53,
  // card54,
  // card55,
  // card56,
  // card57,
  // card58,
  // card59,
  // card60,
  // card61,
  // card62,
  // card63,
  // card64,
  // card65,
  // card66,
  // card67,
  // card68,
  // card69,
  // card70,
  // card71,
  // card72,
  // card73,
  // card74,
  // card75,
  // card76,
  // card77,
  // card78,
  // card79,
  // card80,
  // card81,
  // card82,
  // card83,
  // card84,
  // card85,
  // card86,
  // card87,
  // card88,
  // card89,
  // card90,
  // card91,
  // card92,
  // card93,
  // card94,
  // card95,
  // card96,
  // card97,
  // card98,
  // card99,
  // card100,
  // card101,
  // card102,
  // card103,
  // card104
];

function shuffleCards(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr -= 1;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

let shuffleDeck = shuffleCards(arraycards);
