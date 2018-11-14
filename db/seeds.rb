# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Users
User.create("username": "James123", "password": "password", "name": "James", "email": "james@james.com", "phone_number": "1231231234")
User.create("username": "Allison123", "password": "password", "name": "Allison", "email": "allison@allison.com", "phone_number": "1231231234")
User.create("username": "Ali123", "password": "password", "name": "Ali", "email": "ali@ali.com", "phone_number": "1231231234")
User.create("username": "Earl123", "password": "password", "name": "Earl", "email": "earl@earl.com", "phone_number": "1231231234")
User.create("username": "Rachel123", "password": "password", "name": "Rachel", "email": "rachel@rachel.com", "phone_number": "1231231234")
User.create("username": "Bob123", "password": "password", "name": "Bob", "email": "bob@bob.com", "phone_number": "1231231234")
User.create("username": "Rex123", "password": "password", "name": "Rex", "email": "rex@rex.com", "phone_number": "1231231234")
User.create("username": "Frances123", "password": "password", "name": "Frances", "email": "frances@frances.com", "phone_number": "1231231234")
User.create("username": "Leslie123", "password": "password", "name": "Leslie", "email": "leslie@leslie.com", "phone_number": "1231231234")
User.create("username": "Michael123", "password": "password", "name": "Michael", "email": "michael@michael.com", "phone_number": "1231231234")
# User.create("username": "Bob Dylan", "password": "password")
# User.create("username": "Bonnie Chung", "password": "password")
# User.create("username": "Rex Grant", "password": "password")
# User.create("username": "Frances Green", "password": "password")
# User.create("username": "Leslie Cranston", "password": "password")
# User.create("username": "Michael Nguyen", "password": "password")
# User.create("username": "Derek Douglas", "password": "password")

# CoffeeTimes

CoffeeTime.create("date": "2018-12-07", "address": "825 Battery Street", "topics": "We might talk about our favorite childhood breakfast cereals, running routes in SF, Bob's Burgers, your favorite places to travel, what makes you happy, what makes you sad, techniques for peeling an orange in one piece, self awareness, good books you've read recently, favorite random activities you've discovered in the city...The options are pretty endless.", "capacity": 5, "host_id": 40, "location_id": 19, "seats_left": 5, "start_time": "2pm", "end_time": "4pm")  
