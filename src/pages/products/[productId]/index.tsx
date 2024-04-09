import { useRouter } from "next/router"

const ProductDetails = () => {

    const router = useRouter();
    const productId = router.query.productId;
  return (
    <div>This is product detail page - {productId} </div>
  )
}

export default ProductDetails