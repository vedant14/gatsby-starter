import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: auto auto auto 20px;
  a {
    text-decoration: none;
    color: ${colors.white};
  }

  li {
    display: inline-block;
    margin-right: 80px;
    transition: opacity 0.5s ease;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    .active {
      font-weight: 800;
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 920px) {
    display: block;
  }
`;
