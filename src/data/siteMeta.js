import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'
import Arsim from "@/images/tech-images/Photo.jpg"
import UserAvatar from "@/images/tech-images/useravatar.png"

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Leutrim Olluri",
    description: "Leutrim Olluri is a developer advocate, keynote speaker, author, and open source practitioner.",
    copyright: "leoel",
    author: {
        name: "Leutrim Olluri",
        email: "lableoel@outlook.com",
        twitter: "https://twitter.com/LABleoel",
        mastodon: "https://tty0.social/@bketelsen",
        reddit: "https://www.reddit.com/u/PhiloAstroEng/s/7F8ZLYNol9",
        instagram: "https://instagram.com/bketelsen",
        github: "https://github.com/bketelsen",
        linkedin: "https://www.linkedin.com/in/leutrim-o/",
        twitch: "https://twitter.com/LABleoel",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://lableoel.dev",
}

 export const resume = [
    {
      company: 'Arsim Sejdiu',
      title: 'Full-stack developer',
      logo: Arsim,
      twitter: "https://www.jabot.tech",
      web: "https://www.jabot.tech",
      start: '2017',
      end: '2022',
    },
    {
      company: 'Jabot',
      title: 'Security Specialist',
      logo: UserAvatar,
      twitter: "https://www.jabot.tech",
      web: "https://www.jabot.tech",
      start: '2017',
      end: '2022',
    },
    {
      company: 'RAAD',
      title: 'Sysem Engineer',
      logo: UserAvatar,
      twitter: "https://www.jabot.tech",
      web: "https://blog.raad.ch/",
      start: '2017',
      end: '2022',
    },
  ]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },
]


export default siteMeta;