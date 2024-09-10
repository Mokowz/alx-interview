#!/usr/bin/python3
"""Rotate 2D Matrix"""


def rotate_2d_matrix(matrix):
    """rotate two dimension matrix 90 degrees clockwise
    """
    n = len(matrix)

    for i in range(int(n / 2)):
        y = (n - i - 1)

        for j in range(i, y):
            x = (n - 1 - j)

            # current
            tmp = matrix[i][j]

            # top to left
            matrix[i][j] = matrix[x][i]

            # left to bottom
            matrix[x][i] = matrix[y][x]

            # bottom to right
            matrix[y][x] = matrix[j][y]

            # right to top
            matrix[j][y] = tmp
