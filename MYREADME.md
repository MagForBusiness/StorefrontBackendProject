# instruction before testing the project
# Storefront Backend Project
## set up 
### 1- database Shcema setup:
  using  migration to setup Project database ( databaseSetUp  ).
### 2- managing environment variables
because of i setup my .inv data to be ignore in GitIgnore file the content of env is:

 POSTGRES_HOST= 'localhost'
 POSTGRES_DB= 'storefront'
 POSTGRES_TEST_DB= 'postgres'
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
- Index                  [] 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category(args: product category) 

#### Users
- Index [token required]        [localhost:3000/user-index]
- Show [token required]         [localhost:3000/user?id=7]
- Create N[token required]      [localhost:3000/signup]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]










