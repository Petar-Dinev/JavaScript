function tradeCommissions(input) {
  const town = input[0];
  const sells = Number(input[1]);
  let commission = 0;

  switch (town) {
    case "Sofia":
      if (sells >= 0 && sells <= 500) {
        commission = (sells * 5) / 100;
      } else if (sells > 500 && sells <= 1000) {
        commission = (sells * 7) / 100;
      } else if (sells > 1000 && sells <= 10000) {
        commission = (sells * 8) / 100;
      } else if (sells > 10000) {
        commission = (sells * 12) / 100;
      } else {
        console.log("error");
      }
      break;
    case "Varna":
      if (sells >= 0 && sells <= 500) {
        commission = (sells * 4.5) / 100;
      } else if (sells > 500 && sells <= 1000) {
        commission = (sells * 7.5) / 100;
      } else if (sells > 1000 && sells <= 10000) {
        commission = (sells * 10) / 100;
      } else if (sells > 10000) {
        commission = (sells * 13) / 100;
      } else {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (sells >= 0 && sells <= 500) {
        commission = (sells * 5.5) / 100;
      } else if (sells > 500 && sells <= 1000) {
        commission = (sells * 8) / 100;
      } else if (sells > 1000 && sells <= 10000) {
        commission = (sells * 12) / 100;
      } else if (sells > 10000) {
        commission = (sells * 14.5) / 100;
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
  if (commission > 0) {
    console.log(commission.toFixed(2));
  }
}
