import axios from "axios";

//리뷰카드 전체조회
const getReviews = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASEURL}/reviewList`);
  return response.data;
};

export { getReviews };
