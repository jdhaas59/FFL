// 'use client'
import React from 'react'
import { Card, Title, Text } from '@tremor/react'
import Headlines from './headlines'
import Standings from './standings'
import {prisma} from '../../lib/prisma'
import Power from './power'

export default async function page() {

    const headlines = await prisma.headlines.findMany({
        where: {
            archive: false    
        }
        });
    const prankings = await prisma.power_rankings.findMany({
        where: {
            archive: false    
        }
        });

      const Results = await prisma.results.findMany({
        where: {
          year: 2023
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
        const mappedResults = Results.map( (result: any, idx: any) => {
            return {
                ...result,
                teamName: teams[idx].team_name
            }
        })
    
        const standings = mappedResults.sort((a, b) => {
          if (a.wins !== b.wins) {
              return b.wins - a.wins; // Sort by wins in descending order
          }
          return b.points_for - a.points_for; // Sort by points_for in descending order if wins are the same
      });;

      
  return (

    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
    <Title className='text-center text-6xl'>The FFL</Title>
    <Text className='text-center text-lg'>
        Presented by Costco Pharmacy
      </Text>
    <div className="flex flex-wrap m-8">
    <Headlines headlines={headlines} />
    <Power prankings={prankings}/>
    <Standings standings={standings}/>
    </div>
    </main>
  )
}
