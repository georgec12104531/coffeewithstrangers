@coffee_times.each do |coffee_time|
  json.set! coffee_time.id do
    json.extract! coffee_time, :id, :date, :address, :address2, :topics, :capacity, :host_id, :location_id, :seats_left, :start_time, :end_time, :zip, :state, :city, :coffee_time_attendees
    json.set! :host_name, coffee_time.host.name
  end
end
