import axios from "axios";

// 리뷰카드 전체조회 api 명세에 맞게 URL작성
const getReviews = async ({ category = 0, pageNum = 0, criteria = "createdAt" }) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL}/api/reviews?category=${category}&page=${pageNum}&criteria=${criteria}`
  );
  return response.data;
};

export { getReviews };
