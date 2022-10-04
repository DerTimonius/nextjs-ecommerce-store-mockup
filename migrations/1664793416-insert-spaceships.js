import { spaceshipDatabase } from '../databases/spaceships';

exports.up = async (sql) => {
  await sql`
		INSERT INTO spaceships_migrated ${sql(
      spaceshipDatabase,
      'name',
      'price',
      'description',
      'condition',
      'known_from',
      'first_appearence',
    )}
		`;
};

exports.down = async (sql) => {
  for (const spaceship of spaceshipDatabase) {
    await sql`
		DELETE FROM spaceships_migrated
		WHERE
    name = ${spaceship.name} AND
    price = ${spaceship.price} AND
    description = ${spaceship.description} AND
    condition = ${spaceship.condition}`;
  }
};
