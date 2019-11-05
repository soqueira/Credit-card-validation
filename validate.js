function validCreditCard(value) {
    // accept only digits
    rgx = new RegExp(/[^\d]/, 'ig')
    if (rgx.test(value)) return false;

    // luhn algorithm
    let numCheck = 0,
        bEven = false;
    value = value.toString().replace(new RegExp(/\D/g, ""));
    for (let n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n),
            digit = parseInt(cDigit, 10);
            
        if (bEven && (digit *= 2) > 9) digit -= 9;
        numCheck += digit;
        bEven = !bEven;
    }
    if (numCheck % 10 === 0) {
        GetCardType(value);
    } else {
        console.log('invalid card number');
    }

}
//identify card type
function GetCardType(number) {
    let regx = [
        { name: 'Visa', pattern: /^4/ },
        { name: 'Hipercard', pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/ },
        { name: 'MasterCard', pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/ },
        { name: 'Discover', pattern: /^(6011|65|64[4-9]|622)/ },
        { name: 'Elo', pattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/},
        { name: 'American Express', pattern: /^3[47]\d{13,14}$/}
    ]
    regx.forEach((item) => {
        if (number.match(item.pattern) != null) {
            console.log(item.name)
        }
    })
}
validCreditCard(4538504036003956) 