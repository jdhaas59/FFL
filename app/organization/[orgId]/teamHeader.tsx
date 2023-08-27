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
    {team.map((t) => (
    <div key={t.teamyear_id}>
      <Title>{t.team_name}</Title>
      <Text>
        {t.team_owner}
      </Text>
    </div>
    ))}
    </div>
  )
}
