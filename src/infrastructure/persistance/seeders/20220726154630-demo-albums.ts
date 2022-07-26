import { QueryInterface } from 'sequelize/types';
import IMigration from '../IMigration';

const seeder: IMigration = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Albums', demoAlbums);
    await queryInterface.bulkInsert('Tracks', demoTracks);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tracks', {
      where: { id: demoTracks.map((track) => track.id) },
    });
    await queryInterface.bulkDelete('Albums', {
      where: { id: demoAlbums.map((track) => track.id) },
    });
  },
};

export default seeder;

const demoTracks = [
  {
    id: 'e5ebf676-2506-4e6d-b0d7-6b78c20f8710',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'After you hear this you are older',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '2a0e20f4-4a8d-4832-9449-caf4bb4011ae',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'I lack an emotion',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '0cfdc350-c2c6-4063-baf1-856ddc2e4271',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'This song is not good',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '1b659f1b-d2bf-4dae-b3be-c5f593a0e959',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "I can't afford mastering",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '4dfeb157-1143-4f31-9c9f-1e7a0a7ab740',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Words you will never understand',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'e5fa7b15-301d-46da-b7bc-16015e95b83d',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Kitchens are best for making sound effects',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '1f5fd381-39f1-4a95-ab30-c469cdb47fdb',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Minecraft is acid',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'fb3cec0b-77a8-49b3-ad45-03921bd553c4',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'I will perhaps never meet you in person',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '1544659e-941f-4808-a5fc-8e19461f4024',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'In Berlin people act differently',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '9d3f501d-735d-4ef4-ba5c-761a5275c110',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Droopy likes ricochet',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '18e23d63-52b8-42ea-a908-1830823b9009',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Droopy likes your face',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '62c8530b-b88c-407a-9d2a-d26073302508',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "I don't need to know you to be in love",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'a582e824-b97a-4082-a2cf-116ec66f94d4',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Sometimes I make video game music',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '36fa0452-3152-4c3d-8c71-f18fb3f66797',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'One second',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '65a79d12-dbc4-48db-b941-1eefc70fe63d',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '18d393f2-0814-4b15-956d-2823101286bd',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '4535e2d7-ae5e-4020-95dd-41a50bd2bf51',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '2464e71b-1836-4d64-9993-3a5945f7474e',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '13d2c83e-34f6-4928-af32-4970fbe2b6d7',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '4dd9c943-0cb5-47ad-af3d-1af3194291c4',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '91580d3e-bb90-4323-84ed-c45121019bc4',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "Long songs are for people who don't have time to make them short",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '844b6902-8745-4d22-b98d-13afe74d0802',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "If you don't know what to do just steal the amen break",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '52766c08-2ef1-410f-877c-dc352b350e6e',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Please do',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '69527d59-dbc3-41fe-93af-4dfc89822ca7',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: '26',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '754a3895-7808-40fb-a759-1a93d7f77882',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Who cares but me',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'cf0d0e24-b512-4443-affb-84857663aae7',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: "I don't sing",
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'f6e7b862-8101-4b55-a100-3e318ab8eb23',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'I jate my hob',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: '6cafb288-a669-4b87-a656-6034ed275fe6',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Lack of creativity is dangerous in Berlin',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'b7f4b2a7-1ba6-482f-bb0b-4fc0c0a84632',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Life changing moments seem minor in pictures',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },
  {
    id: 'f2bed18a-b5d2-4849-8fab-17158838102f',
    albumId: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'What now?',
    genre: 'ambient,dnb,house,electronica,breakbeat',
    artist: 'C418',
  },

  {
    id: '7d8fa6d7-2a49-41e9-b7f8-66350ce439aa',
    name: 'Intro',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '70fbaf7b-619f-42fc-9757-7ad2ca9b4cf5',
    name: 'Native',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: 'b5a77fa6-9d02-48f4-be75-37b938430319',
    name: 'Decay',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '64818d21-fbc7-4542-a113-4e6fe910ba42',
    name: 'Oort Cloud',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '838d8088-2b33-46c2-97a4-32565e00ab08',
    name: 'Tides',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '4b11b974-49f1-4633-9b65-4828e555e3fe',
    name: 'Nights (I Wish I Could Be There)',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '93fcfc2c-8c04-45b1-a610-7ac1fcecf277',
    name: 'Odyssey',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '3f6e475d-ca93-4b23-89eb-f3dffefbaf99',
    name: 'New Machines',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: 'b612d621-e0b9-41c6-a99b-e8ab2fea44d4',
    name: 'Resonance',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '52493bd2-dda0-408c-9f1d-1361455a5a12',
    name: 'Come Back Down',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: 'd4faf8e1-e85f-4c4f-a7c7-0a6d8b83bce9',
    name: 'Half Moon',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
  {
    id: '83ba182b-b16c-44ef-b3f3-c1dae79893d0',
    name: 'On The Way Out',
    albumId: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    genre: 'synthwave',
    artist: 'HOME',
  },
];

const demoAlbums = [
  {
    id: 'f1de2223-1d7e-4c98-a339-9da6db13e553',
    name: 'Life changing moments seem minor in pictures',
  },
  {
    id: 'ff3f65c3-d7cc-4a24-b880-9b10dc8b9407',
    name: 'Odyssey',
  },
];
