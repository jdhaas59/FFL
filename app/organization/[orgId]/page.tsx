import React from 'react'
import { Card, Title, Text } from '@tremor/react';
import {prisma} from '../../../lib/prisma'
import ResultTable from './resultTable'
import TeamHeader from './teamHeader';


interface PageProps {
    params: {
        orgId:string
    }
}


export default async function OrgPage({params}: PageProps) {
    //  Get team
    const results = await prisma.results.findMany({
        where: {
            team_id: parseInt(params.orgId, 10)       
        }
        });
    const team = await prisma.teams.findMany({
        where: {
            team_id: parseInt(params.orgId, 10),
            year: 2022       
        }
        });
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <TeamHeader team={team} />
      <Card className="mt-6">
        <ResultTable results={results} />
      </Card>
    </main>
  )
}

