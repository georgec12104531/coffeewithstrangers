@coffee_time_attendances.each do |attendance|
  json.set! attendance.id do
    json.extract! attendance, :id, :user_id, :coffee_time_id
  end
end