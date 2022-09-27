DROP DATABASE IF EXISTS rest_db;
CREATE DATABASE rest_db;

USE rest_db;

CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL
);

CREATE TABLE orders (
  orderId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customerId INT NOT NULL,
  tableId SMALLINT NOT NULL,
  isCooked BOOLEAN,
  isDelivered BOOLEAN,
  orderDate DATE,
  totalCost DECIMAL,
  FOREIGN KEY (customerId)
  REFERENCES customers(id)
);

CREATE TABLE orderDetails (
  orderId INT,
  dishId INT,
  quantity INT,
  FOREIGN KEY (orderId)
  REFERENCES orders(orderId),
  FOREIGN KEY (dishId)
  REFERENCES menu(dishId)
);

CREATE TABLE menu (
  dishId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dishName VARCHAR(25) NOT NULL,
  dishPrice DECIMAL,
  dishType DECIMAL
);



