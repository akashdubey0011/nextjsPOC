
const User = ({elem}:any) => {
  return (
    <>
    <div>Name : {elem.name}</div>
    <div>zipcode: {elem.address.zipcode}</div>
    </>
  )
}

export default User