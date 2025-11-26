// oop - abstractiuon
//idea
// implementation pore krbo
//interface
//abstract class

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }
// // implementation
// class Musicplayyer implements MediaPlayer {
//   play(): void {
//     console.log("playing music ....");
//   }
//   pause(): void {
//     console.log("Music paused...");
//   }
//   stop(): void {
//     console.log("Music stop...");
//   }
// }
// const MezbaPlayer = new Musicplayyer(); //instance toiri kre krse
// MezbaPlayer.play();

//or

// abstract
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
class MezbaPlayer extends MediaPlayer {
  play(): void {
    console.log("playing music ....");
  }
  pause(): void {
    console.log("Music is paused...");
  }
  stop(): void {
    console.log("Music is  stop...");
  }
}
const MezbaPlayer1 = new MezbaPlayer();
MezbaPlayer1.stop();
