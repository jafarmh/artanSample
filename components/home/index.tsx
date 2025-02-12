'use client'
import { useContentQuery } from '@/data/services/Content'
import React from 'react'

function HomeComponent() {
    const {data}=useContentQuery();
    console.log(data,'================')
  return (
    <div>HomeComponent</div>
  )
}

export default HomeComponent