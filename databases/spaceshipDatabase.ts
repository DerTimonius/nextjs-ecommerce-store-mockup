import { sql } from './connect';

export type Spaceship = {
  id: number;
  name: string;
  condition: string | null;
  price: number;
  firstAppearence: number;
  description: string;
  knownFrom: string;
};

export async function getAllSpaceships() {
  const spaceships = await sql<Spaceship[]>`
  SELECT * FROM spaceships_migrated;`;
  return spaceships;
}

export async function getSingleSpaceshipById(id: number) {
  const [spaceship] = await sql<Spaceship[]>`
  SELECT * FROM spaceships_migrated WHERE id = ${id};`;
  return spaceship;
}
export async function getSingleSpaceshipByName(name: string) {
  const [spaceship] = await sql<Spaceship[]>`
  SELECT * FROM spaceships_migrated WHERE name = ${name};`;
  return spaceship;
}
