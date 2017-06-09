def slow_my_min(list)
  min = list[0] #because min gets reset everytime the loop begins again
  (0...list.length).each do |idx|
    return min if idx == list.length - 1
    ((idx+1)...list.length).each do |idx2|
      num1, num2 = list[idx], list[idx2]
      if num1 > num2
        min = num2
        p "min: #{min}, num1: #{num1}, num2: #{num2}"
      end
    end
  end
end


 def my_min_1(list)
  start = Time.now
  min = list[0]
  list.each_with_index do |num, i|
    break if list[i + 1].nil?
    min = num if num > list[i + 1]
  end
  min
  Time.now - start
end




def my_min(list)
  start = Time.now
  min = list[0]
  list.each do |num|
    min = num if min > num
  end
  min
  Time.now - start
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# big_list = (0..1_000_000).to_a.shuffle!
# my_min(big_list)  # =>  -5
# slow_my_min(list)
# ==================================================================
def largest_contiguous_sum(arr)
  largest_sum = arr[0]
  arr.each_index do |i|
    (i..arr.length - 1).each do |j|
      current_sum = arr[i..j].reduce(:+)
      largest_sum = current_sum if current_sum > largest_sum
    end
  end
  largest_sum
end

list = [2, 3, -6, 7, -6, 7]
largest_contiguous_sum(list) # => 8 (from [7, -6, 7])


def largest_sum(arr)
  largest_sum = arr[0]
  running_sum = arr[0]
  if arr.all? {|num| num < 0}
    arr.max
  else
    arr.drop(1).each do |num|
      running_sum +=num
      running_sum = 0 if running_sum < 0
      largest_sum = running_sum if largest_sum < running_sum
    end
  end
  largest_sum
end

largest_sum(list)


# ==================================================================

def anagram?(str1, str2) #== linear of str1.length
  return false if str1.length != str2.length
  str1.chars.all? {|chr| str2.count(chr) == str1.count(chr)}
end


# p anagram?("gizmo", "sally")    #=> false
# p anagram?("elvis", "lives")    #=> true
# p anagram?("elvis", "llives") #=> false



def first_anagram?(str1, str2)
  result = str1.chars.permutation(str1.length)
  result.include?(str2)
end

# p anagram?("gizmo", "sally")    #=> false
# p anagram?("elvis", "lives")    #=> true
# p anagram?("elvis", "llives") #=> false

#== n! aka factorial(str1)
#times + space complexity: factorial based on input. O(n!)
#What happens if you increase the size of the string?



#
def second_anagram?(str1, str2)
  (0...str1.length).each do |idx|
    chr = str1[idx]
    if str2.include?(chr)
      str1 = str1.delete(chr)
      str2 = str2.delete(chr)
    end
  end
  str1 == str2
end

def third_anagram(str1, str2)
  str1.chars.sort == str2.chars.sort
end

# space = O(2n) == O(n)
# time = O(2*(nlog(n)))  => 2* because we call chars.sort on each side

def fourth_anagram?(str1, str2)
  res = Hash.new(0)
  str1.each_char {|char| res[char] += 1}
  # str2.each_char {|char| return false if str2.count(char) != res[char]}
  str2.each_char {|char| res[char]-=1}
  res.values.all? {|value| value == 0}
end

#space is constant b/c there's only 26 letters
#time = linear


p second_anagram?("gizmo", "sally")    #=> false
p second_anagram?("elvis", "lives")    #=> true
p second_anagram?("elvis", "llives") #=> false
fourth_anagram?("elvis", "lives")
fourth_anagram?("elvis", "llives")





# ==================================================================
