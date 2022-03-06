/* Replace with your SQL commands */
ALTER TABLE IF EXISTS order_prodcuts DROP CONSTRAINT IF EXISTS fky_order;
DROP INDEX IF EXISTS "fki_userId";
DROP TABLE order_prodcuts;
DROP TABLE  Orders;
DROP TABLE  Product
DROP TABLE users;