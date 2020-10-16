# Python Basics

## Naming variable

```python
# Varibale can benamed
snake_case_sentence = 4 #commonly used
camelCase = 4

# Variable cannot be named
4calling = 4
not okay = 4
$please.avoid? = 4

```

## Type of Data

```python

#Float
float_1 = 1.232

#integer
int_1 = 7

#booleans
bool_1 = True
bool_2 = False

```

### Basic Math

```python

addition = 4+2 #6
substraction = 4-2 #2
division = 4/2 #2
multiplication = 4*2 #8

exponantiation = 4**2 #16
floor_division = 16//5 #3
modulo = 7%3 #1

```

### Assignment Operator

```python

add_assigns = 5
add_assigns +=7

```

### Operator Precedence

#### () > \*_ > %, /, // and_

### Print

```python

example_1 = 256

print(example_1) #256

```

### More about approximation Float

There is problem in python according the float number approximation
"It's due because the python itself is built on C language (limited number of the binary digit)"
=> already fix on the current python version

```python

answer = 1.23 + 2.80 #4.02999999

#better approach
answer = (123 + 280) / 100 #4.03

#to round the answer
print(round(answer)) # 4.0
print(round(answer,2)) # 4.03

```

### Strings

```python

ex_1 = 'this is me'
#or
ex_2 = "this is me"
#or
ex_3 = ""

```

#### String Method

```python

string = 'Hello Junior'

print(string.upper()) # HELLO JUNIOR
print(string.lower()) # hello junior
print(string.isupper()) # False
print(string.islower()) # False

print(string.upper().isupper()) # True

print(string.isspace()) # False
print(string.istitle()) # True
print(string.startswith("H")) # True
print(string.endswith("Junior")) # True

#join method
print("".join(["one", "two", "three"])) #onetwothree
print(" ".join(["one", "two", "three"])) #one two three

#split method
print("Eggs Milk Waffles".split) #[Eggs,Milk,Waffles]
print("Eggs,Milk,Waffles".split(",")) #[Eggs,Milk,Waffles]

#rjust, ljust, center
print('hello'.rjust(9, '-')) #----hello
print('hello'.ljust(9, '*')) #hello****
print('hello'.center(9, '*')) #**hello**

#strip,lstrip,rstrip
print('hello1111'.strip('1')) #hello
print('hello1111'.rstrip('1')) #hello
print('hello1111'.ltrip('1')) #hello1111

#replace
print('good morning'.replace('morning', 'afternoon')) #good afternoon

#len
print(len('tree')) #4

#format
name = input('Input Your Name')
age = input('Input Your Age')
hobby = input('Input Your Hobby')

print('{} is {} years old and his hobby is {}'.format(name, age, hobby)) # Bobi is 12 years old and his hobby is dancing

```

### Manipulate the String

```python

ex_1 = 'hello'
print(ex_1[2]) #l

print(apple[1]) #p

#slicing the string
print('appricote'[:2]) #app
print('appricote'[1:5]) #ppricopricote[1:5]) #pprico
print('appricote'[5:]) #ote

#concat
print('hello' + 'myname')

#type() to know data type
print(type(ex_1)) #string

#str() to convert anything to string
prints(str(1.23))

```

### Escape Sequences

```python

#tab indentation
print("hello\trobin")

#line break
print("hello\nrobin")

#double quote or single quote
print("\"hello robin\"")
print('\'hello robin\'')

#backslash
print('hello robbin\\.')

```

### Input Function

```python

name = input('please insert your name')
print('Your name is ' + name)
print(type(name))

fav_num = input('please insert your favorite number')
print('Your favorite number is ' + fav_num)
print(type(fav_num))

```

### Int Function

```python
user_int = input("Please enter an integer ")
print(user_int)
print(type(user_int)) #string

user_int = int(input("Please enter an integer "))
print(user_int)
print(type(user_int)) #int

print(int("1.59")) #error
print(int("numb3rs and $ymbol")) #error

```

### Float Function

```python
user_float = input("Please enter an float ")
print(user_float)
print(type(user_float)) #string

user_float = float(input("Please enter an float "))
print(user_float)
print(type(user_float)) #int

print(float("10 + 9")) #error
print(int("numb3rs and $ymbol")) #error

```

## Functions

"4 spaces indentation and 2 empty line after function"

