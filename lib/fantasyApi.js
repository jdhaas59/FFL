import {Client} from 'espn-fantasy-football-api/node-dev';

export const espnclient = new Client({
  leagueId: 1898006,
  espnS2: 'AEAl9SpbL3oSqnZ9FKTo08uK72jsut8rbjV1mAZwNfxpvl4flCqp8rw0h0tSDUUu24F6uREjHEvABJfJvydjJHwraIEUtF81yww5B0HYDlTmzdHcWh%2FsJKrjsy8kpbOfoBNhg3doGig5kqH0P2kJmjJbe54XmwuhEWVgfDNKzAn18ZBa4ppFaSB8pRWpqfqRCMBrZ9CHq6Y5%2FLrQ2CbkE2Nl4e2nFq0u0UzvNfuMfJLzcd%2BSzAu9Rwd45FlRa6BEDvWfLSSn2y4sdBnfTKyw%2BDaMPjyLWKpDonHQL7a%2BglgEXg%3D%3D',
  SWID: '{E5DE0003-C5EB-440F-9E00-03C5EB640F62}'
});

// export const fantasyApiClient = new Client({ leagueId: 1898006 }).setCookies({ espnS2: 'AEAl9SpbL3oSqnZ9FKTo08uK72jsut8rbjV1mAZwNfxpvl4flCqp8rw0h0tSDUUu24F6uREjHEvABJfJvydjJHwraIEUtF81yww5B0HYDlTmzdHcWh', SWID: {'E5DE0003-C5EB-440F-9E00-03C5EB640F62'} });
// fantasyApiClient.setCookies({ espnS2: 'AEAl9SpbL3oSqnZ9FKTo08uK72jsut8rbjV1mAZwNfxpvl4flCqp8rw0h0tSDUUu24F6uREjHEvABJfJvydjJHwraIEUtF81yww5B0HYDlTmzdHcWh', SWID: 'E5DE0003-C5EB-440F-9E00-03C5EB640F62' });
