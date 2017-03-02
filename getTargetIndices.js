var twoSum = function(nums, target) {
  var sumMap = {};
  var result = [];
  for(var i=0; i< nums.length;i++) {
    if (sumMap.hasOwnProperty(target - nums[i])) {
      result[1] = i;
      result[0] = sumMap[target - nums[i]];
    }
    sumMap[nums[i]] = i;
  }
  
  return result;
};

twoSum([5,6,7],13)