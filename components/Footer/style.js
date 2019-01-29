// @flow
import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  margin-top: 80px;
  padding: 0 16px 30px 0px ;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${theme.text.tertiary};
  width: 100%;
  text-align: center;
  padding-bottom: 16px;

  a {
    color: ${theme.text.default};
    margin-left: 4px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  margin-left: -16px;
  padding-bottom: 8px;

  a {
    color: ${theme.text.tertiary};
  }

  a:hover {
    color: ${theme.text.default};
  }

  .icon {
    margin-left: 16px;
  }
`;
