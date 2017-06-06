# PHASE 2
# def convert_to_int(str)
#   begin
#     num = Integer(str)
#   rescue ArgumentError
#     p "Please input a coorect number."
#     return nil
#   end
#   num
# end
#
# # PHASE 3
# FRUITS = ["apple", "banana", "orange"]
#
# def reaction(maybe_fruit)
#   if FRUITS.include? maybe_fruit
#     puts "OMG, thanks so much for the #{maybe_fruit}!"
#   else
#     raise StandardError
#   end
# end
#
# def feed_me_a_fruit
#   puts "Hello, I am a friendly monster. :)"
#   begin
#     puts "Feed me a fruit! (Enter the name of a fruit:)"
#     maybe_fruit = gets.chomp
#     reaction(maybe_fruit)
#   rescue
#     puts "Please put another fruit."
#     retry
#   end
# end

# PHASE 4

class DescriptiveError < StandardError

end


class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
      raise DescriptiveError unless @name.is_a?(String) && @name.length > 2
      raise DescriptiveError unless @yrs_known >= 5
      raise DescriptiveError unless @fav_pastime.length > 3

  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me."
  end
end
