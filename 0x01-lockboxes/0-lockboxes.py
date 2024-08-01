#!/usr/bin/python3
"""
SImulate a lock box
"""


def canUnlockAll(boxes):
    """
     Determines if all the boxes can be opened.

    :param boxes:
    :return: True or False
    """
    if not boxes or type(boxes) is not list:
        return False

    unlck = [0]
    for n in unlck:
        for key in boxes[n]:
            if key not in unlck and key < len(boxes):
                unlck.append(key)
    if len(unlck) == len(boxes):
        return True
    return False
