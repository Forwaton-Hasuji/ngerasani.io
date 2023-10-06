export const ratingAverage = (starData: any) => {
  const totalCount = starData.star1 + starData.star2 + starData.star3 + starData.star4 + starData.star5
  const totalStar =
        (starData.star1 * 1) +
        (starData.star2 * 2) +
        (starData.star3 * 3) +
        (starData.star4 * 4) +
        (starData.star5 * 5)
  return (totalStar / totalCount).toFixed(1)
}
