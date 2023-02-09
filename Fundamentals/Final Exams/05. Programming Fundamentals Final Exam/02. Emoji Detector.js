function emojiDetector(input) {
  let digitPattern = /\d+/g;
  let emojiPattern = /([:*]{2})([A-Z][a-z]{2,})\1/g;
  let text = input[0];
  let thresholdNums = [];
  let emojiArr = [];
  let fullEmojiArr = [];
  let match = digitPattern.exec(text);

  while (match != null) {
    thresholdNums.push(match[0]);
    match = digitPattern.exec(text);
  }

  let emojiMatch = emojiPattern.exec(text);
  
  while (emojiMatch != null) {
    emojiArr.push(emojiMatch[2]);
    fullEmojiArr.push(emojiMatch[0]);
    emojiMatch = emojiPattern.exec(text);
  }

  let threshold = 1;

  for (let el of thresholdNums) {
    for (let i = 0; i < el.length; i++) {
      threshold *= Number(el[i]);
    }
  }

  let result = [];

  for (let emoji of emojiArr) {
    let sumOfEmoji = 0;

    for (let k = 0; k < emoji.length; k++) {
      sumOfEmoji += emoji[k].charCodeAt(0);
    }

    if (sumOfEmoji >= threshold) {
      result.push(emoji);
    }
  }

  console.log(`Cool threshold: ${threshold}`);
  console.log(
    `${emojiArr.length} emojis found in the text. The cool ones are:`
  );

  for (let el of result) {
    for (let em of fullEmojiArr) {
      if (em.includes(el)) {
        console.log(em);
      }
    }
  }
}
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
