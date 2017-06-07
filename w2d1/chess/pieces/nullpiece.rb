require 'singleton'
require_relative 'piece'

class NullPiece < Piece
  include Singleton

  attr_accessor :pos

  def initialize
    @symbol = " "
    @color = :none
  end

  def to_s
    " "
  end

end
