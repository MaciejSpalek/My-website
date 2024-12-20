import { useWindowSize } from "./useWindowSize";
import { breakpoints } from "theme";

export const useIsMobileView = () => {
  const windowSize = useWindowSize();
  const isMobileView = windowSize.width as number < breakpoints.md;

  if(null == windowSize.height || null == windowSize.width) {
    return null
  }

  return isMobileView;
};
