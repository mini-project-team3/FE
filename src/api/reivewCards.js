import axios from "axios";


//리뷰카드 전체조회
const getReviews = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASEURL}
  /api/reviews`);

  return response.data;
};

export { getReviews };
