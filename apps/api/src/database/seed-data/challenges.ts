export default [
  {
    title: 'Find Peak Element',
    description:
      '### Problem\n\nA peak element is an element that is strictly greater than its neighbors. Given an input array `nums`, where `nums[i] != nums[i + 1]`, find a peak element and return its index. The array may contain multiple peaks, in that case, return the index to any one of the peaks.\n\n### Example\n\n```plaintext\nInput: "[1, 2, 3, 1]"\nOutput: 2\n\nInput: "[1, 2, 1, 3, 5, 6, 4]"\nOutput: 5\n```\n\n### Notes\n\n- Your solution should be in O(log n) time complexity.',
    difficulty: 'medium',
    test_cases: [
      {
        input: '[1, 2, 3, 1]',
        output: '2',
      },
      {
        input: '[1, 2, 1, 3, 5, 6, 4]',
        output: '5',
      },
      {
        input: '[10, 5, 8, 12]',
        output: '3',
      },
      {
        input: '[2, 3, 4, 5, 6, 7]',
        output: '5',
        isSecret: true,
      },
      {
        input: '[9, 8, 7, 6, 5]',
        output: '0',
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def find_peak_element(nums: list[int]) -> int:\n    pass',
        mainCode:
          "import sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = args[0]\n\n# Evaluar la cadena para convertirla en una lista\nparams = eval(params)\n\ndef main():\n    result = find_peak_element(params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function findPeakElement(nums) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const input = args[0]\n  const inputArray = eval(input)\n\n  await writter.write(() => {\n    return findPeakElement(inputArray)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Rotate Array',
    description:
      '### Problem\n\nGiven an array, rotate the array to the right by `k` steps, where `k` is non-negative.\n\n### Example\n\n```plaintext\nInput: "[1,2,3,4,5,6,7]", 3\nOutput: [5,6,7,1,2,3,4]\n\nInput: "[-1,-100,3,99]", 2\nOutput: [3,99,-1,-100]\n```\n\n### Notes\n\n- Try to come up with as many solutions as you can; there are at least three different ways to solve this problem.',
    difficulty: 'medium',
    test_cases: [
      {
        input: '[1,2,3,4,5,6,7], 3',
        output: '[5,6,7,1,2,3,4]',
      },
      {
        input: '[-1,-100,3,99], 2',
        output: '[3,99,-1,-100]',
      },
      {
        input: '[1,2,3,4,5], 1',
        output: '[5,1,2,3,4]',
      },
      {
        input: '[0,0,1,2,3], 4',
        output: '[0,1,2,3,0]',
        isSecret: true,
      },
      {
        input: '[1], 0',
        output: '[1]',
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def rotate_array(nums: list[int], k: int) -> list[int]:\n    pass',
        mainCode:
          "import sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = args[0]\n\n# Dividir y procesar la entrada\nparams = params.split(', ')\nnums = eval(params[0])\nk = int(params[1])\n\ndef main():\n    result = rotate_array(nums, k)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function rotateArray(nums, k) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const input = args[0]\n  const [nums, k] = input.split(', ').map((x, i) => i === 0 ? eval(x) : parseInt(x))\n\n  await writter.write(() => {\n    return rotateArray(nums, k)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Valid Parentheses',
    description:
      "### Problem\n\nGiven a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n\n### Example\n\n```plaintext\nInput: \"()\"\nOutput: true\n\nInput: \"()[]{}\"\nOutput: true\n\nInput: \"(]\"\nOutput: false\n```\n\n### Notes\n\n- The input string `s` will contain only the six characters mentioned above.",
    difficulty: 'easy',
    test_cases: [
      {
        input: '"()"',
        output: 'true',
      },
      {
        input: '"()[]{}"',
        output: 'true',
      },
      {
        input: '"(]"',
        output: 'false',
      },
      {
        input: '"([)]"',
        output: 'false',
        isSecret: true,
      },
      {
        input: '"{[]}"',
        output: 'true',
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def is_valid_parentheses(s: str) -> bool:\n    pass',
        mainCode:
          "import sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = args[0]\n\n# No hay necesidad de convertir el string\n\ndef main():\n    result = is_valid_parentheses(params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function isValidParentheses(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const input = args[0]\n\n  await writter.write(() => {\n    return isValidParentheses(input)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    description:
      '### Problem\n\nGiven a string `s`, find the length of the longest substring without repeating characters.\n\n### Example\n\n```plaintext\nInput: "abcabcbb"\nOutput: 3\n\nInput: "bbbbb"\nOutput: 1\n```\n\n### Notes\n\n- Assume the input string `s` consists of English letters, digits, symbols and spaces.',
    difficulty: 'medium',
    test_cases: [
      {
        input: '"abcabcbb"',
        output: '3',
      },
      {
        input: '"bbbbb"',
        output: '1',
      },
      {
        input: '"pwwkew"',
        output: '3',
      },
      {
        input: '"aab"',
        output: '2',
        isSecret: true,
      },
      {
        input: '"dvdf"',
        output: '3',
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def length_of_longest_substring(s: str) -> int:\n    pass',
        mainCode:
          "import sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = args[0]\n\ndef main():\n    result = length_of_longest_substring(params)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function lengthOfLongestSubstring(s) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const input = args[0]\n\n  await writter.write(() => {\n    return lengthOfLongestSubstring(input)\n  })\n}\n\nmain()",
      },
    ],
  },
  {
    title: 'Merge Sorted Array',
    description:
      '### Problem\n\nYou are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.\n\n### Example\n\n```plaintext\nInput: "[1,2,3,0,0,0]", 3, "[2,5,6]", 3\nOutput: [1,2,2,3,5,6]\n\nInput: "[1]", 1, "[]", 0\nOutput: [1]\n```\n\n### Notes\n\n- The final sorted array should not be returned by the function, but instead be stored inside `nums1`.',
    difficulty: 'easy',
    test_cases: [
      {
        input: '[1,2,3,0,0,0], 3, [2,5,6], 3',
        output: '[1,2,2,3,5,6]',
      },
      {
        input: '[1], 1, [], 0',
        output: '[1]',
      },
      {
        input: '[2, 0], 1, [1], 1',
        output: '[1, 2]',
      },
      {
        input: '[4, 0, 0, 0], 1, [1, 2, 3], 3',
        output: '[1, 2, 3, 4]',
        isSecret: true,
      },
      {
        input: '[0], 0, [1], 1',
        output: '[1]',
        isSecret: true,
      },
    ],
    langs: [
      {
        lang: 'python',
        code: 'def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    pass',
        mainCode:
          "import sys\nfrom writter import write\n\nargs = sys.argv[1:]\nparams = args[0]\n\n# Dividir y procesar la entrada\nparams = params.split(', ')\nnums1 = eval(params[0])\nm = int(params[1])\nnums2 = eval(params[2])\nn = int(params[3])\n\ndef main():\n    result = merge(nums1, m, nums2, n)\n    write(lambda: result)\n\nif __name__ == '__main__':\n    main()",
      },
      {
        lang: 'javascript',
        code: 'function merge(nums1, m, nums2, n) {\n    // your code here\n}',
        mainCode:
          "const writter = require('./write')\n\nconst main = async () => {\n  const args = process.argv.slice(2)\n  const input = args[0]\n  const [nums1, m, nums2, n] = input.split(', ').map((x, i) => i === 0 || i === 2 ? eval(x) : parseInt(x))\n\n  await writter.write(() => {\n    return merge(nums1, m, nums2, n)\n  })\n}\n\nmain()",
      },
    ],
  },
] as const;
