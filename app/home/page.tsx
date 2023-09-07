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
  return (

    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
    <Title className='text-center text-6xl'>The FFL</Title>
    <Text className='text-center text-lg'>
        Presented by Costco Pharmacy
      </Text>
    <div className="flex flex-wrap m-8">
    <Headlines headlines={headlines} />
    <Power prankings={prankings}/>
    <Standings />
    </div>
    </main>
  )
}
