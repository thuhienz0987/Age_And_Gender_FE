import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { memo } from "react";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={168}
    height={150}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M50.667 115.417h66.666v-3.959c0-5.833-2.951-10.347-8.854-13.541-5.903-3.195-14.062-4.792-24.479-4.792s-18.576 1.597-24.48 4.792c-5.902 3.194-8.853 7.708-8.853 13.541v3.959Zm33.316-36.25c4.178 0 7.76-1.488 10.746-4.463 2.986-2.975 4.48-6.551 4.48-10.729 0-4.178-1.488-7.76-4.463-10.746-2.975-2.986-6.552-4.479-10.73-4.479-4.177 0-7.759 1.487-10.745 4.462-2.986 2.976-4.48 6.552-4.48 10.73 0 4.177 1.488 7.76 4.463 10.745 2.975 2.987 6.552 4.48 10.73 4.48ZM13.167 150c-3.334 0-6.25-1.25-8.75-3.75s-3.75-5.417-3.75-8.75V30.625c0-3.194 1.25-6.076 3.75-8.646 2.5-2.57 5.416-3.854 8.75-3.854h30.625L59 0h50l15.208 18.125h30.625c3.195 0 6.077 1.285 8.646 3.854 2.57 2.57 3.854 5.452 3.854 8.646V137.5c0 3.333-1.284 6.25-3.854 8.75-2.569 2.5-5.451 3.75-8.646 3.75H13.167Zm141.666-12.5V30.625h-36.458L103.167 12.5H64.833L49.625 30.625H13.167V137.5h141.666Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;