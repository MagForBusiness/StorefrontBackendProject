/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS users
(
    user_id serial NOT NULL,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    username VARCHAR(100),
    email VARCHAR(150),
    userpassword VARCHAR(150),
    PRIMARY KEY (user_id)
);


CREATE TABLE IF NOT EXISTS Orders
(
    id serial,
    user_id numeric,
    status_of_order VARCHAR(20) DEFAULT 'active',
    CONSTRAINT "Orders_pkey" PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS Product
(
    id serial,
    name VARCHAR(100),
    price double precision,
    category numeric,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS order_prodcuts
(
    order_id integer,
    product_id integer,
    quantity double precision,
    CONSTRAINT pk_order_product PRIMARY KEY (order_id, product_id),
    CONSTRAINT fky_product FOREIGN KEY (product_id)
        REFERENCES Product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);


CREATE INDEX IF NOT EXISTS "fki_userId"
    ON Orders USING btree
    (user_id ASC NULLS LAST);

ALTER TABLE IF EXISTS order_prodcuts
    ADD CONSTRAINT fky_order FOREIGN KEY (order_id)
    REFERENCES Orders (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


