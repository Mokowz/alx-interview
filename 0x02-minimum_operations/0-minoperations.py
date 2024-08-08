#!/usr/bin/python3
""" 0-minoperations"""


def minOperations(n):
    """
    Gets fewest # of operations
    """
    # all outputs should be at least 2 char: (min, Copy All => Paste)
    if (n < 2):
        return 0
    ops, root = 0, 2
    while root <= n:
        if n % root == 0:
            ops += root
            n = n / root
            root -= 1
        root += 1
    return ops
