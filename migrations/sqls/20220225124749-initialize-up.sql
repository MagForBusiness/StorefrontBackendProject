/* Replace with your SQL commands */

CREATE TABLE public.plant
(
    id serial NOT NULL,
    plant_name VARCHAR(100),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.plant
    OWNER to postgres;