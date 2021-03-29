/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*Approach
    1. Add two integers from begining to len and see if right integers are there
    3. Complexity, (n/target)^2 (+filter)
    

*/
var twoSum = function(nums, target) {
    var hand, next, sum;    
    
    for(hand=0; hand<=nums.length; hand++){        
        for(next=hand+1; next<=nums.length; next++){            
            sum = nums[hand]+nums[next];            
            if(sum === target){                
                return [hand,next];
            }
        }        
    }
};