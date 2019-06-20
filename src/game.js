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
    this.finalistArr = [];
  }

  setup() {
    for (let i = 1, c = 0; i <= 6; i++) {
      for (let j = 1; j <= 7; j++, c++) {
        if (
          (j === 3 && i === 3) ||
          (j === 4 && i === 3) ||
          (j === 5 && i === 3) ||
          (j === 3 && i === 4) ||
          (j === 4 && i === 4) ||
          (j === 5 && i === 4)
        )
          continue;
        else {
          this.grid[i][j] = {
            color: "#EAC949", //84BCBE
            type: "selection",
            card: shuffleDeck[c]
          };
          this.grid[i][j].card.row = i;
          this.grid[i][j].card.col = j;
        }
      }
    }
    console.log(this.grid);
  }

  draw() {
    this.grid.forEach(function(row, rowIdx) {
      row.forEach(function(column, columnIdx) {
        fill(column.color || "white");
        // circle(columnIdx * 200 + 50, rowIdx * 200 + 50, 100);
        if (column.type === "selection") {
          square(columnIdx * 100, rowIdx * 100, WIDTH / 10, 20);
          stroke(127, 63, 120);
        } else if (column.type === "shortlist") {
          square(columnIdx * 100, rowIdx * 100, WIDTH / 10, 20);
        } else if (column.type === "finalist") {
          square(columnIdx * 100, rowIdx * 100, WIDTH / 10, 20);
        }

        if (column.carddeck) {
          fill(0);
          textSize(32);
          text(column.carddeck.text, columnIdx * 100 + 30, rowIdx * 100 + 30);
        } else if (column.card) {
          push();
          fill(0);
          textSize(10);
          text(column.card.text, columnIdx * 100 + 30, rowIdx * 100 + 30);
          // textAlign(CENTER, RIGHT);
          pop();
        }
      });
    });
  }

  mousePressed() {
    let gridX = Math.floor(mouseX / 100);
    let gridY = Math.floor(mouseY / 100);
    // console.log(this.grid);

    console.log(gridX, gridY);
    if (!this.grid[gridY][gridX]) {
      return;
    }

    this.grid[gridY][gridX].color = "#DF3B57";
    this.grid[gridY][gridX].type = "finalist";
    // console.log(this.grid[gridX][gridY]);
    var g = this.grid[gridY][gridX];
    var a = [];
    this.finalistArr.push(g);

    console.log(this.finalistArr);
  }

  drawCharts() {
    var ctx = document.getElementById("myChart").getContext("2d");

    let sumAcc = 0;
    let sumUtil = 0;
    let sumPassi = 0;
    let sumPres = 0;

    this.finalistArr.forEach(function(card) {
      sumAcc += card.card.accomodating;
      sumUtil += card.card.utility;
      sumPassi += card.card.passion;
      sumPres += card.card.externality;
    });

    const obj = {
      type: "radar",
      data: {
        labels: ["Accomodating", "Utility", "Passion", "Externality"],
        datasets: [
          {
            label: "Choice",
            data: [sumAcc, sumUtil, sumPassi, sumPres],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };

    var myChart = new Chart(ctx, obj);
  }
}
