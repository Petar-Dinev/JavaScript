function cutAndReverse(string) {
  let index = string.length / 2;
  let firstHalf = "";
  let secondHalf = "";

  for (let i = index - 1; i >= 0; i--) {
    firstHalf += string[i];
  }
  for (let i = string.length - 1; i >= index; i--) {
    secondHalf += string[i];
  }

  console.log(firstHalf);
  console.log(secondHalf);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
