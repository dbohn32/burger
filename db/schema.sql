Create DATABASE burgers_db;

USE burgers_db;

Create Table burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KET (id)
);