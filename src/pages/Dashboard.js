import React from 'react'
import InfoCard from '../components/Cards/InfoCard'
import Carousel from '../components/Carousel'
import PageTitle from '../components/Typography/PageTitle'

function Dashboard() {
  return (
    <>
      <Carousel />
      <div className="flex justify-between">
        <h1 className="my-6 p-1 text-2xl font-semibold text-gray-700 dark:text-gray-200">Movie Collections</h1>
        <div className="my-6  p-2 text-black dark:text-black bg-white rounded-lg text-xs cursor-pointer lg:text-lg sm:text-sm">All Collections</div>
      </div>




      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Collection of films that amaze" genre="Adventure" number="24">
        </InfoCard>

        <InfoCard title="Collection of films that amaze" genre="Fantsay" number="19">
        </InfoCard>

        <InfoCard title="Collection of films that amaze" genre="Comedy" number="17">
        </InfoCard>

        <InfoCard title="Collection of films that amaze" genre="Drama" number="34">
        </InfoCard>
      </div>

      <PageTitle>New</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

        <InfoCard title="Collection of films that amaze" genre="Action" number="34">
        </InfoCard>

        <InfoCard title="Collection of films that amaze" genre="Drama" number="34">
        </InfoCard>

        <InfoCard title="Collection of films that amaze" genre="Fantasy" number="34">
        </InfoCard>
        <InfoCard title="Collection of films that amaze" genre="Fantasy" number="34">
        </InfoCard>
      </div>

    </>
  )
}

export default Dashboard
