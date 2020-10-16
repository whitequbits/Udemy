def reverse_string():
    the_string = input('Please input a string = ')
    reverse = ''
    for num in range(len(the_string)-1, -1, -1):
        reverse += the_string[num]

    print(reverse)


reverse_string()
