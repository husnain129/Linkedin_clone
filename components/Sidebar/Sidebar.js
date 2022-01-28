import React from 'react'

const Sidebar = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center gap-3 pt-4 text-3xl  sm:items-center tab:items-end md:items-end">
      <div className="flex h-auto w-[90%] flex-col items-center justify-between overflow-hidden rounded-lg border border-[#d3d2d0] bg-white shadow-md sm:w-[90%] tab:w-56 md:w-56">
        <div className="relative z-0 h-16 w-full bg-blue-600">
          <img src="/girl.jpg" alt="" className="h-full w-full object-cover" />
          <img
            src="/joker.jpg"
            className="absolute -bottom-8 left-[35%] z-20 flex h-16 w-16 rounded-full border-2 border-white object-cover"
            alt=""
          />
        </div>
        {/* card header close */}
        <div className="mx-4 mt-9 flex flex-col items-center gap-2">
          <p className="cursor-pointer text-center text-base underline">
            Muhammad Husnain
          </p>
          <p className="text-center text-sm text-gray-600">
            MERN STACK --
            JavaScript—TypeScript—ReactJs—NextJs——ExpressJs—MongoDB—PostgressQl—GraphQL
          </p>
        </div>
        {/* .........Title skills ends........ */}
        <div className="mt-4 flex h-auto w-full items-center justify-between border-b-[1px] border-t-[1px] py-3 px-2">
          <div>
            <p className="text-sm text-gray-600">Connections</p>
            <p className="text-sm">Grow Your Network</p>
          </div>
          <p className="text-base text-gray-600">8</p>
        </div>
        <div className="h-auto w-full cursor-pointer border-b-[1px] py-3 px-2 hover:bg-[#F3F2EF]">
          <p className="text-xs text-gray-600">
            Access exclusive tools & insights
          </p>
          <p className="text-sm">Try Premium For Free</p>
        </div>
        <div className="h-auto w-full cursor-pointer px-2 pt-2 pb-2 hover:bg-[#F3F2EF]">
          <p className="text-xs text-gray-600">My items</p>
        </div>
      </div>
      <div className="sticky top-8 flex h-auto w-[90%] flex-col gap-1 rounded-md border border-[#d3d2d0] bg-white px-2 pt-3 shadow-lg sm:w-[90%] tab:w-56 md:w-56">
        <p className="text-sm text-blue-600">Group</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-blue-600">Events</p>
          <p className="text-sm text-blue-600">+</p>
        </div>
        <p className="text-sm text-blue-600">Follow Hashtags</p>
        <div className="flex h-12 w-full cursor-pointer items-center justify-center border-t">
          <p className="text-sm font-bold text-black">Discover More</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
