import { FC, useState, Fragment } from "react";
import { Box, CircularProgress } from "@chakra-ui/react";

const ScreenLoader: FC = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  if (typeof window !== "undefined") {
    // Client-side-only code
    window?.addEventListener("load", () => setIsLoaded(true));
  }
  return (
    <Fragment>
      {isLoaded ? (
        children
      ) : (
        <Box
          width="100%"
          height="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress isIndeterminate color="gray.500" size="120px" />
        </Box>
      )}
    </Fragment>
  );
};

export default ScreenLoader;
