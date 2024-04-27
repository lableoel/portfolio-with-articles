import Image from 'next/image'
import clsx from 'clsx'
import { FaGlobe, FaReddit } from 'react-icons/fa'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  LinkedInIcon,
  BriefcaseIcon,
} from '@/components/SocialIcons'

import image from '@/images/tech-images/image.png'
import image1 from '@/images/tech-images/image1.png'
import image2 from '@/images/tech-images/image2.png'
import image3 from '@/images/tech-images/image3.png'
import image4 from '@/images/tech-images/image4.png'
import leoel from '@/images/tech-images/leoel.png'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import siteMeta, { resume } from '@/data/siteMeta'
import { NextSeo } from 'next-seo'
import { SocialLinks } from '@/components/SocialLinks'


function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Collaborations</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                fill
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <div className="flex items-start justify-start gap-6">
                  <SocialLinks
                    href={role.twitter}
                    aria-label="Follow on Twitter"
                    icon={TwitterIcon}
                  />
                  <SocialLinks
                    href={role.web}
                    aria-label="Follow on Mastodon"
                    icon={FaGlobe}
                    rel="me"
                  />
                </div>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://www.linkedin.com/in/leutrim-o/"
        variant="secondary"
        className="group mt-6 w-full"
      >
        More on LinkedIn
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image, image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <NextSeo
        title="leoel"
        description={siteMeta.description}
        canonical="https://lableoel.com"
        openGraph={{
          url: 'https://lableoel.com',
          images: [
            {
              url: leoel,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'brian.dev',
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl text-lg">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            ICT Engineer
          </h1>
          <p className="prose mt-6 dark:prose-invert">
            Hi, this is Leo. Thanks for visiting my blog. As an IT Admin
            enthusiastic and professional, I&apos;ve been working on the field for
            over 10 years for multiple European/Swiss companies of different
            sizes. My field expertise is Device Management, which is also my
            hobby .
          </p>
          <p className="prose mt-6 dark:prose-invert">
            On this blog, I&apos;ll post things I find interesting on which I have
            worked on. You can also find me on different social networks or
            perhaps will meet me on different community events soon (if you do
            see me, say hi).
          </p>
          <p className="prose mt-6 dark:prose-invert">
            Poke around and see what I&apos;m up to. It&apos;s all open source, so feel
            free to contribute.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLinks
              href={siteMeta.author.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLinks
              href={siteMeta.author.instagram}
              aria-label="Follow on Instagram"
              icon={FaReddit}
            />
            <SocialLinks
              href={siteMeta.author.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
