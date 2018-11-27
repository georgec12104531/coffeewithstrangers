json.extract! @coffee_time, :id, :date, :address, :address2, :location_id, :host, :users, :coffee_time_attendees, :start_time, :end_time
json.set! :host_name, @coffee_time.host.name