import { NextSeo } from 'next-seo';
import  siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
    <NextSeo
      title="leoel"
      description={siteMeta.description}
      canonical="https://lableoel.com/uses"
      openGraph={{
        url: 'https://lableoel.com/uses',
        images: [
          {
            url: `https://lableoel.com`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'lableoel',
      }}
    />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to learn, stay productive, fool myself into thinking I’m being productive when I’m really just procrastinating."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="HP ZBook Fury 15">
              This one is a pretty good beast, with additional storage, it has all I need for my VMs and apps.
            </Tool>
            <Tool title="Code">
              Visual Studio 2019 and Visual Studio Code, of course.
            </Tool>
            <Tool title="PrintScreen">
              Snagit 2023. It has very useful built-in tools that help me edit images for documentation.
            </Tool>
            <Tool title="Virtualizer">
              VMWare Workstation Pro. I find it easier and more fun to use than hyper-v.
            </Tool>

          </ToolsSection>

        </div>
      </SimpleLayout>
    </>
  )
}
