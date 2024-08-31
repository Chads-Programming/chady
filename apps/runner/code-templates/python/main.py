import sys
import json

from write import write
from solution import sum

def main():
    if len(sys.argv) < 2:
        print("No argument provided")
        return

    arg = sys.argv[1]
    try:
        arr = json.loads(arg)

        write(lambda arr: sum(arr[0], arr[1]), arr)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")

if __name__ == '__main__':
    main()
