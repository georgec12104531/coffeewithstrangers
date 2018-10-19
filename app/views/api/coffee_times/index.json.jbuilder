@coffee_times.each do |coffee_time|
  json.set! coffee_time.id do
    json.extract! coffee_time, :id, :date, :address, :introduction, :capacity, :host_id, :location_id, :seats_left  
  end
end
