import Link from "next/link"

const Nav = () => {
  return (
    <div className='nav'> 
        <h2 className="pageHeader">Page Router </h2>
        <ul className="list_items">
          <li>
            <Link href='/posts'>
              <span>Go to Posts</span>
            </Link>
          </li>
          <li>
            <Link href='/comA'>
              <span>CRUD</span>
            </Link>
          </li>
          <li>
            <Link href='/rest'>
              <span>REST API</span>
            </Link>
          </li>
          <li>
            <Link href='/products'>
              <span>product page</span>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <span>About</span>
            </Link>
          </li>
        </ul>

      </div>
  )
}

export default Nav