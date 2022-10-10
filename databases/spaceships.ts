import { SpaceshipType } from './spaceshipDatabase';

export const spaceshipDatabase: SpaceshipType[] = [
  {
    id: 1,
    name: 'Nostromo',
    firstAppearence: 1979,
    knownFrom: 'Alien',
    description:
      "Commercial Towing Vessel Nostromo, an M-Class starfreighter property of the Weyland-Yutani Corporation, is a tug, a towing vessel, hauling an enormous (some 1.5 miles in length) ore refinery and 20 million tons of raw ore, weighing many times the mass of the Nostromo. The ship itself is still substantial, over 60,000 metric tons and almost 245 metres (800 feet) long, including three decks, four holds, stores, engines, and lots of pipes and ducts; its escape ship is called Narcissus. \nThe ship is fitted with a self-destruct system and separates itself from the ore refinery platform via an umibical detachment system. The interior features a large 'space jockey' cockpit for all crew piloting functions, a medical bay, dining area, central computer room, engineering areas, a hypersleep chamber and a labyrinthine network of connecting corridors.",
    price: 25000000,
    condition: 'Infested with Xenomorphs, slightly burnt on the inside',
  },
  {
    id: 2,
    name: 'Rocinante',
    knownFrom: 'The Expanse',
    firstAppearence: 2015,
    condition: 'Got shot at least once or twice',
    description:
      'The Rocinante is a Corvette-class light frigate with multiple roles, such as torpedo bomber and boarding party insertion. Originally commissioned as the MCRN (Martian Congressional Republic Navy) Tachi, the ship was stationed aboard the MCRN Battleship Donnager. She was rechristened by James Holden after he and his crew used her to escape from the Donnager.\n\nThe ship\'s construction is like a narrow building, layered floor by floor from the drive cone and reactor up to the engineering deck, to the machine shop, then the galley and crew cabins and medical bays, storage deck containing the crew airlock, then on up to the command deck and pilot\'s farthest forward. Under thrust, g-forces then provide a "down" amenable to human orientation.\n\nHer normal crew complement was over a dozen navy personnel and officers, and on many missions she’d also carry six marines. With a maximum capacity of twenty-two.',
    price: 60000000,
  },
  {
    id: 3,
    name: 'Millennium Falcon',
    knownFrom: 'Star Wars',
    firstAppearence: 1977,
    condition: 'Got shot repeatedly by the empire',
    description:
      'An extensively modified Corellian light freighter, the Millennium Falcon is a legend in smuggler circles and is coveted by many for being the fastest hunk of junk in the galaxy. Despite her humble origins and shabby exterior, the ship that made the Kessel Run in less than 12 parsecs has played a role in some of the greatest victories of the Rebel Alliance and the New Republic. The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises. A succession of owners, including Lando Calrissian and Han Solo, have made special modifications that boosted the freighter’s speed, shielding and firepower to impressive – and downright illegal – levels. The price of such tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky. Despite her flaws, she’s beloved by her owners – Han Solo and Chewbacca spent years searching the galaxy for the ship they once called home, rejoicing when they finally reclaimed her.',
    price: 120000000,
  },
  {
    id: 4,
    name: 'Avalon',
    knownFrom: 'Passengers',
    firstAppearence: 2016,
    condition: 'The reactor almost exploded, but the inside is like a forest!',
    description:
      'The Avalon has three long, thin modules that wrap around a common center a spin. The ship is powered by eight nuclear fusion reactoprs and can run autonomously, healing most systems even with the crew asleep or in hibernation, for which a large number of pods are available. To house the immense number of pods and sleeping cabinets, as well as recreational and working facilities, the Avalon measures about 1 kilometer in length.\nIt was one its way to Homestead II for colonization of exoplanets.',
    price: 250000000,
  },
  {
    id: 5,
    name: 'Serenity',
    knownFrom: 'Firefly',
    firstAppearence: 2002,
    condition: 'In the very best shape thanks to Kaylee',
    description:
      "Serenity is the Firefly-class ship, named after the Serenity Valley, captained by Malcolm Reynolds. The Firefly-class transport ship is a series of Multipurpose, Mid-Bulk Transport boats designed by Allied Spacecraft Corporation. The hulls and engines are constructed at ASC's shipyard at New Burbank, Osiris, with final outfitting being outsourced to a dozen smaller companies, including the newly formed Firefly Ship Works on Hera.\n   All Fireflys feature a large rear engine module, wing-mounted engines capable of vertical takeoff and landing, a centralized cargo section, and raised forward section holding the crew quarters and bridge.",
    price: 40000000,
  },
  {
    id: 6,
    name: 'Infinity',
    firstAppearence: 2012,
    knownFrom: 'Halo',
    price: 10000000,
    condition: 'Presumed to be destroyed',
    description:
      "UNSC Infinity (INF-101) was an experimental Infinity-class supercarrier of the UNSC Navy commissioned following the end of the Human-Covenant War.Built in secret utilizing technology recovered from Forerunner and Covenant sources during the war, Infinity is the UNSC's largest and most advanced multi-role vessel to date. Infinity serves under the direction of Fleet Command and was originally captained by Andrew Del Rio, and later Thomas Lasky. She is the current designated flagship of Expeditionary Strike Group 1 and serves as the ceremonial flagship for the United Nations Space Command",
  },
  {
    id: 7,
    name: 'Pods',
    firstAppearence: 2016,
    knownFrom: 'Arrival',
    price: 25000000,
    condition: 'As good as new, but humans were inside!',
    description:
      'Heptapod ships (referred to as "Pods") are 450-meter-tall vehicles composed of a black, stone-like material of unknown composition. The Pods are oval and somewhat flattened in shape, resembling an immense, obsidian concave lens. They completely lack any surface features; there are no visible thrusters or steering mechanisms, nor are any emissions whatsoever detectable from these Pods There is, however, a small vertical corridor leading to a transparent barrier, through which the Humans communicate with the Heptapods. \n \nThe interior of the ship behind the barrier is made of a white, glass-like material with a serrated texture. The inner atmosphere (presumably the atmospheric conditions found on the Heptapods\' homeworld) is thick and misty, and is dense enough to have properties between a liquid and a gas. Through this medium the Heptapods can fly through the air, and project their inky logograms within the mist.',
  },
  {
    id: 8,
    name: 'Endurance',
    knownFrom: 'Interstellar',
    firstAppearence: 2014,
    price: 60000000,
    condition:
      'Had to endure immense tidal forces near a black hole, but held up without a scratch',
    description:
      'The Endurance is the interplanetary spacecraft built by NASA as part of Project Endurance. It is the ship that carries Cooper, Amelia, Doyle, Romilly, CASE, and TARS on their voyage through the wormhole to a system located in another galaxy near the black hole Gargantua. The primary goal of the Endurance is to find, rescue, and resupply the few marooned scientists of the previous Lazarus missions in addition to establishing a permanent colony on a suitable planet that could sustain human life.\n The Endurance is a wheel of 12 boxy modules with docking ports at the hub. The ship spins 5.6 times per minute to create Earth-style artificial gravity. If a habitable planet is found, Endurance could be disassembled and its component modules used to build a base on the planet surface.',
  },
  {
    id: 9,
    price: 10000000,
    description:
      'The Event Horizon itself is a massive structure which could possibly be the size of a small town. At its core lies the gravity drive which allows the ship to travel terrific distances in moments by recreating a black hole inside the ship to go through and reappear elsewhere. The ship (and the gravity drive) were designed by Dr Weir and was built to not only be able to travel vast distances and sustain a whole crew, but also included a "lifeboat" system in which, in the event of an emergency, a series of explosives could be set off and the cockpit section of the ship could be separated and function as a temporary vessel.',
    name: 'Event Horizon',
    knownFrom: 'Event Horizon',
    condition:
      'The crew was demonically possessed, so its condition is accordingly',
    firstAppearence: 1997,
  },
  {
    id: 10,
    price: 15000000,
    description:
      'Discovery was made for Project Jupiter c. 1994, and was designed by Walter Curnow. It is 140 m in length. Its propulsion system is powered by a nuclear-powered magnetoplasmadynamic drive. 80 m of structure separate the reactor from the spherical crew habitation module, which consists of a pod bay, a centrifuge (which generated about one-sixth g), and the control deck. A supercomputer, designed by Sivasubramanian Chandrasegarampillai, was also onboard, known as HAL 9000, installed in a logistics and memory center that is off-limits to the crew.',
    name: 'Discovery One',
    knownFrom: '2001 - A space odyssey',
    condition: 'Kind of deteriorated after HAL was shut down',
    firstAppearence: 1968,
  },
];
