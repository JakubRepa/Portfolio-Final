import { ref } from 'vue'

import adikocover from '../assets/ADIKO/ADIKO-logo.svg'
import adikocalendar from '../assets/ADIKO/ADIKO-calendar.jpg'
import adikocard from '../assets/ADIKO/ADIKO-card.jpg'
import adikodrills from '../assets/ADIKO/ADIKO-drills.jpg'
import adikomug from '../assets/ADIKO/ADIKO-mug.jpg'
import adikosign from '../assets/ADIKO/ADIKO-sign.jpg'
import adikostone from '../assets/ADIKO/ADIKO-stone.jpg'
import adikocolors from '../assets/ADIKO/ADIKO-colors.svg'

import vgacover from '../assets/VGA/VGA-logo.svg'
import vgacolors from '../assets/VGA/VGA-colors.svg'
import vgaflower from '../assets/VGA/VGA-flower.jpg'
import vgamug from '../assets/VGA/VGA-mug.jpg'
import vgasign from '../assets/VGA/VGA-sign.jpg'
import vgatowel from '../assets/VGA/VGA-towel.jpg'

import headphonescover from '../assets/HEADPHONES/Headphones-cover.png'
import headphones1 from '../assets/HEADPHONES/Headphones-1.jpg'
import headphones2 from '../assets/HEADPHONES/Headphones-2.jpg'
import headphones3 from '../assets/HEADPHONES/Headphones-3.jpg'
import headphones4 from '../assets/HEADPHONES/Headphones-4.jpg'

import trapholtcover from '../assets/TRAPHOLT/Trapholt-logo.svg'
import trapholtaffinity from '../assets/TRAPHOLT/Trapholt-affinity.jpg'
import trapholtcolors from '../assets/TRAPHOLT/Trapholt-colors.svg'
import trapholtfigma from '../assets/TRAPHOLT/Trapholt-figma.jpg'
import trapholtjourney from '../assets/TRAPHOLT/Trapholt-journey.jpg'
import trapholtswot from '../assets/TRAPHOLT/Trapholt-swot.jpg'

import logoscover from '../assets/LOGOS/logos-cover.jpg'
import logo1 from '../assets/LOGOS/logo-1.svg'
import logo2 from '../assets/LOGOS/logo-2.svg'
import logo3 from '../assets/LOGOS/logo-3.svg'
import logo4 from '../assets/LOGOS/logo-4.svg'
import logo5 from '../assets/LOGOS/logo-5.svg'
import logo6 from '../assets/LOGOS/logo-6.svg'
import logo7 from '../assets/LOGOS/logo-7.svg'
import logo8 from '../assets/LOGOS/logo-8.svg'
import logo9 from '../assets/LOGOS/logo-9.svg'


const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'ADIKO SK Tunelling & Drifting',
      cover_image: adikocover,
      description: 'Full brand identity for a company operating in unusual business. They sell and repair tunelling and drifting tools. I elaborated on owner vision and came up with result that client loved. Alongside new logo and logo manual, I designed print materials and merchandise for them.',
      year: '2023',
      modal_content:{
        image1: adikocover,
        image2: adikocalendar,
        image3: adikocard,
        image4: adikodrills,
        image5: adikomug,
        image6: adikosign,
        image7: adikostone,
        image8: adikocolors,
      }
    },
    {
    id: 2,
    title: 'Villa Garden Apartments',
    cover_image: vgacover,
    description: 'Objective was to create logo for clients holiday apartment to stand out in heavy competition tourist area, where the apartment is situated. Alongside logo, I also designed other print materials to help leave longer lasting impression on guests.',
    year: '2023',
    modal_content:{
      image1: vgacover,
      image3: vgaflower,
      image4: vgamug,
      image5: vgasign,
      image6: vgatowel,
      image2: vgacolors,
      }
    },
    {
    id: 3,
    title: 'Headphones Advertisement',
    cover_image: headphonescover,
    description: 'Advertisement video for premium brand of headphones. I carried out this full project on my own, starting with research, storyboard and concept. Then I created 3D model, added textures, animations and rendered the scenes. In final phase I took the footage into editing software, added text, music and sounds to create final video.',
    year: '2023',
    modal_content:{
      image1: headphones1,
      image2: headphones2,
      image3: headphones3,
      image4: headphones4,
      },
      extraContent: {
        hasLink: true,
        linkText: 'CLICK HERE TO WATCH VIDEO',
        linkUrl: 'https://www.youtube.com/watch?v=gOE0iJ0lYyw&ab_channel=JakubRepa',
      }
    },
    {
    id: 4,
    title: 'TRAPHOLT Website',
    cover_image: trapholtcover,  
    description: 'I collaborated with a team to create a website for a museum of modern art as our first semester final project at university. Each member provided equal efforts in various aspects, but I took on lead role, setting up ground for visual identity and later as main developer. It was fun and challenging project, where I learned a lot about teamwork and project management.',
    year: '2023',
    modal_content:{
      image1: trapholtcover,
      image2: trapholtaffinity,
      image3: trapholtfigma,
      image4: trapholtjourney,
      image5: trapholtswot,
      image6: trapholtcolors,
      },
      extraContent: {
        hasLink: true,
        linkText: 'CLICK HERE TO VISIT WEBSITE',
        linkUrl: 'https://jakubrepa.github.io/',
      }
    },
    {
    id: 5,
    title: 'Logos Collection',
    cover_image: logoscover, 
    description: 'Collection of logos I created for clients, school or peronal projects. I always start with research and brainstorming, then I sketch and digitize the best ideas. I always provide logo manual to help clients use their new logo in the best way possible.',
    year: '2023',
    modal_content:{
      image1: logo1,
      image2: logo2,
      image3: logo3,
      image4: logo4,
      image5: logo5,
      image9: logo9,
      image6: logo6,
      image7: logo7,
      image8: logo8,
      }
    },

  ])

  return { portfolioItems }
}

export default getPortfolio