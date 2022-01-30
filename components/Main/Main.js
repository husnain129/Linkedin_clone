import React, { useRef, useState } from 'react'
import { FaRegThumbsDown } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoIosSend, IoLogoYoutube, IoMdShareAlt } from 'react-icons/io'
import { IoCalendarNumber } from 'react-icons/io5'
import {
  MdOutlineArticle,
  MdOutlinePhotoSizeSelectActual,
} from 'react-icons/md'
import { RiMessage3Line } from 'react-icons/ri'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '600px',
    height: '390px',
    borderRadius: '10px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
}

Modal.setAppElement('#__next')

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [file, setFile] = useState('')
  const [posts, setPosts] = useState(['joker.jpg', 'girl.jpg', 'cup.jpg'])

  const inputFile = useRef(null)
  const Post = [
    {
      icon: MdOutlinePhotoSizeSelectActual,
      click: () => {
        setFile('')
        setIsOpen(true)
      },
      title: 'Photo',
      color: 'skyblue',
    },
    { icon: IoLogoYoutube, title: 'Video', color: 'red' },
    { icon: IoCalendarNumber, title: 'Evemt', color: 'orange' },
    { icon: MdOutlineArticle, title: 'Write Article', color: 'orange' },
  ]

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click()
  }

  const changeHandler = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div className="flex h-full w-full flex-col items-center gap-2 py-4">
      <div className="flex h-32 w-[90%] flex-col items-center justify-around rounded-lg border border-[#d3d2d0] bg-white pt-4 shadow-sm">
        <div className="group flex w-[90%] items-center justify-around">
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex h-full w-full flex-col">
              <div className="flex h-[10%] w-full items-center justify-between py-6 px-5">
                <h1 className="text-xl">Edit your photo</h1>
                <button onClick={() => setIsOpen(false)}>X</button>
              </div>
              <hr />
              <div className="flex h-[75%] w-full items-center justify-center">
                {file ? (
                  <img src={file} className="h-[80%] w-[80%] object-contain" />
                ) : (
                  <p
                    onClick={onButtonClick}
                    className="cursor-pointer rounded-lg px-3 py-2 font-bold text-blue-600 hover:bg-[#cccccc65]"
                  >
                    Select images to share
                    <input
                      type="file"
                      id="file"
                      ref={inputFile}
                      onChange={changeHandler}
                      style={{ display: 'none' }}
                    />
                  </p>
                )}
              </div>
              <hr />
              <div className="flex h-[15%] w-[99%] items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setFile('')
                    setIsOpen(!modalIsOpen)
                  }}
                  className="h-[30px] w-[100px] rounded-full border border-[#7a7fad] font-bold text-[#7a7fad] hover:border-2 hover:bg-[#cccccc8a]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setPosts([file, ...posts])
                    setIsOpen(!modalIsOpen)
                  }}
                  className="h-[30px] w-[100px] rounded-full border border-[#7a7fad] font-bold text-[#7a7fad] hover:border-2 hover:bg-[#cccccc8a]"
                >
                  Done
                </button>
              </div>
            </div>
          </Modal>

          <img
            src="/cup.jpg"
            className="h-14 w-14 rounded-full object-cover"
            alt=""
          />
          <input
            type="text"
            className="h-12 w-96 rounded-full border-[1px] border-[#bdbcbb] px-4 text-base focus:outline-none focus:ring-0"
            placeholder="Start a post"
          />
        </div>
        <div className="flex w-[85%] flex-wrap items-center justify-between">
          {Post.map((e, i) => (
            <div
              key={i}
              onClick={e.click}
              className=" flex cursor-pointer items-center justify-center gap-2"
            >
              <e.icon size={24} style={{ color: e.color, opacity: '.8' }} />
              <p className="hidden text-sm sm:hidden tab:block md:block">
                {e.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[90%] items-center justify-between">
        <span className="h-[1px] w-[86%] bg-[#bdbcbb]" />
        <p className="text-xs text-gray-600">
          Sort by:<span className="font-semibold text-black">Top</span>
        </p>
      </div>
      {posts.map((url, i) => (
        <Posts imgURL={url} key={i} />
      ))}
    </div>
  )
}

const Posts = ({ imgURL }) => {
  return (
    <div className="flex h-auto w-[90%] flex-col gap-6 rounded-md bg-white p-4">
      <div className="item-center flex justify-between">
        <div className="flex items-center justify-start gap-2">
          <img
            src="joker.jpg"
            className="h-12 w-12 rounded-full object-cover"
            alt=""
          />
          <div>
            <p className="text-sm font-semibold">
              Ardian . B <span>Following</span>
            </p>
            <p className="text-xs">Javascrpt Developer</p>
            <p className="text-xs">10m . Edited</p>
          </div>
        </div>
        <FiMoreHorizontal size={24} className="cursor-pointer text-gray-600" />
      </div>
      <img src={imgURL} alt="" className="rounded" />
      <span className="h-[1px] w-[100%] bg-[#bdbcbb]" />

      <div className="flex w-[100%] items-center justify-between px-0 sm:px-0 tab:px-[4%] md:px-[5%] ">
        <div className="flex cursor-pointer items-start justify-center gap-2">
          <FaRegThumbsDown
            size={23}
            className="rotate-180 text-[#bdbcbb] hover:text-black"
          />
          <p className="hidden sm:hidden tab:block md:block">Like</p>
        </div>
        <div className="flex cursor-pointer items-start justify-center gap-2 ">
          <RiMessage3Line
            className="text-[#bdbcbb] hover:text-black"
            size={23}
          />
          <p className="hidden sm:hidden tab:block md:block">Message</p>
        </div>
        <div className="flex cursor-pointer items-start justify-center gap-2 ">
          <IoMdShareAlt className="text-[#bdbcbb] hover:text-black" size={23} />
          <p className="hidden sm:hidden tab:block md:block">Share</p>
        </div>
        <div className="flex cursor-pointer items-start justify-center gap-2 ">
          <IoIosSend className="text-[#bdbcbb] hover:text-black" size={24} />
          <p className="hidden sm:hidden tab:block md:block">Send</p>
        </div>
      </div>
    </div>
  )
}

export default Main
