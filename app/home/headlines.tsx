import { Card, Title, List, ListItem } from '@tremor/react'
import React from 'react'

interface Headline {
    h_id: number
    week: number,
    headline: string,
    year: number
  }

export default function Headlines({ headlines }: { headlines: Headline[] }) {
  return (
    <Card className="flex-none bg-gray-800 text-white w-2/3 p-4 m-1">
    {/* Sidebar content */}
    <Title className='text-stone-50'>Headlines</Title>
    <List>
    {headlines.map((hl) => (
        <ListItem key={hl.h_id}>
        <span>{hl.headline}</span>
      </ListItem>
    ))}
    </List>
  </Card>
  )
}
