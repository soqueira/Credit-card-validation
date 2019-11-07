# Credit card validation

Credit card validation using [luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Strengths_and_weaknesses) that identify the name of the card
## Usage

```python
validCreditCard(creditCardName)

validCreditCard(5543076186150101) #returns MasterCard
validCreditCard(4538504036003956) #returns visa
validCreditCard(372881682660173) #returns American Express
validCreditCard(6011592901763870) #returns Discover
```
## Credit cards to test
|    MasterCard    |       Visa       | American Express |     Discover     |
|:----------------:|:----------------:|:----------------:|:----------------:|
| 5574945040412869 | 4538504036003956 | 372881682660173  | 6011592901763870 |
| 5543076186150101 | 4539830330994940 | 378096429301122  | 6011446503711557 |
| 5523724036429548 | 4716756939113704 | 340897614929832  | 6011048007089140 |
| 5291010296989797 | 4716282349611476 | 347518541294966  | 6011687338305681 |

[demo](https://codepen.io/vitor-siqueira/pen/XWWEZoO)
