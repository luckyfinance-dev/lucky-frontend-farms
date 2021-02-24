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
    icon: 'PoolIcon',
    href: '/fortunes',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
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
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/lucky-financial',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/lucky-financial/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Audit by Hacken',
        href: 'https://www.lucky.financial/files/hackenAudit.pdf',
      },
      {
        label: "Github",
        href: "https://github.com/luckyfinance-dev/",
      },
      {
        label: "Docs",
        href: "https://lucky-financial.gitbook.io/lucky-financial/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@luckyfinancial",
      },
    ],
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.lucky.financial/files/hackenAudit.pdf',
  },
]

export default config
