class Queen < Piece
  include

  attr_reader :color
  attr_accessor :pos

  def initialize(color, board, pos)
    super
  end


end
