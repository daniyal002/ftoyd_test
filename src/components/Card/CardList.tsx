'use client'
import { useGetAllMatches } from '@/hook/MatchHook'
import React from 'react'
import { Card } from './Card'
import { useStatus } from '@/context/StatusContext'

export const CardList = () => {
  const { selectedStatus } = useStatus()
  const { matchesData } = useGetAllMatches()

  const filteredMatches = selectedStatus === "all"
    ? matchesData?.matches
    : matchesData?.matches.filter(match => match.status === selectedStatus)

  return (
    <div className='mt-5'>
      {filteredMatches?.map((match, index) => (
        <Card key={index} {...match} />
      ))}
    </div>
  )
}
