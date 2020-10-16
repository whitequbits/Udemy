def fizz_buzz():
    input = range(1,51)

    for number in input:
        if number % 3 == 0 and not number % 5 == 0:
            print('Fizz')
        elif number % 5 == 0 and not number % 3 == 0:
            print ('Buzz')
        elif number % 5 == 0 and number % 3 == 0:
            print ('FizzBuzz')
        else:
            print(number)


fizz_buzz()
