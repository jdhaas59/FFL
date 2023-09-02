'use client'
import { useRouter } from 'next/router';
import React from 'react'
// import { useState, useEffect } from 'react';


export default async function MatchupsPage() {
    // const router = useRouter();

    const req = await fetch("http://localhost:3000/api/league", {method:"GET"})
    const data = await req.json()
  return (
    <div>
    <h1>League Details</h1>

      <div>
        <p>{data}</p>
        {/* Add more league details as needed */}
      </div>
      <p>Loading...</p>
  </div>
  )
}
