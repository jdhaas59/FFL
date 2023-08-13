import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
    
  interface Result {
    result_id: number;
    team_id: number;
    final: number;
    points_for: number;
    points_against: number;
    wins: number;
    ties: number;
    losses: number;
    acqs: number;
    trades: number;
    year: number;
  }
  
  export default async function ResultsTable({ results }: { results: Result[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Year</TableHeaderCell>
            <TableHeaderCell>Wins</TableHeaderCell>
            <TableHeaderCell>Ties</TableHeaderCell>
            <TableHeaderCell>Losses</TableHeaderCell>
            <TableHeaderCell>Final Ranking</TableHeaderCell>
            <TableHeaderCell>Avg Points For</TableHeaderCell>
            <TableHeaderCell>Avg Points Against</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((mresult) => (
            <TableRow key={mresult.team_id}>
              <TableCell>{mresult.year}</TableCell>
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
    );
  }
  