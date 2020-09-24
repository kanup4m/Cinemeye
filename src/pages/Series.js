import { image } from 'faker'
import React from 'react'
import InnerCard from '../components/Cards/InnerCard'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import Image from '../assets/img/wallhaven-13exl1.jpg'
import { Button } from '@windmill/react-ui'
import {
  HeartIcon,
  PlayIcon,
} from '../icons'

function Series() {
  return (
    <>
      <div className="image-container py-30 text-white px-12 rounded-lg " style={{
        background: `url(${Image})`, backgroundPosition: "center", backgroundSize: "cover"
      }}>
        <br />
        <div className="flex justify-between">
          <div className>Action | Adventure | Fantasy | 2018</div>
          <div>IMDB 9.4 | 7.4</div>
        </div>
        <h1 className="text-4xl font-extrabold py-2">Westworld</h1>
        <div className="text-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid distinctio <br /> voluptas beatae in, recusandae eaque, sint nam corporis earum asperiores! Optio  <br /> reiciendis voluptatum culpa ipsam assumenda nesciunt dolorum eligendi.</div>
        <div className="py-8">
          Seasons: <br /><br />
          <button class="  hover:bg-white text-black font-bold py-2 px-4 rounded-full" style={{ backgroundColor: "white" }}>
            Season 1

          </button>&nbsp;&nbsp;
          <button class="bg-transparent hover:bg-gray-400 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded-full">
            Season 2
          </button>&nbsp;&nbsp;
          <button class="bg-transparent hover:bg-gray-400 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded-full">
            Season 3
          </button>&nbsp;&nbsp;
          <button class="bg-transparent hover:bg-gray-400 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded-full">
            Season 4
          </button>&nbsp;&nbsp;
          <button class="bg-transparent hover:bg-gray-400 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded-full">
            Season 5
          </button>


        </div>



      </div>

      <div className="flex justify-between text-white my-4">
        <div className="play-icon flex justify-evenly w-3/6 ">
          <div className="w-4/6 content">
            <img src={Image} alt="image" className="rounded-lg cursor-pointer opacity-75" />
            <div className="text"><h2>Lorem ipsum dolor sit.</h2></div>

          </div>

          <div>
            <div className="p-2">Continue Watching</div>
            <div className="p-2 text-gray-600">Season 1 | Episode 1</div>
            <div className="p-2 ">"The Story"</div>
          </div>

        </div>
        <div>
          <button class="bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <HeartIcon className="w-6 h-6" aria-hidden="true" />
            <span>&nbsp;&nbsp;&nbsp;In favourites</span>
          </button>
          <br />
          <br />

          <button class="bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <HeartIcon className="w-6 h-6" aria-hidden="true" />
            <span>&nbsp;&nbsp;&nbsp;Watch trailer</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-white my-4">
        <div>
          <h1>Description</h1>
          <p className="text-gray-400"> Set at the intersection of the near future and the reimagined past, <br /> explore a world in which every human appetite can be indulged <br /> without consequence.</p>
        </div>
        <div>
          <div>
            <span className="text-gray-600 mr-5">Directors</span>
            <span className="float-right">Peter, Tony, Chris</span>
          </div>
          <div><span className="text-gray-600 mr-5">Cast</span>
            <span className="float-right"> Peter, Tony, Chris</span>
          </div>
          <div><span className="text-gray-600 mr-5">Country</span>
            <span className="float-right"> Peter, Tony, Chris</span>
          </div>
          <div><span className="text-gray-600 mr-5">Production</span>
            <span className="float-right"> Peter, Tony, Chris</span>
          </div>

        </div>

      </div>
      <PageTitle>TV Series</PageTitle>
      <SectionTitle>Season 1 Series</SectionTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

        <InnerCard title="Episode 1" genre="The Original">
        </InnerCard>

        <InnerCard title="Episode 2" genre="Chestnut" >
        </InnerCard>

        <InnerCard title="Episode 3" genre="The Stray" >
        </InnerCard>
        <InnerCard title="Episode 4" genre="Dissonce Story">
        </InnerCard>
      </div>
    </>
  )
}

export default Series
