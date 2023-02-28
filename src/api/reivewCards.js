import axios from "axios";

//리뷰카드 전체조회
const getRivews = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL}/api/reviews`
  );
  console.log(response);
  return response.data;
};

export { getRivews };
