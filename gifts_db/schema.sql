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

