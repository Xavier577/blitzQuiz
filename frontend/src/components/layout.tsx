import { FC } from "react";
import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus  via the mouse,
    but it will still show up on keyboard focus.
    This is for accessiblity. 
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const Layout: FC = ({ children }) => {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      {children}
    </ChakraProvider>
  );
};

export default Layout;
