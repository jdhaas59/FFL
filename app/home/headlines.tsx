import { Card, Title, List, ListItem } from '@tremor/react'
import React from 'react'

export default function Headlines() {
  return (
    <Card className="flex-none bg-gray-800 text-white w-2/3 p-4 m-1">
    {/* Sidebar content */}
    <Title className='text-stone-50'>Headlines</Title>
    <List>
        <ListItem>
          <span>Underdog Squad Shocks Champions in Nail-Biting Match</span>
        </ListItem>
        <ListItem>
          <span>Underdog Squad Shocks Champions in Nail-Biting Match</span>
        </ListItem>
        <ListItem>
          <span>Underdog Squad Shocks Champions in Nail-Biting Match</span>
        </ListItem>
    </List>
  </Card>
  )
}
