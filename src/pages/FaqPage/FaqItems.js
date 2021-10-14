import React, { useState } from "react";
import styled from "styled-components";
import faqIcon from "../../components/img/icon/question-mark-on-a-circular.svg";

const Icon = styled.img`
  padding: 0 px;
  width: 20px;
  height: 20px;
`;
const FaqItems = styled.div`
  display: flex;
  padding-bottom: 34px;
  border-bottom: 1px solid #d49e6a;
  & + & {
    margin-top: 20px;
  }
`;
const FaqItemDetail = styled.div`
  margin-left: 20px;
`;
const FaqItemHeader = styled.div`
  cursor: pointer;
`;
const FaqItemAns = styled.div`
  margin-top: 20px;
`;

const faqOptions = [
  {
    question: "宅配蛋糕的注意事項",
    answer: `為維持甜點的品質，我們堅持蛋糕寄出當天製作，並以冷凍送，
出貨時一定都是完美的，
但寄送路程中，有可能因為配送路程顛簸，導致您訂購的甜點略有瑕疵，
這是有可能發生的，但基本上不會太誇張，
請您務必見諒!

若您對蛋糕的外型，要求10分完美，建議您可以選擇「自取」方式喔!
若真的發生毀損狀況是您所不能接受的，
請先拍照留存，寄發到客服信箱，並致電客服告知狀況，
我們收到後會盡速為您處理後續事宜。

若配送日遇到星期日，則會順延一日至週一，因黑貓宅配週日不收、送貨。`,
    id: 1,
    isShowed: false,
  },
  {
    question: "官網訂購流程",
    answer: `Step1. 點選商品(如不適合宅配之商品，只能適用店取)
Step2. 輸入購買數量
Step3.加入購物車

Step4.購買完成
    (1) 點選購物車→ 試算訂單→ 仍可增減商品數量、選擇配送方式或是”繼續購物”
  (2) 訂單確認完成→ 點選結帳

Step5.結帳

Step6.最後確認`,
    id: 2,
    isShowed: false,
  },
  {
    question: "宅配到貨時間",
    answer: `在結帳之前，你可以依照自己方便的時間，選取預計到貨時間。`,
    id: 3,
    isShowed: false,
  },
  {
    question: "本島宅配&外島宅配運費收取方式",
    answer: `下單時，系統自動帶入運費金額僅限提供台灣本島宅配，不含離島，收件地址若在離島需補足運費差額後，方提供出貨，不便之處敬請見諒!

宅配收費標準
本島 常溫 160元
        冷藏 190元
離島 常溫 320元
        冷藏 440元`,
    id: 4,
    isShowed: false,
  },
  {
    question: "我要如何確認訂購是否成功?",
    answer: `登入會員之後，請點選訂單狀態頁面，即可知道目前訂單的即時狀態唷。`,
    id: 5,
    isShowed: false,
  },
  {
    question: "訂購蛋糕有附贈蠟燭嗎??",
    answer: `您可於訂購單下方之備註欄位部份，註明您需要的歲數，或是問號蠟燭。`,
    id: 6,
    isShowed: false,
  },
];

const RenderFaqItems = () => {
  const [selectedOption, setSelectedOption] = useState(faqOptions);

  const handleQuestionClick = (selectedItem) => {
    setSelectedOption(
      selectedOption.map((item) => {
        if (selectedItem.id === item.id) {
          const { isShowed } = item;
          return {
            ...item,
            isShowed: !isShowed,
          };
        }
        return item;
      })
    );
  };

  return selectedOption.map((item) => {
    return (
      <FaqItems key={item.id}>
        <div>
          <Icon src={faqIcon} />
        </div>
        <FaqItemDetail>
          <FaqItemHeader onClick={() => handleQuestionClick(item)}>
            {" "}
            {item.question}{" "}
          </FaqItemHeader>
          {item.isShowed && <FaqItemAns> {item.answer} </FaqItemAns>}
        </FaqItemDetail>
      </FaqItems>
    );
  });
};

export default RenderFaqItems;
