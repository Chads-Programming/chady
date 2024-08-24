import sys
import json

from solution import sum

def main():
    if len(sys.argv) < 2:
        print("No argument provided")
        return

    arg = sys.argv[1]
    try:
        arr = json.loads(arg)
        result = sum(arr[0], arr[1])
        print(result)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")

if __name__ == '__main__':
    main()