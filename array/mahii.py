# Python3 program for the above approach
import math
 
def checkperfectsquare(x):
     
    # If ceil and floor are equal
    # the number is a perfect
    # square
    if (math.ceil(math.sqrt(n)) ==
       math.floor(math.sqrt(n))):
        print("perfect square")
    else:
        print("not a perfect square")
     
# Driver code
n = 49
  
checkperfectsquare(n)
 