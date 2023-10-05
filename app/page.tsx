import { Card, Title, Text } from '@tremor/react';
import UsersTable from './table';
import {prisma} from '../lib/prisma'


// export const dynamic = 'force-dynamic';

export default async function IndexPage() {
  
    const groupResults = await prisma.results.groupBy({
      by: ['team_id'],
      where: {
        team_id: { in: [1, 2, 3, 5, 10, 12, 13, 15, 18, 19] },
      },
      _sum: {
        wins: true,
        losses: true,
      },
      _avg : {
        points_for: true,
        points_against: true,
        final: true
      },
      orderBy: {
        team_id: "asc"
    }
    })
    //  Get teams
    const teams = await prisma.teams.groupBy({
      by: ['team_id', 'team_name'],
      where: {
        year: 2022
      },
      orderBy: {
        team_id: "asc"
    }
    });
    // then match the ratings with posts
    const mappedResults = groupResults.map( (result: any, idx: any) => {
        return {
            ...result,
            teamName: teams[idx].team_name
        }
    })

    const sortedResults = mappedResults.slice().sort((a: any, b: any) => (b._sum.wins ?? 0) - (a._sum.wins ?? 0));



// console.log(teams)
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>The FLL presented by Costco Pharmacy</Title>
      <Text>
        Dynasty records all-time. Through 2023....
      </Text>
      <Card className="mt-6">
        <UsersTable sortedResults={sortedResults} />
      </Card>
    </main>
  );
}
