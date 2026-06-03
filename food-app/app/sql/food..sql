CREATE DATABASE fooddb;

CREATE TABLE IF NOT EXISTS food_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT
);

-- category is veg or non-veg

insert into food_items (name, category, price, description) values 
('Burger', 'non-veg', 150, 'A delicious burger'),
('Pizza', 'non-veg', 200, 'A delicious pizza'),
('Pasta', 'veg', 100, 'A delicious pasta'),
('Salad', 'veg', 80, 'A delicious salad'),
('Fries', 'veg', 50, 'A delicious fries'),
('Chicken Wings', 'non-veg', 120, 'Delicious chicken wings'),
('Veggie Wrap', 'veg', 90, 'A delicious veggie wrap'),
('Grilled Cheese', 'veg', 70, 'A delicious grilled cheese sandwich'),
('Fish and Chips', 'non-veg', 180, 'A delicious fish and chips dish'),
('Veggie Burger', 'veg', 130, 'A delicious veggie burger');

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
