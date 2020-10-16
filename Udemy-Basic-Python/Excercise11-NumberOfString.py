def number_of_string(string):
    counter = 0
    for letter in string:
        counter += 1
    return counter

string = input('Insert a sentence = ')
print(string)
print(number_of_string(string))
