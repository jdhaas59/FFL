import { Card, Title, Text } from '@tremor/react'
import React from 'react'

import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
  } from '@tremor/react';

interface PRank {
pr_id: number,
week: number,
team_name: string,
rank: number,
year: number,
archive: boolean
}

export default function Power({ prankings }: { prankings: PRank[] }) {
  return (
    <Card className="flex-1 p-4 m-1">
    {/* Main section content */}
    <Title>WEEK {prankings[0].week} Power Rankings</Title>
    <Table>
      <TableBody>
        {prankings.map((rank) => (
          <TableRow key={rank.pr_id}>
            <TableCell></TableCell>
            <TableCell>
              <Text>{rank.rank}</Text>
            </TableCell>
            <TableCell>
              <Text>{rank.team_name}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}
