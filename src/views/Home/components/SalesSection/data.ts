import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pcmswap.info/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BTC', alt: 'BTC token' },
      { src: 'BNB', alt: 'BNB token' },
      { src: 'PCM', alt: 'PCM token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'PCMSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pcmswap.info/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'PCM makes our world go round.',
  bodyText:
    'PCM token is at the heart of the PCMSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x170814A97FD5130A611Aef99CC9b1f0745636997',
    text: 'Buy PCM',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pcmswap.info/jing-ji-mo-xing/pcm',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [

      { src: 'coin', alt: 'PCM token' },

    ],
  },
}
