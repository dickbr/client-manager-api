CREATE TABLE public.clients (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar NOT NULL,
	cellphone varchar NOT NULL,
	email varchar NOT NULL,
	lat TYPE float8 USING lat::float8 NOT NULL ,
	log TYPE float8 USING lat::float8 NOT NULL,
  created_at timestamptz NOT NULL DEFAULT current_timestamp,
  updated_at timestamptz NOT NULL DEFAULT current_timestamp
);
