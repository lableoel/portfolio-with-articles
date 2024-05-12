import Image from 'next/image'
import {FaReddit} from "react-icons/fa"

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import leoel from '@/images/tech-images/leoel.png'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';
import { SocialLink } from '@/components/SocialLinks'

export default function About() {
  return (
    <>
      <NextSeo
        title="leoel"
        description={siteMeta.description}
        canonical="https://brian.dev/about"
        openGraph={{
          url: 'https://brian.dev/about',
          images: [
            {
              url: `https://og.brian.dev/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'brian.dev',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={leoel}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              leoel here :D Welcome !.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
                Hello ! I&apos;m Leo, I live in Switzerland, where I also enjoy working in IT. My area or expertise:
              </p>
              <p>
                <b>Modern Workplace & Endpoint Mgmt.</b>
              </p>
              <p>
                I love the Microsoft world, finding solutions, and sharing what I learn with others.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list" className='gap-y-5'>
            <SocialLink
              href={siteMeta.author.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href={siteMeta.author.instagram}
              aria-label="Follow on Instagram"
              icon={FaReddit}
            >
              Follow on Reddit
            </SocialLink>
            <SocialLink
              href={siteMeta.author.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            >
              Follow on Linkedin
            </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
