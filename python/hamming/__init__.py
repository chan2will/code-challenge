# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(str1, str2):
    if len(str1) == len(str2): #string must be the same length
        return sum(x != y for x, y in zip(str1, str2)) #iterate over and compare the chars in each string; return count of nonequal chars
    else:
        raise ValueError('The string parameter lengths are not equal')
    pass

 
