# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Locations
Location.create("name": "San Francisco")
Location.create("name": "New York")
Location.create("name": "Boston")
Location.create("name": "London")
Location.create("name": "Chicago")
Location.create("name": "Seattle")
Location.create("name": "Los Angeles")

# Users

# Demo User
User.create("username": "Stranger", "password": "password", "name": "Stranger", "introduction": "Hi, My name is Stranger and despite my name, don't be!", "story": "Well there's a beginning, middle and end...I think.")


#host
User.create("username": "Ali123", "password": "password", "name": "Ali", "email": "ali@ali.com", "phone_number": "1231231234", introduction: "Get ready to step a little out of your comfort zone and meet people who will not stay strangers for long. We'll share and listen to others' experiences, ideas and jokes, and have a great time. See you soon!", story: "I was born and raised on a diet of meditation and kale in San Francisco, but spent most of my childhood dreaming of living in the UK. I somehow convinced my employer to make my dreams come true, and have lived in London for the past two years.")
User.create("username": "Rachel123", "password": "password", "name": "Rachel", "email": "rachel@rachel.com", "phone_number": "1231231234", introduction:"Tell me, would you like to enjoy two hours of conversation around a good cup of tea or, insert your favourite beverage here, and great people? Of course you would!", story:" I'm a professional human being. When I'm not designing websites I like visiting places and meeting people from all over. I'm really into art and come from an artistic background - I enjoy a cup of tea during my endless painting sessions! I love getting people together and sharing interests and activities. I was born abroad, lived and studied Interactive Design in Paris, and now I'm in love with London. I like to listen as well as share conversations - whether they're serious, funny, quiet or energetic they're good conversations.")
User.create("username": "Bob123", "password": "password", "name": "Bob", "email": "bob@bob.com", "phone_number": "1231231234", introduction: "Hi there,  I love listening, talking, discussing, debating, storytelling, deliberating, conversing and all the other varieties of thought exchange between people. I am looking forward to meeting you!", story: "I've been in Berlin for over 2 years and I prefer all the things I am by choice over those I am by birth, but since I've heard you cannot become a Berliner by choice, I'll go with ""I am from Central Europe"". I love stories, cold and green countries, books, mental models, the Guilty Feminist podcast, my Pocket account, technology, slightly crazy singer-songwriters, dogs, mountains and I absolutely cannot cook. Professionally, I build companies, products and services for other, larger companies, and I went to art school, which probably shaped some of my thinking. I also have a loud and talkative family, which shaped other parts of my thinking and the volume at which I speak.")
User.create("username": "Frances123", "password": "password", "name": "Frances", "email": "frances@frances.com", "phone_number": "1231231234", introduction: "Even if the world doesn't seem lonely from a broader perspective, it sure can get lonely. I also think that people who travel abroad a lot and live in different cities crave those deeper connections that they may have created with life-long friends they have back home.", story: "I'm a trilingual ex-yugo baby - born in Sarajevo (Bosnia), immigrated to and grew up in Canada and now I'm living in Berlin with my Croatian citizenship! I'm a solopreneur working on setting up my own online sock shop that empowers women! I work with kids a few times a week helping them learn english and math and I'm also a part of a program here in my hood in Berlin similar to, big brothers big sisters, Little people are bomb! I'm proud of alway following my heart and gut, they've been pretty much on the same page throughout my whole life, even if it meant ignoring some haters.")
User.create("username": "Leslie123", "password": "password", "name": "Leslie", "email": "leslie@leslie.com", "phone_number": "1231231234", introduction:"At almost any moment in the UK, at least 1/3 of the population is either discussing the weather, has already discussed the weather, or is about to. So...let's not do that. Instead, let's grab tea, skip the temperature small talk, and share some stories. I've been told I'm a good listener*!", story: "I love finding new things to love. Routine is chill, but there's nothing like visiting a city for the first time, tasting your new favorite food, discovering a great song you've never heard before, or connecting with someone you just met.")
User.create("username": "Derek123", "password": "password", "name": "Derek", "email": "derek@derek.com", "phone_number": "1231231234", introduction: "Get ready to step a little out of your comfort zone and meet people who will not stay strangers for long. We'll share and listen to others' experiences, ideas and jokes, and have a great time. See you soon!", story: "I was born and raised on a diet of meditation and kale in San Francisco, but spent most of my childhood dreaming of living in the UK. I somehow convinced my employer to make my dreams come true, and have lived in London for the past two years.")
User.create("username": "Lily123", "password": "password", "name": "Lily", "email": "lily@lily.com", "phone_number": "1231231234", introduction: "Hi there,  I love listening, talking, discussing, debating, storytelling, deliberating, conversing and all the other varieties of thought exchange between people. I am looking forward to meeting you!", story: "I've been in Berlin for over 2 years and I prefer all the things I am by choice over those I am by birth, but since I've heard you cannot become a Berliner by choice, I'll go with ""I am from Central Europe"". I love stories, cold and green countries, books, mental models, the Guilty Feminist podcast, my Pocket account, technology, slightly crazy singer-songwriters, dogs, mountains and I absolutely cannot cook. Professionally, I build companies, products and services for other, larger companies, and I went to art school, which probably shaped some of my thinking. I also have a loud and talkative family, which shaped other parts of my thinking and the volume at which I speak.")
User.create("username": "Ariana123", "password": "password", "name": "Ariana", "email": "ariana@ariana.com", "phone_number": "1231231234", introduction: "Get ready to step a little out of your comfort zone and meet people who will not stay strangers for long. We'll share and listen to others' experiences, ideas and jokes, and have a great time. See you soon!", story: "I was born and raised on a diet of meditation and kale in San Francisco, but spent most of my childhood dreaming of living in the UK. I somehow convinced my employer to make my dreams come true, and have lived in London for the past two years.")
User.create("username": "Drew123", "password": "password", "name": "Drew", "email": "drew@drew.com", "phone_number": "1231231234", introduction:"Tell me, would you like to enjoy two hours of conversation around a good cup of tea or, insert your favourite beverage here, and great people? Of course you would!", story:" I'm a professional human being. When I'm not designing websites I like visiting places and meeting people from all over. I'm really into art and come from an artistic background - I enjoy a cup of tea during my endless painting sessions! I love getting people together and sharing interests and activities. I was born abroad, lived and studied Interactive Design in Paris, and now I'm in love with London. I like to listen as well as share conversations - whether they're serious, funny, quiet or energetic they're good conversations.")

