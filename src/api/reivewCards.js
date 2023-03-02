import axios from "axios";

// 리뷰카드 전체조회 api 명세에 맞게 URL작성
const getReviews = async (
  currentPage = 1,
  curCategory = 0,
  criteria = "createdAt"
) => {
  console.log(curCategory);
  console.log("ddddd", curCategory);

  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL}/api/reviews?category=${curCategory}&page=${currentPage}&criteria=${criteria}`
  );
  return response.data;
};

export { getReviews };
