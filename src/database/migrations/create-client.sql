CREATE TABLE public.clients (
    id uuid NOT NULL DEFAULT uuid_generate_v4 (), "name" varchar NOT NULL, cellphone varchar NOT NULL, email varchar NOT NULL, lat float8 NOT NULL, log float8 NOT NULL, created_at timestamptz NOT NULL DEFAULT current_timestamp, updated_at timestamptz NOT NULL DEFAULT current_timestamp
);