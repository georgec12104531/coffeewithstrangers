@locations.each do |location|
  json.set! location.id do
    json.extract! location, :id, :name
    json.set! :coffee_times, location.coffee_times 
  end
end
