import { AppData } from '~/models/app-data';
import { Game } from '~/models/enum/game';

export const data: AppData = {
  mods: [
    { id: 'spa', name: 'Space Age', game: Game.Factorio, flags: 'spa' },
    { id: '2.0', name: '2.0', game: Game.Factorio, flags: '2.0' },
    { id: '2.0q', name: '2.0 + Quality', game: Game.Factorio, flags: '2.0q' },
    { id: '1.1', name: '1.1', game: Game.Factorio, flags: '1.1' },
    { id: '1.1e', name: '1.1 Expensive', game: Game.Factorio, flags: '1.1' },
    { id: '1.0', name: '1.0', game: Game.Factorio, flags: '1.1' },
    { id: '017', name: '0.17', game: Game.Factorio, flags: '1.1' },
    { id: '016', name: '0.16', game: Game.Factorio, flags: '1.1' },
    { id: '248', name: '248k Standalone', game: Game.Factorio, flags: '1.1' },
    { id: '248o', name: '248k Overhaul', game: Game.Factorio, flags: '1.1' },
    {
      id: '248kr2sxp',
      name: '248k + Krastorio 2 + SE',
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'aai', name: 'AAI Industry', game: Game.Factorio, flags: '1.1' },
    {
      id: 'ang',
      name: "Angel's Industries",
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'ango',
      name: "Angel's Industries Overhaul",
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'bio', name: 'Bio Industries', game: Game.Factorio, flags: '1.1' },
    { id: 'bob', name: "Bob's Mods", game: Game.Factorio, flags: '1.1' },
    {
      id: 'bobang',
      name: "Bob's & Angel's",
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'efs', name: 'Electric Furnaces', game: Game.Factorio, flags: '1.1' },
    {
      id: 'fpp',
      name: 'Factorio Plus Plus',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'fep',
      name: 'FactorioExtended Plus',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'ffw',
      name: 'Freight Forwarding',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'ir3',
      name: 'Industrial Revolution 3',
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'kr2', name: 'Krastorio 2', game: Game.Factorio, flags: '1.1' },
    {
      id: 'kr2p',
      name: 'Krastorio 2 Peaceful',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'kr2248',
      name: 'Krastorio 2 + 248K',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'kr2aai',
      name: 'Krastorio 2 + AAI',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'kr2ffw',
      name: 'Krastorio 2 + FFW',
      game: Game.Factorio,
      flags: '1.1',
    },
    {
      id: 'kr2sxp',
      name: 'Krastorio 2 + SE',
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'lls', name: 'Lunar Landings', game: Game.Factorio, flags: '1.1' },
    { id: 'mbf', name: 'Mobile Factory', game: Game.Factorio, flags: '1.1' },
    { id: 'msc', name: 'More Science', game: Game.Factorio, flags: '1.1' },
    { id: 'nls', name: 'Nullius', game: Game.Factorio, flags: '1.1' },
    { id: 'omf', name: 'Omnifluid', game: Game.Factorio, flags: '1.1' },
    {
      id: 'ps2',
      name: 'Production Scrap 2',
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'pys', name: 'Pyanodons', game: Game.Factorio, flags: '1.1' },
    { id: 'pysalf', name: 'Pyanodons + AL', game: Game.Factorio, flags: '1.1' },
    {
      id: 'qat',
      name: "Qatavin's More Stuff",
      game: Game.Factorio,
      flags: '1.1',
    },
    { id: 'ram', name: 'Rampant', game: Game.Factorio, flags: '1.1' },
    { id: 'sea', name: 'Sea Block', game: Game.Factorio, flags: '1.1' },
    { id: 'sbk', name: 'Spaceblock', game: Game.Factorio, flags: '1.1' },
    { id: 'sxp', name: 'Space Exploration', game: Game.Factorio, flags: '1.1' },
    { id: 'ulc', name: 'Ultracube', game: Game.Factorio, flags: '1.1' },
    { id: 'vbz', name: 'Very BZ', game: Game.Factorio, flags: '1.1' },
    { id: 'wt2', name: 'Warptorio2', game: Game.Factorio, flags: '1.1' },
    { id: 'xan', name: 'Xander Mod', game: Game.Factorio, flags: '1.1' },
    {
      id: 'dsp',
      name: 'Dyson Sphere Program',
      game: Game.DysonSphereProgram,
      flags: 'dsp',
    },
    { id: 'sfy', name: 'Satisfactory', game: Game.Satisfactory, flags: 'sfy' },
    {
      id: 'coi',
      name: 'Captain of Industry',
      game: Game.CaptainOfIndustry,
      flags: 'coi',
    },
    { id: 'tta', name: 'Techtonica', game: Game.Techtonica, flags: 'tta' },
    { id: 'ffy', name: 'Final Factory', game: Game.FinalFactory, flags: 'ffy' },
  ],
  modHashV0: [
    '1.1',
    '1.0',
    '0.17',
    '0.16',
    'bio-industries',
    'bobs',
    'bobs-angels',
    'dsp',
    'factorio-extended-plus',
    'industrial-revolution',
    'krastorio2',
    'krastorio2+se',
    'pyanodons',
    'pyanodons+al',
    'seablock',
    'space-exploration',
    'xander',
  ],
  modHash: [
    '1.1',
    '1.0',
    '017',
    '016',
    'bio',
    'bob',
    'bobang',
    'dsp',
    'fep',
    'ir2', // Obsolete
    'kr2',
    'kr2sxp',
    'pys',
    'pysalf',
    'sea',
    'sxp',
    'xan',
    'nls',
    'fpp',
    'ang',
    'msc',
    'sfy',
    'coi',
    'qat',
    '1.1e',
    '248',
    '248o',
    '248kr2sxp',
    'aai',
    'ir3',
    'efs',
    'kr2aai',
    'vbz',
    'ffw',
    'kr2ffw',
    'mbf',
    'omf',
    'kr2248',
    'sbk',
    'wt2',
    'ango',
    'kr2p',
    'ram',
    'tta',
    'utc',
    'ffy',
    'lls',
    'ulc',
    'ps2',
    '2.0',
    '2.0q',
  ],
};
