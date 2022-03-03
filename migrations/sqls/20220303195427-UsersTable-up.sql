/* Replace with your SQL commands */
CREATE TABLE users
(
    user_id serial NOT NULL,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    username VARCHAR(100),
    email VARCHAR(150),
    userpassword VARCHAR(150),
    token VARCHAR(450),
    PRIMARY KEY (user_id)
);
