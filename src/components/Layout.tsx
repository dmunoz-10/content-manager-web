import { FC, PropsWithChildren } from "react"
import Navbar from "./Navbar"
import ActiveResource from "./resources/Active"

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
    </>
  )
}

export default Layout
