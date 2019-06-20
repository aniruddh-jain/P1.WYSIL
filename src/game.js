class Game {
  constructor() {
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    // Color for rows
    // 4B7C8C, #E47F7B, EAC949, 7F949E, 84BCBE
    // Now we create special points in the row and column matrix which will mark the following:
    // Selection Deck, Shortlist Deck, Finalist Deck.

    // Defining all selection grids.

    console.log(shuffleDeck);

    for (let i = 1; i <= 7; i++) {
      this.grid[1][i] = {
        color: "#EAC949", //84BCBE
        type: "selection",
        card: shuffleDeck[i - 1]
      };
    }
    // for (let i = 3; i <= 5; i++) {
    //   this.grid[4][i] = {
    //     color: "#EAC949",
    //     type: "shortlist"
    //   };
    // }
    for (let i = 1; i <= 7; i++) {
      this.grid[6][i] = {
        color: "#E47F7B",
        type: "finalist"
      };
    }

    // Naming the the Decks

    this.grid[2][4] = {
      color: "#EAC949",
      type: "selection",
      carddeck: new Cards("SELECTION")
    };

    // this.grid[3][4] = {
    //   color: "#EAC949",w
    //   type: "shortlist",
    //   carddeck: new Cards("SHORTLIST")
    // };

    this.grid[5][4] = {
      color: "#E47F7B",
      type: "finalist",
      carddeck: new Cards("     FINAL")
    };
  }

  setup() {}

  draw() {
    this.grid.forEach(function(row, rowIdx) {
      row.forEach(function(column, columnIdx) {
        // this.grid.forEach((row, rowIdx) => {
        //     row.forEach((column, columnIdx) => {
        // code
        //     }
        // }

        //// Draw a square with rounded corners, each having a radius of 20.
        //square(30, 20, 55, 20);

        fill(column.color || "white");
        // circle(columnIdx * 200 + 50, rowIdx * 200 + 50, 100);
        if (column.type === "selection") {
          square(columnIdx * 200, rowIdx * 200, WIDTH / 10, 20);
        } else if (column.type === "shortlist") {
          square(columnIdx * 200, rowIdx * 200, WIDTH / 10, 20);
        } else if (column.type === "finalist") {
          square(columnIdx * 200, rowIdx * 200, WIDTH / 10, 20);
        }

        if (column.carddeck) {
          fill(0);
          textSize(32);
          text(column.carddeck.text, columnIdx * 200, rowIdx * 200 + 100);
        } else if (column.card) {
          push();
          fill(0);
          textSize(16);
          text(column.card.text, columnIdx * 200 + 30, rowIdx * 200 + 100);
          textAlign(CENTER, RIGHT);
          pop();
        }
      });
    });

    // for (let x = 0; x <= WIDTH; x += WIDTH / 10) {
    //   line(x, 0, x, height);
    // }
    // for (let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
    //   line(0, y, WIDTH, y);
    // }
    // }
    // this.grid.forEach(function(row, rowIdx) {
    //   row.forEach(function(column, columnIdx) {
    //     console.log(column);
    //   });
    // });
  }

  mousePressed() {
    console.log("mouse pressed: ", mouseX / 200, mouseY / 200);
  }

  mouseReleased() {
    console.log("mouse released: ", mouseX, mouseY);
  }
}
