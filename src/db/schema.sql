DROP DATABASE IF EXISTS rest_db;
CREATE DATABASE rest_db;

USE rest_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  custName VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  custPassword VARCHAR(45) NOT NULL
);

CREATE TABLE orders (
  orderId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customerId INT NOT NULL,
  tableId SMALLINT NOT NULL,
  isCooked BOOLEAN,
  isDelivered BOOLEAN,
  orderDate DATE,
  FOREIGN KEY (customerId)
  REFERENCES customers(id)
);

CREATE TABLE menu (
  dishId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dishName VARCHAR(25) NOT NULL,
  dishPrice DECIMAL
);

CREATE TABLE orderDetails (
  orderId INT,
  dishId INT,
  FOREIGN KEY (orderId)
  REFERENCES orders(orderId),
  FOREIGN KEY (dishId)
  REFERENCES menu(dishId)
);

