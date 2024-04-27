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
              I&apos;m Brian Ketelsen. I live in Florida, where I help people
              across the world learn the Cloud.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
                Howdy! Thanks for stopping by. I&apos;m Brian and I&apos;ve been doing technology
                things since <a href="https://en.wikipedia.org/wiki/Acoustic_coupler">acoustic
                  modem couplers</a> were a thing. I love Open Source and exploring different programming languages.
                Some highlights about me and my activities:
              </p>
              <p>
                <b>Army Veteran:</b> Bradley Fighting Vehicle Gunner, Infantry, 1st Armored Division
              </p>
              <p>
                <b>Father of <s>four</s> five</b> with <s>19</s> 21 years difference between oldest and youngest child
              </p>
              <p>
                <b>Co-founded GopherCon</b> <a href="https://gophercon.com">the largest conference for Go developers</a>.
              </p>
              <p>
                <b>Co-authored</b> <a href="https://www.amazon.com/Go-Action-William-Kennedy/dp/1617291781">Go In Action</a> for Manning Publishing.
              </p>
              <p>
                <b>Co-wrote</b> Skynet and SkyDNS with Erik St. Martin, which was eventually morphed into the DNS service discovery that powers Kubernetes.
              </p>
              <p>
                <b>Contributed</b> to the largest projects that power the Internet. Go, Kubernetes, Etcd, and so many more.
              </p>
              <p>
                I love Open Source, learning in public, and sharing what I learn with others.
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
