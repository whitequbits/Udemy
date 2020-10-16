def sum_of_positive(positive_integer):
    counter = 1
    answer = 0
    while counter <= positive_integer:
        answer += counter
        counter += 1
    return answer



positive_integer = input('Please insert positive integer = ')
print(sum_of_positive(positive_integer))
