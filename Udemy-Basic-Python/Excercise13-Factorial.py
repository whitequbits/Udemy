def factorial(input):
    answer = 1
    input = range(1, input+1)
    for num in input:
      answer *= num
    
    return answer

input = input('Please insert int = ')
print('factorial of ' + str(input) + ' is ' + str(factorial(input)))
