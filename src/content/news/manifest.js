
import poster0 from '../../assets/images/news-posters/poster4.jpg'
import poster1 from '../../assets/images/news-posters/poster1.png'
import poster2 from '../../assets/images/news-posters/poster2.jpg'
import poster3 from '../../assets/images/news-posters/poster3.png'
import poster4 from '../../assets/images/news-posters/poster4.jpg'

export const NEWS_ITEMS = [
  {
    id: 'ar-vr-mainstream-2026',
    category: 'Product',
    date: 'May 24, 2026',
    title: 'AR and VR Surge Into the Mainstream in 2026',
    excerpt:
      'Contrary to popular belief, adoption curves for spatial hardware have not just accelerated — they\u2019ve inverted. Here\u2019s what changed, and what it means for the field.',
    thumbnail: poster0,
    slug: 'ar-vr-mainstream-2026',
  },
  {
    id: 'galaxy-glasses',
    category: 'Product',
    date: '22 July, 2026',
    title: 'Samsung unveils AI smart glasses powered by Android XR',
    excerpt:
      'Samsung Electronics today introduced its intelligent eyewear at Galaxy Unpacked in London. Building on the concepts announced at the latest Google I/O, the new designs were developed with global eyewear brands, Gentle Monster and Warby Parker.',
    featured: true,
    thumbnail: poster1, // TODO: currently shares poster1 with ar-vr-mainstream-2026
    slug: 'galaxy-glasses',
  },
  {
    id: 'meta-glasses',
    category: 'Product',
    date: '23 July, 2026',
    title: 'Meta takes steps to prevent misuse of Smart Glasses',
    excerpt:
      'Meta implements new policies on Instagram and Smart Glasses to prevent users from misusing and stalking people.',
    thumbnail: poster2,
    slug: 'meta-glasses',
  },
  {
    id: 'snapdragon-chips',
    category: 'Product',
    date: '24 July, 2026',
    title: 'Qualcomm\u2019s importance in the XR industry',
    excerpt:
      'Qualcomm provides the foundational hardware and software chips that power most headsets, commanding over 90% of the market. Its Snapdragon XR platforms deliver essential low-power computing, computer vision, and real-time head and hand tracking.',
    thumbnail: poster3,
    slug: 'snapdragon-chips',
  },
  {
    id: 'lenovo-layoff',
    category: 'Product',
    date: '24 July, 2026',
    title: 'Lenovo halts development in AR/VR sector to focus on AI',
    excerpt:
      'Lenovo laid off the people working in its business-oriented XR unit in the United States. Most of the people were let go from the company, while some others were able to find another position within the company.',
    thumbnail: poster4,
    slug: 'lenovo-layoff',
  },
]

export const CATEGORIES = ['All', 'Product', 'Research', 'Company', 'Events', 'Culture']