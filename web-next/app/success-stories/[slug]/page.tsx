import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SuccessStoryTemplate } from '@/components/ui/success-story-template'
import { routeMetadata } from '@/lib/i18n.server'
import { getStory, successStories } from '@/lib/successStories'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return successStories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) return {}

  return routeMetadata({
    fa: `داستان موفقیت ${story.company.fa}`,
    en: `${story.company.en} Success Story`,
    description: story.metaDescription.fa,
    canonical: `/success-stories/${slug}`,
  })
}

export default async function SuccessStoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) notFound()

  const url = `https://vitrayco.com/success-stories/${slug}`

  // JSON-LD: the default server render is Persian, so crawlers see Persian copy.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `داستان موفقیت ${story.company.fa}`,
        description: story.metaDescription.fa,
        url,
        about: story.company.fa,
        articleSection: story.industry.fa,
        publisher: {
          '@type': 'Organization',
          name: 'ویترای',
          url: 'https://vitrayco.com',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
          { '@type': 'ListItem', position: 2, name: 'داستان‌های موفقیت', item: 'https://vitrayco.com/success-stories' },
          { '@type': 'ListItem', position: 3, name: story.company.fa, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SuccessStoryTemplate story={story} />
    </>
  )
}
