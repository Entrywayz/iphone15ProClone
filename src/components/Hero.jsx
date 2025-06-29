import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo)
    } else {
        setVideoSrc(heroVideo)
    }
  }  

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
        window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    
    gsap.to('#hero', {
        opacity: 1,
        delay: 2
    })
    gsap.to('#cta', {
        opacity: 1, 
        y: -50,
        delay: 2
    })
  }, [])  

  return (
    <section className='w-full h-[calc(100vh-60px)] bg-black relative'>
        <div className='h-5/6 w-full flex justify-center items-center flex-col'>
            <p id='hero' className='hero-title text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none' type="video/mp4" autoPlay muted playsInline={true} key={videoSrc}>
                    <source type="video/mp4" src={videoSrc} />
                </video>
            </div>
        </div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
            <a className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero