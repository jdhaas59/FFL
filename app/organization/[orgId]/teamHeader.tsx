import React from 'react'
import { Title, Text } from '@tremor/react';


interface Team {
    teamyear_id: number,
    team_id: number,
    team_name: string,
    team_owner: string,
    team_abbv: string,
    year: number
  }

export default function TeamHeader({ team }: { team: Team[] }) {
  return (
    <div>
    {team.map((team) => (
    <div key={team.team_id}>
      <Title >{team.team_name}</Title>
      <Text>
        {team.team_owner}
      </Text>
    </div>
    ))}
    </div>
  )
}
