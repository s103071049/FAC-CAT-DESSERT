import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD } from "../../components/Style/style";
import IconMark from "../../components/common/IconMark";

import FaqItems from "./FaqItems";

const FaqWrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
  min-height: 73vh;
`;
const FaqContentWrapper = styled.section`
  padding: 60px;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0.15em;
  color: #212529;
  ${MEDIA_QUERY_SD} {
    padding: 20px;
  }
`;

const FaqPage = () => {
  return (
    <>
      <FaqWrapper>
        <IconMark>常見問題</IconMark>
        <FaqContentWrapper>
          <FaqItems />
        </FaqContentWrapper>
      </FaqWrapper>
    </>
  );
};

export default FaqPage;
