import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Link, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const LayoutWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const StyledImage = styled(Image)`
  align-self: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <LayoutWrapper>
      <StyledImage src="/images/cat-lottery-ball.png" alt="lottery bunny" width={1127} height={276} />
      <StyledHeading size="lg" as="h3" color="secondary">
        {TranslateString(999, 'How it works')}
      </StyledHeading>
      <Text fontSize="16px">
        {TranslateString(
          999,
          'Spend GFT to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!',
        )}
      </Text><br/>
      <Text fontSize="15px">
        {TranslateString(
          9991,
          'A % of each lottery gets burned prior to the draw.',
        )}
      </Text>
      <StyledLink href="https://lucky-financial.gitbook.io/lucky-financial/big-bang-lotter/lottery-overview" target="_blank">Read more</StyledLink>
    </LayoutWrapper>
  )
}

export default HowItWorks
