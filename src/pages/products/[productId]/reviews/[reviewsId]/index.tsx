import { useRouter } from "next/router"

const Reviews = () => {

   const router = useRouter();
   const {reviewsId, productId} = router.query;
   
  return (
    <div>This is reviews page - {reviewsId} and product is - {productId} </div>
  )
}

export default Reviews