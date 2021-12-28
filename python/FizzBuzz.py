'''
Print out 100 numbers, from 1 to 100, but:
- instead of printing multiples of 3, print 'Fizz'
- instead of printing multiples of 5, print 'Buzz''
- instead of printing multiples of both 3 and 5, print 'FizzBuzz'
'''

for number in range(1, 101):
    if number % 3 == 0:
        print('Fizz')
    elif number % 5 == 0:
        print('Buzz')
    elif number % 3 == 0 and number % 5 == 0:
        print('FizzBuzz')
    else:
        print(number)
