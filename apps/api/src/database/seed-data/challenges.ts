export default [
  {
    title: 'Palindrome Checker',
    description:
      'Write a function that checks whether a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.\n\n### Example\n\n```plaintext\nInput: "racecar"\nOutput: true\n\nInput: "hello"\nOutput: false\n\nInput: "A man, a plan, a canal, Panama"\nOutput: true\n```\n\n### Notes\n\n- Ignore non-alphanumeric characters.\n- Treat uppercase and lowercase letters as equivalent.',
    difficulty: 'easy',
    test_cases: [
      {
        input: ['racecar'],
        output: true,
      },
      {
        input: ['hello'],
        output: false,
      },
      {
        input: ['A man, a plan, a canal, Panama'],
        output: true,
      },
      {
        input: ["No 'x' in Nixon"],
        output: true,
        isSecret: true,
      },
      {
        input: ['12321'],
        output: true,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def is_palindrome(s: str) -> bool:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = is_palindrome(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function isPalindrome(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return isPalindrome(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Fibonacci Sequence',
    description:
      'Write a function that returns the n-th number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers where the next number is the sum of the previous two, starting with 0 and 1.\n\n### Fibonacci Sequence\n\n```plaintext\n0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...\n```\n\n### Example\n\n```plaintext\nInput: 6\nOutput: 8\n\nInput: 0\nOutput: 0\n\nInput: 1\nOutput: 1\n```\n\n### Notes\n\n- Assume the input number `n` is a non-negative integer.\n- The sequence starts from `n=0`.',
    difficulty: 'medium',
    test_cases: [
      {
        input: [0],
        output: 0,
      },
      {
        input: [1],
        output: 1,
      },
      {
        input: [6],
        output: 8,
      },
      {
        input: [20],
        output: 6765,
        isSecret: true,
      },
      {
        input: [30],
        output: 832040,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def fibonacci(n: int) -> int:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = fibonacci(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function fibonacci(n) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return fibonacci(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Two Sum',
    description:
      'Given an array of integers and a target value, write a function to find two numbers such that they add up to the target. Return the indices of the two numbers.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n### Example\n\n```plaintext\nInput: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1]\nExplanation: 2 + 7 = 9.\n\nInput: nums = [3, 2, 4], target = 6\nOutput: [1, 2]\n```\n\n### Notes\n\n- You can return the indices in any order.\n- Assume that the input array contains at least two numbers.',
    difficulty: 'medium',
    test_cases: [
      {
        input: [[2, 7, 11, 15], 9],
        output: [0, 1],
      },
      {
        input: [[3, 2, 4], 6],
        output: [1, 2],
      },
      {
        input: [[3, 3], 6],
        output: [0, 1],
      },
      {
        input: [[1, 2, 3, 4, 5], 9],
        output: [3, 4],
        isSecret: true,
      },
      {
        input: [[-1, -2, -3, -4, -5], -8],
        output: [2, 4],
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def two_sum(nums: list[int], target: int) -> list[int]:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = two_sum(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function twoSum(nums, target) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return twoSum(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Valid Parentheses',
    description:
      "Write a function that takes a string containing only the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.\n\nA string is considered valid if:\n\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n\n### Example\n\n```plaintext\nInput: \"()\"\nOutput: true\n\nInput: \"()[]{}\"\nOutput: true\n\nInput: \"(]\"\nOutput: false\n```\n\n### Notes\n\n- The string can only contain the characters `()[]{}.`",
    difficulty: 'easy',
    test_cases: [
      {
        input: ['()'],
        output: true,
      },
      {
        input: ['()[]{}'],
        output: true,
      },
      {
        input: ['(]'],
        output: false,
      },
      {
        input: ['{[()]}'],
        output: true,
        isSecret: true,
      },
      {
        input: ['[{)]'],
        output: false,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def is_valid_parentheses(s: str) -> bool:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = is_valid_parentheses(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function isValidParentheses(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return isValidParentheses(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    description:
      'Given a string, write a function to find the length of the longest substring without repeating characters.\n\n### Example\n\n```plaintext\nInput: "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n\nInput: "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n\nInput: "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\n```\n\n### Notes\n\n- You should return the length of the longest substring, not the substring itself.\n- The function should handle a mix of uppercase and lowercase letters.',
    difficulty: 'hard',
    test_cases: [
      {
        input: ['abcabcbb'],
        output: 3,
      },
      {
        input: ['bbbbb'],
        output: 1,
      },
      {
        input: ['pwwkew'],
        output: 3,
      },
      {
        input: ['abcdefghijklmnopqrstuvwxyz'],
        output: 26,
        isSecret: true,
      },
      {
        input: ['aab'],
        output: 2,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def length_of_longest_substring(s: str) -> int:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = length_of_longest_substring(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function lengthOfLongestSubstring(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return lengthOfLongestSubstring(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Roman to Integer',
    description:
      'Write a function that converts a Roman numeral to an integer. Roman numerals are represented by the following symbols:\n\n```plaintext\nI = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000\n```\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`.\n\n### Example\n\n```plaintext\nInput: "III"\nOutput: 3\n\nInput: "IV"\nOutput: 4\n\nInput: "IX"\nOutput: 9\n```\n\n### Notes\n\n- The input will always be a valid Roman numeral.',
    difficulty: 'easy',
    test_cases: [
      {
        input: ['III'],
        output: 3,
      },
      {
        input: ['IV'],
        output: 4,
      },
      {
        input: ['IX'],
        output: 9,
      },
      {
        input: ['LVIII'],
        output: 58,
        isSecret: true,
      },
      {
        input: ['MCMXCIV'],
        output: 1994,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def roman_to_integer(s: str) -> int:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = roman_to_integer(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function romanToInteger(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return romanToInteger(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Integer to Roman',
    description:
      'Write a function that converts an integer to a Roman numeral. Roman numerals are represented by the following symbols:\n\n```plaintext\nI = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000\n```\n\n### Example\n\n```plaintext\nInput: 3\nOutput: "III"\n\nInput: 4\nOutput: "IV"\n\nInput: 9\nOutput: "IX"\n```\n\n### Notes\n\n- The input will always be within the range 1 to 3999.',
    difficulty: 'medium',
    test_cases: [
      {
        input: [3],
        output: 'III',
      },
      {
        input: [4],
        output: 'IV',
      },
      {
        input: [9],
        output: 'IX',
      },
      {
        input: [58],
        output: 'LVIII',
        isSecret: true,
      },
      {
        input: [1994],
        output: 'MCMXCIV',
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def integer_to_roman(num: int) -> str:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = integer_to_roman(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function integerToRoman(num) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return integerToRoman(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Merge Two Sorted Lists',
    description:
      'Write a function that merges two sorted linked lists into one sorted list. The function should return a new sorted list by splicing together the nodes of the two input lists.\n\n### Example\n\n```plaintext\nInput: l1 = [1,2,4], l2 = [1,3,4]\nOutput: [1,1,2,3,4,4]\n\nInput: l1 = [], l2 = []\nOutput: []\n\nInput: l1 = [], l2 = [0]\nOutput: [0]\n```\n\n### Notes\n\n- You may assume that both lists are sorted in non-decreasing order.',
    difficulty: 'easy',
    test_cases: [
      {
        input: [
          [1, 2, 4],
          [1, 3, 4],
        ],
        output: [1, 1, 2, 3, 4, 4],
      },
      {
        input: [[], []],
        output: [],
      },
      {
        input: [[], [0]],
        output: [0],
      },
      {
        input: [
          [5, 6],
          [1, 2, 7],
        ],
        output: [1, 2, 5, 6, 7],
        isSecret: true,
      },
      {
        input: [
          [-1, 0],
          [-2, 2],
        ],
        output: [-2, -1, 0, 2],
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def merge_two_sorted_lists(l1: list[int], l2: list[int]) -> list[int]:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = merge_two_sorted_lists(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function mergeTwoSortedLists(l1, l2) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return mergeTwoSortedLists(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Climbing Stairs',
    description:
      'You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\n### Example\n\n```plaintext\nInput: 2\nOutput: 2\nExplanation: There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n\nInput: 3\nOutput: 3\nExplanation: There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n```\n\n### Notes\n\n- You can assume that `n` is a positive integer.',
    difficulty: 'medium',
    test_cases: [
      {
        input: [2],
        output: 2,
      },
      {
        input: [3],
        output: 3,
      },
      {
        input: [4],
        output: 5,
      },
      {
        input: [5],
        output: 8,
        isSecret: true,
      },
      {
        input: [10],
        output: 89,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def climbing_stairs(n: int) -> int:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = climbing_stairs(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function climbingStairs(n) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return climbingStairs(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Valid Palindrome',
    description:
      'Write a function that determines if a string is a palindrome, considering only alphanumeric characters and ignoring cases.\n\n### Example\n\n```plaintext\nInput: "A man, a plan, a canal: Panama"\nOutput: true\n\nInput: "race a car"\nOutput: false\n```\n\n### Notes\n\n- For the purpose of this problem, we define empty strings as valid palindromes.',
    difficulty: 'easy',
    test_cases: [
      {
        input: ['A man, a plan, a canal: Panama'],
        output: true,
      },
      {
        input: ['race a car'],
        output: false,
      },
      {
        input: [' '],
        output: true,
      },
      {
        input: ['ab@a'],
        output: true,
        isSecret: true,
      },
      {
        input: ['0P'],
        output: false,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def valid_palindrome(s: str) -> bool:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = valid_palindrome(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function validPalindrome(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return validPalindrome(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Reverse String',
    description:
      'Write a function that reverses a string. The input string is given as an array of characters `s`.\n\n### Example\n\n```plaintext\nInput: ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]\n\nInput: ["H","a","n","n","a","h"]\nOutput: ["h","a","n","n","a","H"]\n```\n\n### Notes\n\n- You must do this by modifying the input array **in-place** with O(1) extra memory.',
    difficulty: 'easy',
    test_cases: [
      {
        input: [['h', 'e', 'l', 'l', 'o']],
        output: ['o', 'l', 'l', 'e', 'h'],
      },
      {
        input: [['H', 'a', 'n', 'n', 'a', 'h']],
        output: ['h', 'a', 'n', 'n', 'a', 'H'],
      },
      {
        input: [['A', 'B', 'C']],
        output: ['C', 'B', 'A'],
      },
      {
        input: [['x', 'y', 'z']],
        output: ['z', 'y', 'x'],
        isSecret: true,
      },
      {
        input: [['r', 'a', 'c', 'e', 'c', 'a', 'r']],
        output: ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def reverse_string(s: list[str]) -> None:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = reverse_string(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function reverseString(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return reverseString(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Merge Two Sorted Lists',
    description:
      'Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the two given lists.\n\n### Example\n\n```plaintext\nInput: l1 = [1, 2, 4], l2 = [1, 3, 4]\nOutput: [1, 1, 2, 3, 4, 4]\n\nInput: l1 = [], l2 = []\nOutput: []\n\nInput: l1 = [], l2 = [0]\nOutput: [0]\n```\n\n### Notes\n\n- The input lists are already sorted in ascending order.',
    difficulty: 'medium',
    test_cases: [
      {
        input: [
          [1, 2, 4],
          [1, 3, 4],
        ],
        output: [1, 1, 2, 3, 4, 4],
      },
      {
        input: [[], []],
        output: [],
      },
      {
        input: [[], [0]],
        output: [0],
      },
      {
        input: [
          [5, 6, 7],
          [1, 8, 9],
        ],
        output: [1, 5, 6, 7, 8, 9],
        isSecret: true,
      },
      {
        input: [
          [-3, -2, -1],
          [2, 4, 6],
        ],
        output: [-3, -2, -1, 2, 4, 6],
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def merge_two_lists(l1: list[int], l2: list[int]) -> list[int]:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = merge_two_lists(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function mergeTwoLists(l1, l2) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return mergeTwoLists(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Climbing Stairs',
    description:
      'You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\n### Example\n\n```plaintext\nInput: 2\nOutput: 2\nExplanation: There are two ways to climb to the top: (1 step + 1 step) or (2 steps).\n\nInput: 3\nOutput: 3\nExplanation: There are three ways to climb to the top: (1 step + 1 step + 1 step), (1 step + 2 steps), or (2 steps + 1 step).\n```\n\n### Notes\n\n- Assume the input `n` is a positive integer.',
    difficulty: 'easy',
    test_cases: [
      {
        input: [2],
        output: 2,
      },
      {
        input: [3],
        output: 3,
      },
      {
        input: [5],
        output: 8,
      },
      {
        input: [10],
        output: 89,
        isSecret: true,
      },
      {
        input: [15],
        output: 987,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def climb_stairs(n: int) -> int:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = climb_stairs(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function climbStairs(n) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return climbStairs(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Find the Missing Number',
    description:
      'Given an array containing `n` distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.\n\n### Example\n\n```plaintext\nInput: [3, 0, 1]\nOutput: 2\n\nInput: [9,6,4,2,3,5,7,0,1]\nOutput: 8\n```\n\n### Notes\n\n- Your algorithm should run in linear runtime complexity.',
    difficulty: 'medium',
    test_cases: [
      {
        input: [[3, 0, 1]],
        output: 2,
      },
      {
        input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]],
        output: 8,
      },
      {
        input: [[0, 1]],
        output: 2,
      },
      {
        input: [[5, 3, 0, 4, 1]],
        output: 2,
        isSecret: true,
      },
      {
        input: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
        output: 0,
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def find_missing_number(nums: list[int]) -> int:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = find_missing_number(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function findMissingNumber(nums) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return findMissingNumber(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Move Zeroes',
    description:
      "Given an array `nums`, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\n### Example\n\n```plaintext\nInput: [0,1,0,3,12]\nOutput: [1,3,12,0,0]\n\nInput: [0,0,1]\nOutput: [1,0,0]\n```\n\n### Notes\n\n- You must do this **in-place** without making a copy of the array.",
    difficulty: 'easy',
    test_cases: [
      {
        input: [[0, 1, 0, 3, 12]],
        output: [1, 3, 12, 0, 0],
      },
      {
        input: [[0, 0, 1]],
        output: [1, 0, 0],
      },
      {
        input: [[4, 0, 2, 0, 5]],
        output: [4, 2, 5, 0, 0],
      },
      {
        input: [[1, 0, 0, 2, 3]],
        output: [1, 2, 3, 0, 0],
        isSecret: true,
      },
      {
        input: [[0, 0, 0, 4, 5]],
        output: [4, 5, 0, 0, 0],
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def move_zeroes(nums: list[int]) -> None:\n    pass',
        mainCode:
          "import json\nimport sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = json.loads(args[0])\n\ndef main():\n    result = move_zeroes(*params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function moveZeroes(nums) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const params = JSON.parse(args)\n\n  await writter.write(() => {\n    return moveZeroes(...params)\n  })\n}\n\nmain()",
      },
    ],
  },
] as const;
