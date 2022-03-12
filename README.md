# instruction before testing the project
# Storefront Backend Project
## set up 
### 1- database Shcema setup:
   #### A - Setup db and server instructions. :

--creat user
  CREATE ROLE mag WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION
  PASSWORD 'mag1234';

-- creat database
  CREATE DATABASE frontstoretest
    WITH 
    OWNER = mag
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

  CREATE DATABASE storefront
      WITH 
      OWNER = mag
      ENCODING = 'UTF8'
      LC_COLLATE = 'en_US.utf8'
      LC_CTYPE = 'en_US.utf8'
      TABLESPACE = pg_default
      CONNECTION LIMIT = -1;
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


  
 
 

### 2- managing environment variables
dbport number=5432
#### my .inv()  :

 POSTGRES_HOST= 'localhost'
 POSTGRES_DB= 'storefront'
 POSTGRES_TEST_DB= 'frontstoretest'
 POSTGRES_TEST_USER= 'mag'
 POSTGRES_TEST_PASSWORD= 'mag123'
 POSTGRES_USER= 'mag'
 POSTGRES_PASSWORD= 'mag1234'
 ENV='dev'
 BCRYPT_PASSWORD='speak-friend-and-enter'
 SALT_ROUNDS='10'
 TOKEN_SECRET='ALQAHERA!45'


### 3-API Endpoints
#### you can use postman URL link Json ( for test my Endpoint ) :
https://www.getpostman.com/collections/66a1f2830f338b2bfd3a

#### Or type manualy as shown below :
#### Products
- Index                  [localhost:3000/products-index] 
- Show                   [localhost:3000/product?id=1]
- Create [token required] [localhost:3000/add-product]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category(args: product category) 

#### Users
- Index [token required]        [localhost:3000/user-index]
- Show [token required]         [localhost:3000/user?id=7]
- Create N[token required]      [localhost:3000/signup]

#### Orders
- Current Order by user (args: user id)[token required]   [localhost:3000/ActiveorderbyuserId?id=9]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

### Orders endpoint [OPTIONAL Reviwer Ask me to do it]
- Index [localhost:3000/orders-index]
- Create[localhost:3000/NewOrder]
-show [localhost:3000/orders?id=1]