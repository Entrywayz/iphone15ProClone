import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
import { useInView } from 'react-intersection-observer'

const Highlights = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7
  })

  useGSAP(() => {

    if(!inView) return;

    gsap.to('#title', {
      opacity: 1,
      y: 0,
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    })
  }, [inView])

  return (
    <section ref={ref} id='highlight' className='w-screen overflow-hidden h-full common-padding bg-zinc-950'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt="right" className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights