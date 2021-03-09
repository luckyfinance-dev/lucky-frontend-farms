import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.lucky.financial/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.lucky.financial/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Fortunes',
    icon: 'SunIcon',
    href: '/fortunes',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'BigBang Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xb2ba6fa707948f9a0bc420c35b78e5020a07bc4d',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/lucky-financial',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/lucky-financial/',
      },
  //{ To do - update AstroTools Link once Live
  //      label: 'AstroTools',
  //      href: 'https://app.astrotools.io/pancake-pair-explorer/',
  //    },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/luckyfinance-dev/',
      },
      {
        label: 'Docs',
        href: 'https://docs.lucky.financial',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@luckyfinancial',
      },
    ],
  },
  //  {
  //    label: 'Audit by Hacken',
  //    icon: 'AuditIcon',
  //    href: 'https://lucky.financial/files/',
  //  },
]

export default config
