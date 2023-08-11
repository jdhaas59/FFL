import { Card, Title, Text } from '@tremor/react';
// import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import UsersTable from './table';
import {prisma} from '../lib/prisma'

export const dynamic = 'force-dynamic';

export default async function IndexPage({
}: {
  // searchParams: { q: string };
}) {
  // const search = searchParams.q ?? '';
  // const users = await queryBuilder
  //   .selectFrom('users')
  //   .select(['id', 'name', 'username', 'email'])
  //   .where('name', 'like', `%${search}%`)
  //   .execute();

const teams = await prisma.teams.findMany()
// console.log(teams)
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        {/* <UsersTable users={users} /> */}
      </Card>
      <h1 className="font-bold">Todos</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.teamyear_id}>{team.team_name}</li>
        ))}
      </ul>
    </main>
  );
}
