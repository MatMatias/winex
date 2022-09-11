import { useMediaQuery } from "react-responsive";

export const useBreakPoints = () => {
  const FIRST_BREAKPOINT = 750;
  const SECOND_BREAKPOINT = 1100;

  const isFirstBreakpoint = useMediaQuery({
    maxWidth: FIRST_BREAKPOINT,
  });
  const isSecondBreakpoint = useMediaQuery({
    maxWidth: SECOND_BREAKPOINT,
  });

  return {
    isFirstBreakpoint,
    isSecondBreakpoint,
  };
};
