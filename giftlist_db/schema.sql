CREATE DATABASE giftlist_db;

USE giftlist_db;

CREATE TABLE gifts
(
	id int NOT NULL
	AUTO_INCREMENT,
	title varchar
	(255) NOT NULL,
    city_state varchar
	(255) NOT NULL,
	category varchar
	(255) NOT NULL,
	item_description varchar
	(255) NOT NULL,
	contact varchar
	(255) NOT NULL,
	img_link varchar
	(255) NOT NULL,
	PRIMARY KEY
	(id)
);


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	pass_word varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
