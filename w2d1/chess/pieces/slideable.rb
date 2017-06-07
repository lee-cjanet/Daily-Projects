module Slideable
  #Bishop = diagonal
  #Rook = straight/sideway
  #Queen = both

  ROOK = [
    [-1,0], #up
    [1,0], #down
    [0,1], #right
    [0,-1] #left
  ]

  BISHOP = [
    [-1,1], # up, right
    [-1,-1], # up, left_
    [1,1], # down, right
    [1,-1] # down, left
  ]

  QUEEN = ROOK + BISHOP

  def moves(character)
    possible_moves = []
    all_moves = move_dirs(character)
    character.pos.
  end

  def Bishop
  end

  def Rook
  end

  def Queen #rook & bishop
  end

  def move_dirs(character)
    case character.class
    when Rook
      ROOK
    when Bishop
      BISHOP
    when Queen
      QUEEN
    end
  end
end

p QUEEN
