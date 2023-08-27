import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

import Link from 'next/link';




interface Result {
  _sum: {
    wins: number | null;
    losses: number | null;
  };
  _avg: {
    points_for: number | null;
    points_against: number | null;
    final: number | null;
  };
  team_id: number | null;
  teamName: string | null;
}

export default async function UsersTable({ sortedResults }: { sortedResults: Result[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Team</TableHeaderCell>
          <TableHeaderCell>Wins</TableHeaderCell>
          <TableHeaderCell>Losses</TableHeaderCell>
          <TableHeaderCell>Avg Final Ranking</TableHeaderCell>
          <TableHeaderCell>Avg Points For</TableHeaderCell>
          <TableHeaderCell>Avg Points Against</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedResults.map((mresult) => (
          <TableRow key={mresult.team_id}>
            <TableCell><Link className='text-sky-500' href={`/organization/${mresult.team_id}`}>{mresult.teamName}</Link></TableCell>
            <TableCell>
              <Text>{mresult._sum.wins}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult._sum.losses}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult._avg.final}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult._avg.points_for}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult._avg.points_against}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
