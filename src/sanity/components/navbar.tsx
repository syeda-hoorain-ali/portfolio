import { NavbarProps } from "sanity";

// ComponentType<NavbarProps>

const Navbar = (props: NavbarProps) => {
  return (
    <div>
      {props.renderDefault(props)}
    </div>
  )
}

export default Navbar
