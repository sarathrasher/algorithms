# # Algorithm #1
# sum = 0
# for num in range(0, 1000):
#     if num % 3 == 0 or num % 5 == 0:
#         sum += num
# print sum


# Algorithm # 2
# num1 = 1
# num2 = 1
# num3 = 0
# sum = 0
# while num3 <= 4000000:
#     num3 = num1 + num2
#     if num3 % 2 == 0:
#         sum += num3
#     num1 = num2
#     num2 = num3
# print sum

# Algorithm # 3
import math
def is_prime(number):
    i = 2
    while i <= (number - 1):
        if number % i == 0:
            return False
        i += 1
    return True
    
def prime_factor(number):
    num = 2
    while num <= number:
        i = number / num
        if number % num == 0 and is_prime(i) == True:
            return i
        num += 1


print prime_factor(600851475143)




                        