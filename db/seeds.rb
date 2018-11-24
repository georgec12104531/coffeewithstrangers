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

# Demo User
User.create("username": "Stranger", "password": "password")

# CoffeeTimes


#SF CoffeeTime
CoffeeTime.create("date": "2018-12-07", "address": "Haus Coffee", "address2": "3086 24th St", "topics": "We might talk about our favorite childhood breakfast cereals, running routes in SF, Bob's Burgers, your favorite places to travel, what makes you happy, what makes you sad, techniques for peeling an orange in one piece, self awareness, good books you've read recently, favorite random activities you've discovered in the city...The options are pretty endless.", "capacity": 5, "host_id": 40, "location_id": 19, "seats_left": 5, "start_time": "2pm", "end_time": "4pm", "zip": "94110", "city": "San Francisco", "state": "CA")  
CoffeeTime.create("date": "2018-12-23", "address": "Sightglass Coffee", "address2": "270 7th St", "topics": "I'm interested in whatever you have a strong opinion on or are an expert in, so really anything's game. But here's a barrage of questions to get us started: What's on your bookshelf? What's the most formative criticism you've received? What compliments are you most proud of? What's one professed value that you sometimes struggle with? How does your job shape who you are? What's the difference between doing what is effective vs what's efficient? How do you use your social media? Where's your name from? What have you had to forgive yourself for? Who are the five top people in your life and what do you learn from them? Standard operating procedures: what routines keep you grounded when everything in your life scatters? And vice versa, what habits keep you open and exploring when you're grounded?", "capacity": 5, "host_id": 33, "location_id": 19, "seats_left": 5, "start_time": "8am", "end_time": "10am", "zip": "94103", "city": "San Francisco", "state": "CA")    


#NY CoffeeTime
CoffeeTime.create("date": "2018-12-14", "address": "Crumbs & Coffee", "address2": "423 5th Ave", "topics": "Whatever you want! Missed connections, food inspiration, hidden talents, random observations, rogue family members, the best city spots, everyday challenges, your quirks, lifestyle, art house cinema, adventures, stories from your travels, failed attempts, events, random trivia, Toronto street style, books you've read, my love of salsa dancing, our goals and dreams, your childhood best friend, and of course your deepest secrets ;). Or none of these. There’s almost no topic or theme that’s off the table!", "capacity": 5, "host_id": 34, "location_id": 20, "seats_left": 5, "start_time": "11am", "end_time": "1pm", "zip": "11215", "city": "Brooklyn", "state": "NY")    

#Boston
CoffeeTime.create("date": "2018-12-11", "address": "Polcari’s Coffee", "address2": "105 Salem St", "topics": "Currently, I am super interested in how people interact with the relationships, friendships, romantic relationships, relationships with relatives etc, in their lives, so I might ask you questions like: what’s been the most influential relationship you’ve had? How do you determine what a good relationship is for yourself? Remember what I said about questions that are maybe a bit too much for normal conversation? Really, I’m game to talk about anything, especially things that have no answer and are difficult to understand, so please come with all the questions you’ve ever wanted to ask a stranger and all the things you ever wanted to share. Otherwise, I’m not the best at small talk, so if you reaaaallly wanted to talk about the weather, I’m sure I could use some practice… See ya!", "capacity": 5, "host_id": 36, "location_id": 21, "seats_left": 5, "start_time": "4pm", "end_time": "6pm", "zip": "02113", "city": "Massachusetts", "state": "BST")    
CoffeeTime.create("date": "2018-12-01", "address": "Render Coffee", "address2": "563 Columbus Ave", "topics": "We could talk about life in Boston, books, board games, travels both past and future, language, history, the color purple, storytelling, the optimal consistency of a blueberry muffin, life, love and our respective ways of pursuing happiness.", "capacity": 5, "host_id": 37, "location_id": 21, "seats_left": 5, "start_time": "8am", "end_time": "10am", "zip": "02118", "city": "Massachusetts", "state": "BST")    


#CoffeeTimeAttendance

#SF
#Ali
CoffeeTimeAttendance.create("user_id": 30, "coffee_time_id": 53)
CoffeeTimeAttendance.create("user_id": 31, "coffee_time_id": 53)
CoffeeTimeAttendance.create("user_id": 32, "coffee_time_id": 53)
CoffeeTimeAttendance.create("user_id": 40, "coffee_time_id": 53)
CoffeeTimeAttendance.create("user_id": 40, "coffee_time_id": 53)

#Rachel
CoffeeTimeAttendance.create("user_id": 33, "coffee_time_id": 55)


#NY 
#Bob
CoffeeTimeAttendance.create("user_id": 34, "coffee_time_id": 56)
CoffeeTimeAttendance.create("user_id": 35, "coffee_time_id": 56)

#BST
#Frances
CoffeeTimeAttendance.create("user_id": 36, "coffee_time_id": 57)

#Leslie
CoffeeTimeAttendance.create("user_id": 37, "coffee_time_id": 58)
CoffeeTimeAttendance.create("user_id": 38, "coffee_time_id": 58)
CoffeeTimeAttendance.create("user_id": 39, "coffee_time_id": 58)


