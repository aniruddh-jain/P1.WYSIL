class Timer {
  constructor() {
    this.seconds = 180;
  }

  draw() {
    // textAlign(CENTER, CENTER);
    textSize(50);
    text(this.seconds, WIDTH / 1.2, HEIGHT / 12);

    // while (timer > 0) {  // this doesn't work because it's all happening at the same time
    //   timer --;
    // }

    // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
    // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
    // this can be used to determine if the number on the left is divisible by the number on the right

    if (frameCount % 60 == 0 && this.seconds > 0) {
      // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      this.seconds--;
    }
  }
}
