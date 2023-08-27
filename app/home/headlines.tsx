import { Card, Title,Text, List, ListItem } from '@tremor/react'
import React from 'react'

interface Headline {
    h_id: number
    week: number | null,
    headline: string | null,
    year: number| null,
    archive: boolean | null
  }

export default function Headlines({ headlines }: { headlines: Headline[] }) {
  return (
    <Card className="flex-none bg-gray-800 text-white p-4 m-1">
    {/* Sidebar content */}
    <Title className='text-stone-50'>Headlines</Title>
    <Text>WEEK {headlines[0].week}</Text>
    <List>
    {headlines.map((hl) => (
        <ListItem key={hl.h_id}>
        <span className='text-stone-50 whitespace-break-spaces' >{hl.headline}</span>
      </ListItem>
    ))}
    </List>
  </Card>
  )
}
