/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
// 答えの数値を2で用意
// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。

// alert('You got 5 guesses. Guess 1 to 5');
// let numbers = prompt('What do you guess?');

// let correctAnswer = [2];
// let wrongAnswer = [1, 3, 4, 5];

// for (let i = 0; i < 4; i++) {
//   if (numbers == correctAnswer) {
//     alert('Good job! See what happens next :)');
//     const image = document.getElementById('image');
//     image.innerHTML = `
//   <h1>You made it! 🎮</h1>
//   <iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA"></a></p>
// `;
//     break;
//   } else if (
//     numbers == wrongAnswer[0] ||
//     numbers == wrongAnswer[1] ||
//     numbers == wrongAnswer[2] ||
//     numbers == wrongAnswer[3]
//   ) {
//     numbers = prompt('Ops! Maybe, another try?');
//   } else {
//     numbers = prompt('Use 1 to 5 to guess an answer!');
//   }
// }

/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。
alert('You got 5 guesses. Guess 1 to 5');
let numbers = prompt('What do you guess?');

let correctAnswer = [2];
let wrongAnswer = [1, 3, 4, 5];

let i = 0;
while (i < 4) {
  if (numbers == correctAnswer) {
    alert('Good job! See what happens next :)');
    const image = document.getElementById('image');
    image.innerHTML = `
  <h1>You made it! 🎮</h1>
  <iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA"></a></p>
`;
    break;
  } else if (
    numbers == wrongAnswer[0] ||
    numbers == wrongAnswer[1] ||
    numbers == wrongAnswer[2] ||
    numbers == wrongAnswer[3]
  ) {
    numbers = prompt('Ops! Maybe, another try?');
  } else {
    numbers = prompt('Use 1 to 5 to guess an answer!');
  }
  i++;
}
