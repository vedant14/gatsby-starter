import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../styles/GlobalStyles"
export const HeaderWrapper = styled.header`
  background: ${colors.washedBlack};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  margin: 0 auto;
  top: 0;
  z-index: 999;
  padding: 10px 20px;
  display: flex;
  border-bottom: 1px solid ${colors.white};
  > div {
    margin: auto;
    @media screen and (min-width: 768px) {
      margin: auto 120px auto auto;
    }
  }
`

export const Logo = styled(Link)`
  margin: 10px auto;
  @media screen and (min-width: 768px) {
    margin: 10px 50px 10px 120px;
  }
  > img {
    max-width: 100px;
    @media screen and (min-width: 768px) {
      max-width: 200px;
    }
  }
`
