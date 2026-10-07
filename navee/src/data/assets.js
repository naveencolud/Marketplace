const artwork = ['/image/NFT%20(1).png', '/image/NFT.png']

export const avatarUrl = 'https://i.pravatar.cc/100?img=47'
export const creatorAvatar = 'https://i.pravatar.cc/100?img=12'

export const assets = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: 'Liquid Wave',
  image: artwork[0],
  category: index % 4 === 1 ? 'Book' : 'Artwork',
  creator: 'John Abraham',
  currentBid: '0.05 ETH',
  nextBid: '0.15 ETH',
  time: '3h 1m 50s',
}))

export const activityItems = [
  'Purchase by you for 0.05 ETH',
  '0.06 ETH Received',
  'Started Following you',
  'Has been sold by 12.75 ETH',
  'Purchase by you for 0.05 ETH',
]