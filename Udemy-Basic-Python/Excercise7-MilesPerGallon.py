from random import *

gallon_of_gas = randint(10,25)
miles_of_car = randint(200,400)

print("car can travel " + str(miles_of_car/gallon_of_gas))
print("with " + str(gallon_of_gas) + " gallon_of_gas")
print("and distance " + str(miles_of_car) + " miles")
