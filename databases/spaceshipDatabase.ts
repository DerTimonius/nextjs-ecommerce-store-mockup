import { sql } from './connect';

export type SpaceshipType = {
  id: number;
  name: string;
  condition: string | null;
  price: number;
  firstAppearence: number;
  description: string;
  knownFrom: string;
};

export async function getAllSpaceships() {
  const spaceships = await sql<SpaceshipType[]>`
  SELECT * FROM spaceships_migrated;`;
  return spaceships;
}

export async function getSingleSpaceshipById(id: number) {
  const [spaceship] = await sql<SpaceshipType[]>`
  SELECT * FROM spaceships_migrated WHERE id = ${id};`;
  return spaceship;
}
