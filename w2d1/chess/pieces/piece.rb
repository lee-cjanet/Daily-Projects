class Piece

  def initialize(color=nil, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

  def to_s()
  end

  def moves #returns an array of places a Piece can move to
  end

  def empty?()
  end

  def symbol
  end

  def valid_moves
  end

  private
  def move_into_check(to_pos)
  end

end
