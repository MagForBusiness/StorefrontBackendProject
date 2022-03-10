# instruction before testing the project
# Storefront Backend Project
## set up 
### 1- database Shcema setup:
   #### A - create a database for test and production :
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
      OWNER = postgres
      ENCODING = 'UTF8'
      LC_COLLATE = 'en_US.utf8'
      LC_CTYPE = 'en_US.utf8'
      TABLESPACE = pg_default
      CONNECTION LIMIT = -1;
  #### B - using  migration to setup Project database ( databaseSetUp  ).
 

### 2- managing environment variables
#### my .inv  :

 POSTGRES_HOST= 'localhost'
 POSTGRES_DB= 'storefront'
 POSTGRES_TEST_DB= 'frontstoretest'
 POSTGRES_TEST_USER= 'mag'
 POSTGRES_TEST_PASSWORD= 'mag123'
 POSTGRES_USER= 'postgres'
 POSTGRES_PASSWORD= '1234'
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










