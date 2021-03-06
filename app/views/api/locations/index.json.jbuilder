@locations.each do |location|
  json.set! location.id do
    json.extract! location, :id, :name
    json.set! :coffee_times, location.coffee_times do |coffee_time|
      json.extract! coffee_time, :id, :date, :address, :address2, :topics, :capacity, :host_id, :location_id, :seats_left, :start_time, :end_time, :zip, :state, :city, :host, :coffee_time_attendees
      json.set! :host_name, coffee_time.host.name
    end
  end
end

# Need to refactor

