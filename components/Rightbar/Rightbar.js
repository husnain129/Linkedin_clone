import React from 'react'
import { SiLinkedin } from 'react-icons/si'
import { Tags } from '../../Utils'

const Rightbar = () => {
  return (
    <div className="flex h-auto w-full flex-col items-start pt-4">
      <div className="h-auto w-[72%] rounded-lg border border-[#d3d2d0] bg-white shadow-md">
        <p className="pt-2 pl-3 font-bold text-gray-600">Add to your feed</p>
        <Feeds url="/cup.jpg" />
        <Feeds url="/joker.jpg" />
        <Feeds url="/girl.jpg" />
      </div>
      <div className="sticky top-8 flex w-[72%] flex-wrap items-center justify-around gap-1 px-12 pt-2">
        {Tags.map((e, i) => (
          <p
            key={i}
            className="cursor-pointer text-sm text-gray-600 hover:underline"
          >
            {e}
          </p>
        ))}
      </div>
      <div className="sticky top-36 flex w-[72%] items-center justify-center gap-1 pt-4">
        <p className="font-semibold text-[#0a66c2]">Linked</p>
        <SiLinkedin size={15} style={{ color: '#0a66c2' }} />
        <p className="text-sm font-light">LinkedIn Corporation © 2022</p>
      </div>
    </div>
  )
}

const Feeds = ({ url }) => {
  return (
    <div className="flex h-auto w-[90%] flex-col gap-1 py-3 px-4">
      <div className="flex items-center justify-start gap-2">
        <img
          src={url}
          className="h-14 w-14 rounded-full object-cover"
          alt="cup"
        />
        <div>
          <p className="text-base">Remote Works</p>
          <p className="text-sm text-gray-600">
            Company • Information Technology and Services
          </p>
        </div>
      </div>
      {/* <div> */}
      <button className="ml-14 h-8 w-[90px] cursor-pointer rounded-full border-[1.5px] border-[#757372] font-semibold text-[#757372] hover:border-2 hover:bg-[#75737236]">
        + Follow
      </button>
      {/* </div> */}
    </div>
  )
}

export default Rightbar
