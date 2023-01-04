function extractFile(str) {
  let result = str.split("\\").pop();
  let tokens = result.split(".");
  let extension = tokens.pop();
  let filename = tokens.join(".");

  console.log(`File name: ${filename}`);
  console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