#regular users
User.create("username": "James123", "password": "password", "name": "James", "email": "james@james.com", "phone_number": "1231231234")
User.create("username": "Allison123", "password": "password", "name": "Allison", "email": "allison@allison.com", "phone_number": "1231231234")
User.create("username": "Earl123", "password": "password", "name": "Earl", "email": "earl@earl.com", "phone_number": "1231231234")
User.create("username": "Rex123", "password": "password", "name": "Rex", "email": "rex@rex.com", "phone_number": "1231231234")
User.create("username": "Michael123", "password": "password", "name": "Michael", "email": "michael@michael.com", "phone_number": "1231231234")
User.create("username": "Bonnie123", "password": "password", "name": "Bonnie", "email": "bonnie@bonnie.com", "phone_number": "1231231234")

# User.create("username": "Leslie Cranston", "password": "password")
# User.create("username": "Michael Nguyen", "password": "password")
# User.create("username": "Derek Douglas", "password": "password")


# CoffeeTimes


#SF CoffeeTime
CoffeeTime.create("date": "2018-2-07", "address": "Haus Coffee", "address2": "3086 24th St", "topics": "We might talk about our favorite childhood breakfast cereals, running routes in SF, Bob's Burgers, your favorite places to travel, what makes you happy, what makes you sad, techniques for peeling an orange in one piece, self awareness, good books you've read recently, favorite random activities you've discovered in the city...The options are pretty endless.", "capacity": 5, "host_id": 2, "location_id": 1, "seats_left": 5, "start_time": "2pm", "end_time": "4pm", "zip": "94110", "city": "San Francisco", "state": "CA")  
CoffeeTime.create("date": "2018-2-23", "address": "Sightglass Coffee", "address2": "270 7th St", "topics": "I'm interested in whatever you have a strong opinion on or are an expert in, so really anything's game. But here's a barrage of questions to get us started: What's on your bookshelf? What's the most formative criticism you've received? What compliments are you most proud of? What's one professed value that you sometimes struggle with? How does your job shape who you are? What's the difference between doing what is effective vs what's efficient? How do you use your social media? Where's your name from? What have you had to forgive yourself for? Who are the five top people in your life and what do you learn from them? Standard operating procedures: what routines keep you grounded when everything in your life scatters? And vice versa, what habits keep you open and exploring when you're grounded?", "capacity": 5, "host_id": 1, "location_id": 1, "seats_left": 5, "start_time": "8am", "end_time": "10am", "zip": "94103", "city": "San Francisco", "state": "CA")    

#NY CoffeeTime
CoffeeTime.create("date": "2018-2-14", "address": "Crumbs & Coffee", "address2": "423 5th Ave", "topics": "Whatever you want! Missed connections, food inspiration, hidden talents, random observations, rogue family members, the best city spots, everyday challenges, your quirks, lifestyle, art house cinema, adventures, stories from your travels, failed attempts, events, random trivia, Toronto street style, books you've read, my love of salsa dancing, our goals and dreams, your childhood best friend, and of course your deepest secrets ;). Or none of these. There’s almost no topic or theme that’s off the table!", "capacity": 5, "host_id": 4, "location_id": 2, "seats_left": 5, "start_time": "11am", "end_time": "1pm", "zip": "11215", "city": "Brooklyn", "state": "NY")    

