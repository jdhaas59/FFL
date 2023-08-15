import React from 'react'
import { Card, Title, Text } from '@tremor/react'
import Headlines from './headlines'
import Standings from './standings'

export default function page() {
  return (

    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
    <Title className='text-center text-6xl'>The FFL</Title>
    <Text className='text-center text-lg'>
        Presented by Costco Pharmacy
      </Text>
    <div className="flex m-8">
    <Headlines />
    <Standings />
    </div>
    </main>
  )
}
