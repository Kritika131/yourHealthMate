"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const SpecialityPage = async({params}) => {
    const {speciality} = await params
  return (
    <div>SpecialityPage</div>
  )
}

export default SpecialityPage