#Boston
CoffeeTime.create("date": "2018-2-01", "address": "Render Coffee", "address2": "563 Columbus Ave", "topics": "We could talk about life in Boston, books, board games, travels both past and future, language, history, the color purple, storytelling, the optimal consistency of a blueberry muffin, life, love and our respective ways of pursuing happiness.", "capacity": 5, "host_id": 5, "location_id": 3, "seats_left": 5, "start_time": "8am", "end_time": "10am", "zip": "02118", "city": "Massachusetts", "state": "BST")    

#London
CoffeeTime.create("date": "2018-2-29", "address": "Monmouth Coffee", "address2": "27 Monmouth Street", "topics": "Life stories. Tea time with me will feel like a story time where strangers get to share their life experiences and/or talk about things on their mind that they need perspective on. I’m not a big fan of structure and rules and this and that. I just like to chill, let the conversation flow naturally, none of these pre-set topics. My only rule is be respectful and be you.", "capacity": 5, "host_id": 7, "location_id": 4, "seats_left": 5, "start_time": "4pm", "end_time": "6pm", "zip": "WC2H 9EU", "city": "London", "state": "UK")    
CoffeeTime.create("date": "2018-2-04", "address": "Kaffeine", "address2": "66 Great Titchfield Street", "topics": "anything you'd like except politics - culture // journeys in spirituality // history // your favourite adventure // the most embarrassing thing that's happened to you // what do you hold most true? // kindness // empathy // why are we even here? // salsa dancing // your favorite city in the world // music // podcast discoveries // cooking adventures // interior decoration tips // economics // science // sushi // yoga // your favorite gym routine // ", "capacity": 5, "host_id": 8, "location_id": 4, "seats_left": 5, "start_time": "3pm", "end_time": "5pm", "zip": "W1W 7QJ", "city": "London", "state": "UK")    

#Chicago
CoffeeTime.create("date": "2018-2-28", "address": "The Wormhole Coffee", "address2": "1462 N Milwaukee Ave", "topics": "Anything and everything! I am happy to listen, share or just drink coffee silently until one of us has to go. Company is nice too :)", "capacity": 5, "host_id": 9 , "location_id": 5, "seats_left": 5, "start_time": "12pm", "end_time": "2pm", "zip": "60622", "city": "Chicago", "state": "IL")    

#Seattle
CoffeeTime.create("date": "2018-2-20", "address": "Storyville Coffee Company", "address2": "94 Pike St", "topics": "I like to find discussion topics that are specific to the people I'm talking with. I care about drawing out truths of experience. Dancing in introspection with curiosity and humor is my goal. A sense of awkwardness is acceptable for me, as it indicates there's an unknown or unexplored idea.", "capacity": 5, "host_id": 10 , "location_id": 6, "seats_left": 5, "start_time": "1pm", "end_time": "3pm", "zip": "98101", "city": "Seattle", "state": "WA")    

#Los Angeles
CoffeeTime.create("date": "2018-2-19", "address": "Café de Leche", "address2": "5000 York Blvd", "topics": "Anything is fair game! Let's talk about things that people don't like talking about like why we're so scared to be alone and why we are the way we are. Honestly, anything is fair game as long as everyone is respectful and has a good attitude!", "capacity": 5, "host_id": 1 , "location_id": 7, "seats_left": 5, "start_time": "10am", "end_time": "12pm", "zip": "90042", "city": "Los Angeles", "state": "CA")    

#CoffeeTimeAttendance




CoffeeTimeAttendance.create("user_id": 11, "coffee_time_id": 1)
CoffeeTimeAttendance.create("user_id": 6, "coffee_time_id": 1)
CoffeeTimeAttendance.create("user_id": 12, "coffee_time_id": 2)
CoffeeTimeAttendance.create("user_id": 7, "coffee_time_id": 3)
CoffeeTimeAttendance.create("user_id": 8, "coffee_time_id": 3)
CoffeeTimeAttendance.create("user_id": 9, "coffee_time_id": 3)
CoffeeTimeAttendance.create("user_id": 1, "coffee_time_id": 4)
CoffeeTimeAttendance.create("user_id": 2, "coffee_time_id": 4)
CoffeeTimeAttendance.create("user_id": 3, "coffee_time_id": 4)
CoffeeTimeAttendance.create("user_id": 4, "coffee_time_id": 4)
CoffeeTimeAttendance.create("user_id": 5, "coffee_time_id": 4)
CoffeeTimeAttendance.create("user_id": 1, "coffee_time_id": 5)
CoffeeTimeAttendance.create("user_id": 13, "coffee_time_id": 5)
CoffeeTimeAttendance.create("user_id": 3, "coffee_time_id": 7)
CoffeeTimeAttendance.create("user_id": 4, "coffee_time_id": 7)
CoffeeTimeAttendance.create("user_id": 2, "coffee_time_id": 8)
CoffeeTimeAttendance.create("user_id": 16, "coffee_time_id": 10)