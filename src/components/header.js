import * as React from "react"
import { Link } from "gatsby"

const Header = ({ to, label }) => {
  return (
    <header class="sticky top-0 z-50">
      <nav className="px-5 md:px-20 grid grid-cols-3 border-b border-primary bg-background pt-4 pb-3 align-middle ">
        <Link
          to={to}
          className="col-span-1 justify-self-start place-self-center"
        >
          <div className="text-secondary ">{label}</div>
        </Link>
        <Link
          to="/"
          className="col-span-1 justify-self-middle place-self-center"
        >
          <div className="text-primary">SLi.ST</div>
        </Link>
        <a
          href="https://instagram.com/sli.st96"
          className="col-span-1 justify-self-end place-self-center"
        >
          <div className="text-secondary ">IG</div>
        </a>
      </nav>
    </header>
  )
}

export default Header
