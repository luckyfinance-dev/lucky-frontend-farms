import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`
const CardImage = styled.img`
  align-items: center;
  margin-top: 55px;
  margin-left: 15px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const GFTPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const gftSupply = getBalanceNumber(circSupply)
  const marketCap = GFTPrice.times(circSupply)

  let eggPerBlock = 0
  if (farms && farms[0] && farms[0].eggPerBlock) {
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'GFT Stats')}
        </Heading>
        <Row>
          <Text fontSize="18px">{TranslateString(536, 'Total GFT Supply')}</Text>
          {gftSupply && <CardValue fontSize="20px" value={gftSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(538, 'Total GFT Burned')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(540, 'New GFT/block')}</Text>
          <Text bold fontSize="20px">
            {eggPerBlock}
          </Text>
        </Row>
        <CardImage src="/images/gft/gft-gold.png" alt="gft coin logo" width={120} height={100} />
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
