def bad_two_sum?(arr, target_sum)
  sum = false
  arr.each_with_index do |num1, idx|
    ((idx+1)...arr.length).each do |idx2|
      sum = true if num1 + arr[idx2] == target_sum
    end
  end
  sum
end


def two_sum?(arr, target_sum)
  arr.each_with_index do |num1, idx|
    ((idx+1)...arr.length).each do |idx2|
      return true if num1 + arr[idx2] == target_sum
    end
  end
end

def two_sum?(arr, target_sum)
  arr.each_with_index do |num, idx|
    return true if (arr[0...idx]+arr[(idx+1)...arr.length]).include?(target_sum - num)
  end
  false
end




arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false

# What would be the running time of your proposed solution?
#Best way to solve this w/o time complexity?


# =====================================================================



def two_sum_hash(arr, target_sum)
end
