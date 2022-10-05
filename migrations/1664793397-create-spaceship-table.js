exports.up = async (sql) => {
  await sql`
	CREATE TABLE spaceships_migrated(
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name varchar(30) NOT NULL,
		price integer NOT NULL,
		description varchar(5000) NOT NULL,
		condition varchar(100),
		known_from varchar (30) NOT NULL,
		first_appearence integer NOT NULL
	)`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE spaceships_migrated`;
};
