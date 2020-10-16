def grade_determiner(score):
    if score >= 90:
      print('Your Grade is A')
    elif 90 > score >= 80:
      print('Your Grade is B')
    elif 80 > score >= 70:
      print('Your Grade is C')
    elif 70 > score >= 60:
      print('Your Grade is D')
    elif 60 > score:
      print('Your Grade is F')


score = input('Please insert your score = ')

grade_determiner(score)
