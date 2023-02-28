import axios from "axios";

//리뷰카드 전체조회 api 명세에 맞게 URL작성
const getRivews = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews`);
  console.log("data는?", response.data);

  return response.data;
};

export { getRivews };
