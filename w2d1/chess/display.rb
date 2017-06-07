require 'colorize'
require_relative 'board'
require_relative 'cursor'

class Display

  attr_reader :cursor, :board

  def initialize(board, cursor)
    @board = board
    @cursor = cursor #cursor_pos in Cursor class
  end

  def fill_board #
    @board.grid.map.with_index do |row, row_idx|
      build_row(row, row_idx)
    end
  end

  def build_row(row, row_idx) #fills in color for the rows
    row.map.with_index do |piece, col_idx|
      color_options = colors_for(row_idx, col_idx)
      piece.to_s.colorize(color_options)
    end
  end

  def colors_for(row_idx, col_idx) #board & cursor color
    if [row_idx, col_idx] == cursor.cursor_pos && cursor.selected #if the cursor's location is selected, highlight/change the background color to green
      bg = :light_green
    elsif [row_idx, col_idx] == cursor.cursor_pos #if the cursor is at this place but NOT selected, it's red
      bg = :light_red
    elsif (row_idx+col_idx).odd?  #the checker colors are blue or yellow
      bg = :light_blue
    else
      bg = :light_yellow
    end
    {background: bg}
  end


  # def render
  #   10.times do
  #      game.cursor.get_input
  #      fill_board
  #      p @board
  #   end
  # end


    def render

      init_input = @cursor.get_input
i = 0
      while init_input != :ctrl_c
        @cursor.get_input
        system("clear")
        puts "Arrow keys, WASD, or vim to move, space or enter to confirm."
        fill_board.each { |row| puts row.join }

      # @notifications.each do |key, val|
      #   puts "#{val}"
      # end
        p @cursor.cursor_pos
        p i
        i += 1
      end
    end

end



if __FILE__ == $PROGRAM_NAME
  board = Board.new
  cursor = Cursor.new([0,0], board)
  game = Display.new(board, cursor)
  game.render
end
