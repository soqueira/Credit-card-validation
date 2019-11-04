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
        { name: 'Visa', re: '^4' },
        { name: 'American Express', re: '^(34|37)' },
        { name: 'MasterCard', re: '^5[1-5]' },
        { name: 'Discover', re: '^6011' }
    ]
    regx.forEach((item) => {
        if (number.match(item.re) != null) {
            console.log(item.name)
        }
    })
}