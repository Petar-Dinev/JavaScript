function theatrePromotions(day, age) {
    let price = 0;
    if(age < 0 || age > 122) {
        console.log('Error!');
    } else {
        switch(day) {
            case 'Weekday':
                if((age >= 0 && age <= 18) ||(age > 64 && age <= 122)) {
                    price = 12;
                } else {
                    price = 18;
                }
                break;
            case 'Weekend':
                if((age >= 0 && age <= 18) ||(age > 64 && age <= 122)) {
                    price = 15;
                } else {
                    price = 20;
                }
                break;
            case 'Holiday':
                if(age >= 0 && age <= 18) {
                    price = 5;
                } else if (age > 64 && age <= 122) {
                    price = 10;
                } else {
                    price = 12;
                }
                break;
        }
    }
    console.log(price + $);
}

theatrePromotions('Weekday', 
42
)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)