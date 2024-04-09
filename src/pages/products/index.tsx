import style from '../../styles/home.module.css';
import Nav from '../Nav';
import Link from 'next/link';
const Products = () => {
  return (
    <>
    <Nav />
    <div className={style.date}>This is Product page</div>

    <div className='mt-3'>
      <Link href='/'>
          <span>Go to Home Page</span>
      </Link>
    </div>
    </>
  )
}

export default Products