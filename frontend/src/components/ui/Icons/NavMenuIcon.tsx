import { FC, Fragment } from "react";
import { UIIconComponent } from "../../../types/interfaces";

const NavMenuIcon: FC<UIIconComponent> = ({ className, clickAction }) => (
  <Fragment>
    <svg
      onClick={clickAction}
      className={className}
      width="100"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 25H83.3333V33.3333H16.6667V25ZM33.3334 45.8333H83.3333V54.1667H33.3334V45.8333ZM54.1667 66.6667H83.3333V75H54.1667V66.6667Z"
        fill="black"
      />
    </svg>
  </Fragment>
);

export default NavMenuIcon;
