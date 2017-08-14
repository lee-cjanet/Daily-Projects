require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.


# ::all: return an array of all the records in the DB
# ::find: look up a single record by primary key
#insert: insert a new row into the table to represent the SQLObject.
#update: update the row with the id of this SQLObject
#save: convenience method that either calls insert/update depending on whether or not the SQLObject already exists in the table.

class SQLObject

  #self in before initialize is the name of the subclass
  def self.columns
    # goal: Cat.columns == [:id, :name, :owner_id]
    return @columns if @columns #if it exist

    # .execute return an ARRAY of HASHES where each hash represent a row in the DB
    # .execute2 returns the same thing EXCEPT the FIRST element in the array is an ARRAY OF COLUMN NAMES in STRING form

    # .first returns the first element only aka column names only

    # execute & execute2 methods will not allow us to interpolate into the FROM statement. Must use the standard String #{} interpolation

    cols = DBConnection.execute2(<<-SQL).first
      SELECT
        *
      FROM
        #{self.table_name}
      LIMIT
        0
    SQL
    cols.map!(&:to_sym) #turn each string into symbol
    @columns = cols   #set the array as an instance var
  end


  def self.finalize!

#     class Cat < SQLObject
#   # Finalize is called at the end of the subclass definition to
#   # add the getters/setters.
#   self.finalize!
# =>  end
  #when you call FINALIZE, it creates the below methods

    self.columns.each do |name|
      define_method(name) do
        self.attributes[name]
      end
      #sets the column name as the key

      #SELF is the instance variable of the subclass
      #creating a method call .name=
      define_method("#{name}=") do |value|
        self.attributes[name] = value
      end
    end
  end

# cat = Cat.new
# cat.name = 'greg'


  def self.table_name=(table_name) #setter method/ attr_writer
    #use this method when the automatic .table_name don't translate to what you want it to be
    @table_name = table_name
  end



  def self.table_name #getter method/ attr_reader
    # .name is a Class class method that turns class names into strings. ex String.name => "String"

    # ActiveSupport (part of Rails) has an inflector library that adds methods to String
    # require 'active_support/inflector'
    #tableize will turn a CamelCaseString into snake_case_plural

    #this method.table_name => turns table names into rb file names
    # use ||= so that it doesn't use tableize if it was personally defined by .table_name
    @table_name ||= self.name.tableize
  end

  def self.all
    @SQLObject ||=[]
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  # SELF from here on out is the instance variable of the subclass
  def initialize(params = {})
    # cat = Cat.new(name: "Gizmo", owner_id: 123)
    params.each do |attr_name, value|
      if self.class.columns.include?(attr_name)
        #this calls line 57's method
        self.send("#{attr_name}=", value)
        # @attributes[attr_name] = value
        # can't use @attributes b/c the subclass won't be able to access attribute b/c it belongs to the SQLobject class only.
      else
        raise "unknown attribute '#{attr_name}'"
      end
      end
    end

  end

  def attributes
    # cat.attributes => { name: "Gizmo" }
    @attributes ||={}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
