import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: left;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 55px;
  padding-top: 286px;
  text-align: left;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/gft/3b.png');
    background-position: right center;
    height: 286px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xxl" mb="24px" color="secondary">
          {TranslateString(576, 'Lucky Financial')}
        </Heading>
        <Text>
          {TranslateString(578, 'The best rewards - DEFI app on Binance Smart Chain. Home of the BIGBANG Lottery!')}
        </Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
          <TwitterCard />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
