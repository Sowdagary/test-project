import { LISTING_PER_PAGE } from "@/constants";

const calcPageCount = (
  totalCount: number,
  perPage: number = LISTING_PER_PAGE
) => {
  return totalCount ? Math.ceil(totalCount / perPage) : 0;
};

export default calcPageCount;
