-- create database and user for cidenet database --
CREATE DATABASE IF NOT EXISTS api_cidenet_db;
CREATE user IF NOT EXISTS 'cidenet_user_db'@'localhost' identified BY 'cidenet_pswd_db';
GRANT usage ON *.* TO 'cidenet_user_db'@'localhost';
GRANT all privileges ON api_cidenet_db.* TO 'cidenet_user_db'@'localhost';

-- HOST=localhost PORT=3306 USER=cidenet_user_db DATABASE=api_cidenet_db PASSWORD=cidenet_pswd_db go run main.go

