import Image from 'next/image'
import mypic from '../images/logo.png'



export function Logo(props) {
  return (
      <Image
          src={mypic}
          alt="logo"
          {...props}
      />
  )
}
