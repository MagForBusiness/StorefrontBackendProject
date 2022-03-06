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

CREATE TABLE IF NOT EXISTS Product
(
    id serial,
    name character varying(150),
    price double precision,
    category numeric,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Orders
(
    id serial,
    product_id numeric,
    quantity double precision,
    user_id numeric,
    status_of_order VARCHAR(20) DEFAULT 'active',
    CONSTRAINT "Orders_pkey" PRIMARY KEY (id)
)

CREATE INDEX IF NOT EXISTS "fki_product_foreignKey"
    ON Orders USING btree
    (product_id ASC NULLS LAST);

CREATE INDEX IF NOT EXISTS "fki_userId"
    ON Orders USING btree
    (user_id ASC NULLS LAST);