```python

def function_name():
    print(2+2)


function_name() #4

```

```python

def function_name(param):
    print(param+2)


function_name(4) #6

```

```python
#default param
def function_name(param=2):
    print(param+2)


function_name(4) #6
function_name() #4

```

```python
#default param
def function_name(param=2):
    print(param+2)
    return param+2


function_name(4) #6
function_name() #4
print(function_name(3)) #5

```

### Importing Modules

First Option

```python

import random

print(random.randint(1, 10)) #create random integer between 1 => 10

```

Second Option : import individual method from module

```python

from random import randint

print(randint(1, 10)) #create random integer between 1 => 10

```

Third Option : import all from module

```python

from random import *

print(randint(1, 10)) #create random integer between 1 => 10

```

### Variable Scope

global vs local variable

```python

def function():
    variable = 2
    print("local variable = " + variable)

function() #local variable = 2

variable = 4
print("global variable = " + variable) #global variable = 2

```

```python

def function():
    local_var = 2
    print(global_var + local_var)


global_var = 4
function() #6

```

## Flow Control

### Comparisons Operator

```python

print(4 > 2) #True
print(4 < 2) #False
print(4 >= 2) #True
print(4 <= 2) #False
print(4 != 2) #True
print(4 == 2) #False

print('Hello' == 'hello') #False
print('Hello' != 'world') #True

print('Hello' == 'hello' and 4 <= 2) #False and False = False
print('Hello' != 'world' and 4 < 2) #True and False = False
print('Hello' != 'world' and 4 > 2) #True and True = True

print('Hello' == 'hello' or 4 <= 2) #False or False = False
print('Hello' != 'world' or 4 < 2) #True or False = True
print('Hello' != 'world' or 4 > 2) #True or True = True

print(not 'Hello' == 'hello') #True
print(not 'Hello' != 'world') #False

```

### If Statement

```python

input = input('Please input a word')

if input == 'world':
    print('hello world')
    if True:
        print('Hello Julia')
elif input == 'hello':
    print('come on')
else:
    print('hello bob')

```

### Truthy and Falsey

```python

string = 'hello'

if string: #string always true
    print('It\'s true')
else:
    print('It\'s false')

integer_number = 0

if integer_number: #0 always false
    print('It\'s true')
else:
    print('It\'s false')

```

## Introduction to Loops

### While Loop

```python

counter = 0

while counter < 3:
    print('counter = ' + str(counter))
    counter += 1

```

### For Loop

```python

word = 'house'

for letter in word:
    print(letter)

```

### Range

```python

one_input = range(5) #generate : 0,1,2,3,4,5

for num in one_input:
    print(num)

two_input = range(5, 10) #generate : 5,6,7,8,9

for num in two_input:
    print(num)

three_input = range(1, 20, 3) #generate : 1,4,7,11,15,19

for num in three_input:
    print(num)

three_input = range(20, 1, -3) #generate : 20,16,12,8,6,2

for num in three_input:
    print(num)

```

## Introduction to Lists

```python

lists = [1, 2, 3, 4, 5]

print(list("blah")) # [b, l, a, h]
print(1 in lists) # True
print(8 not in lists) # True

#accessing lists

indexes_examples = [[1,2,3], [4,5,6], [7,8,9]]

print(indexes_examples[0][2]) #3

negatives = [1,2,3,4,5]

print(negatives[-1]) #5
print(negatives[-2]) #4
print(negatives[-3]) #3

#del and lists method

planets = ['pluto', 'mars', 'earth', 'venus']

del planets[0]
print(planets) #['mars', 'earth', 'venus']

print(planets.remove('pluto')) #['mars', 'earth', 'venus']

pets = ['cat', 'dog', 'parrot']

pets.append('fish') #['cat', 'dog', 'parrot', 'fish']
pets.insert(1, 'fish') #['cat', 'fish', 'dog', 'parrot']

#sort method

num = [24, 5, 3, 6]

num.sort #[3, 5, 6, 24]

word = ['Ringo', 'Abdul', 'Beny']

word.sort #['Abdul', 'Beny', 'Ringo']

#index method
metals = ['cooper', 'silver', 'gold']

metals.index('cooper') #0

#pop method
end = metals.pop()
print(metals) # ['cooper', 'silver']
print(end) #gold


```
