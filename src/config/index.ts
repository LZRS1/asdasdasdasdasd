export const PRODUCT_CATEGORIES = [
  {
    label: 'SPOTIFY',
    value: 'spotify' as const,
    featured: [
      {
        name: 'SPOTIFY',
        href: `/products?category=spotify`,
        imageSrc: '/nav/spotify/spotify.png',
      },

    ],
  },
  {
    label: 'YOUTUBE',
    value: 'youtube' as const,
    featured: [
      {
        name: 'YouTube',
        href: `/products?category=youtube`,
        imageSrc: '/nav/youtube/unnamed.png',
      },

    ],
  },
  {
    label: 'DISNEY',
    value: 'disney' as const,
    featured: [
      {
        name: 'Disney',
        href: `/products?category=disney`,
        imageSrc: '/nav/disney/disney.png',
      },

    ],
  },
  {
    label: 'NETFLIX',
    value: 'netflix' as const,
    featured: [
      {
        name: 'Netflix',
        href: `/products?category=netflix`,
        imageSrc: '/nav/netflix/netflix.png',
      },

    ],
  },
]
