# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_13_202540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_time_attendances", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "coffee_time_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_time_id"], name: "index_coffee_time_attendances_on_coffee_time_id", unique: true
    t.index ["user_id"], name: "index_coffee_time_attendances_on_user_id", unique: true
  end

  create_table "coffee_times", force: :cascade do |t|
    t.date "date", null: false
    t.string "address", null: false
    t.string "topics", null: false
    t.integer "capacity"
    t.integer "host_id", null: false
    t.integer "location_id", null: false
    t.integer "seats_left"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "start_time"
    t.string "end_time"
    t.index ["host_id"], name: "index_coffee_times_on_host_id", unique: true
    t.index ["location_id"], name: "index_coffee_times_on_location_id", unique: true
  end

  create_table "locations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "email"
    t.string "phone_number"
    t.string "string"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
