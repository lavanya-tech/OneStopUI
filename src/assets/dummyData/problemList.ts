import { Problem } from 'src/app/models/problem.model';

export const problemList: Problem[] = [
  {
    
    id: 1,
    title: 'Reverse of the number',
    points: 100,
    description: 'Given an integer n.\n Return the reverse of the n',
    constraints: '1 <= n <= 1000',
    Input: '123',
    Output: '321',
  },
  {
    id: 2,
    title: 'Tell whether the number is even or odd',
    points: 100,
    description: 'Given a interger return whether it is even or odd',
    constraints: '1 <= n <= 1000',
    Input: '23',
    Output: 'Odd',
  },
  {
    id: 3,
    title: 'Palindromic string',
    points: 100,
    description:
      'Given a string s.\n Return true if it is palindrome or else return false',
      constraints: '1 < s.length() <= 1000',
    Input: 'aba',
    Output: 'true',
  },
  {
    id: 4,
    title: 'String contains vowels',
    points: 100,
    description:
      'Given a string s.\n Return true if it contains vowels in it or else return false',
      constraints: '1 < s.length() <= 1000',
    Input: 'abacfasa',
    Output: 'true',
  },
  {
    id: 5,
    title: 'Addition of Reverse',
    points: 100,
    description:'Given a interger num.\n Return the sum of the orginal number and its reverse',
    constraints: '1 <= n <= 1000',
    Input: '123',
    Output: '444',
  },
  {
    id: 6,
    title: 'Product of Array Except Self',
    points: 100,
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.You must write an algorithm that runs in O(n) time and without using the division operation.",
    constraints:"2 <= nums.length <= 10^5",
    Input: "nums = [1,2,3,4]",
    Output: "[24,12,8,6]"
  },
  {
    id: 7,
    title: 'Trapping Rain Water',
    points: 40,
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    constraints:"1 <= n <= 2 * 10",
    Input: "[4,2,0,3,2,5]",
    Output: "9"
  },
  {
    id: 8,
    title: 'Longest Palindromic Subsequence',
    points: 100,
    description: "Given a string s, find the longest palindromic subsequence's length in s.A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
    constraints:"1 <= s.length <= 1000",
    Input: "bbbab",
    Output: "4"
  },
  {
    id: 9,
    title: 'Longest Palindromic Substring',
    points: 50,
    description: "Given a string s, return the longest palindromic substring in s",
    constraints:"1 <= s.length <= 1000",
    Input: "babad",
    Output: "bab"
  },
];
