function trainingLab(input) {
    let lenghtOnLab = Number(input[0]) * 100;
    let widhtOnLab = Number(input[1]) * 100;
    let widhtOnDesk = 70;
    let lenghtOnDesk = 120;
    let corridor = 100;
    let doorAndRostrum = 3;
    let deskCountOnOneline = Math.floor((widhtOnLab - corridor) / widhtOnDesk);
    let numberOfLines = Math.floor(lenghtOnLab / lenghtOnDesk);
    let numberOfDesksInLab = (deskCountOnOneline * numberOfLines) - doorAndRostrum;
    console.log(numberOfDesksInLab.toFixed(2));
}

trainingLab(["15", "8.9"])