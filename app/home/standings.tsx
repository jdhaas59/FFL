import { Card, Title, Text,  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell, } from '@tremor/react'
import React from 'react'
import Link from 'next/link';



interface Result {
    wins: number | null;
    ties: number | null
    losses: number | null;
    points_for: number | null;
    points_against: number | null;
    final: number | null;
    team_id: number | null;
    teamName: string | null;
    acqs: number | null;
    trades: number | null;
    year: number | null;
}


export default function Standings({ standings }: { standings: Result[] }) {
  return (
    <Card className="flex-1 p-4 m-1">
    <Title>Standings</Title>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Team</TableHeaderCell>
          <TableHeaderCell>Wins</TableHeaderCell>
          <TableHeaderCell>Ties</TableHeaderCell>
          <TableHeaderCell>Losses</TableHeaderCell>
          <TableHeaderCell>Standing</TableHeaderCell>
          <TableHeaderCell>Points For</TableHeaderCell>
          <TableHeaderCell>Points Against</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {standings.map((mresult) => (
          <TableRow key={mresult.team_id}>
            <TableCell><Link className='text-sky-500' href={`/organization/${mresult.team_id}`}>{mresult.teamName}</Link></TableCell>
            <TableCell>
              <Text>{mresult.wins}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult.ties}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult.losses}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult.final}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult.points_for}</Text>
            </TableCell>
            <TableCell>
              <Text>{mresult.points_against}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}
