the_string = 'North Dakota'

print(the_string.rjust(17))
print(the_string.ljust(17, '*'))

center_plus = the_string.center(16, '+')
print(center_plus)

print(the_string.lstrip('North'))
print(the_string.rstrip('+'))
print(the_string.strip('+'))

print(the_string.replace('North', 'South'))
