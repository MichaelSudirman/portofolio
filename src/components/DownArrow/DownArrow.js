import React from 'react'
import styled from 'styled-components'

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`
const Arrows = styled.div`
ANITMATION: ${bounce} 2s infinite
`

const DownArrow = () => {
    return (
        <Arrows>
            TEST
        </Arrows>
    )
}

export default DownArrow;