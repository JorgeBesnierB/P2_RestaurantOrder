DROP DATABASE IF EXISTS rest_db;
CREATE DATABASE rest_db;

USE rest_db;

CREATE TABLE customer  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
);

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customer VARCHAR(45) NOT NULL,
  FOREIGN KEY (customer)
  REFERENCES customer(id),
  tableId SMALLINT NOT NULL,
  isCooked BOOLEAN,
  isDelivered BOOLEAN,
  date DATE,
);

CREATE TABLE menu(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dishName VARCHAR(25) NOT NULL,
  price DECIMAL,
);

CREATE TABLE orderDetails(
  orderId INT,
  FOREIGN KEY (order)
  REFERENCES orders(id),
  dishId INT,
  FOREIGN KEY (dishId)
  REFERENCES menu(id),
)

