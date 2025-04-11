// function demo(1) {
//     switch (1) {
//         case 1:
//             console.log("you chose 1");
//             break;
//         case 2:
//             console.log("you chose 2");
//             return;
//         default:
//             console.log("invalid");
//     }
//     console.log("done");
// }
// demo(1)

/////////////////////////////////////

function testFlow(n) {
  switch (n) {
    case 0:
      console.log("zero");
      return;
    case 1:
      console.log("one");
      break;
    default:
      console.log("other");
  }
      console.log("after switch");
}
testFlow(0)
testFlow(1)
testFlow(2)

///////////////////////////////////

