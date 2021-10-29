const payWarnningData = [
  {
    id: 1,
    content:
      "訂單需付款完成視為訂單成立，並進入訂單排程；如下訂後未於取貨或到貨日前三天付款完成，則視為放棄訂單。",
  },
  {
    id: 2,
    content:
      "宅配到貨日期為自由選擇，但請注意每周日、一、三無法到貨，請再確認您選擇的日期是否正確。",
  },
  {
    id: 3,
    content: "門市取貨需注意每周二皆為公休日，請注意是否選擇到週二的日期。",
  },
  {
    id: 4,
    content:
      "運費會依照您的訂單自動跳轉，只需要確認訂單內容及選擇日期是否正確即可。",
  },
  {
    id: 5,
    content: "僅限自取商品，切勿選擇宅配運送方式。",
  },
  {
    id: 6,
    content: "若選擇含運價格商品，請選擇免運的運送方式，並請單獨結帳。",
  },
  {
    id: 7,
    content: "餅乾常溫類點心與低溫宅配商品建議分開訂購。",
  },
];

const PayWarnningContent = () => {
  return payWarnningData.map((item) => {
    return <p key={item.id}> - {item.content}</p>;
  });
};
export default PayWarnningContent;
