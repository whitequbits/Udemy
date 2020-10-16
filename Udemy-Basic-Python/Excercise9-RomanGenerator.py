from random import *

def roman_numeral_equivalent(numeral_number):
    matcher = {
      0 : 'Zero',
      1 : 'I',
      2 : 'II',
      3 : 'III',
      4 : 'IV',
      5 : 'V',
      6 : 'VI',
      7 : 'VII',
      8 : 'VIII',
      9 : 'IX',
      10 : 'X'
    }

    print(str(numeral_number) + ' is equal to '+ str(matcher[numeral_number]))


numeral_number = randint(1,10)
roman_numeral_equivalent(numeral_number)
