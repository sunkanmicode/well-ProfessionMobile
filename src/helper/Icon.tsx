import * as React from "react";
// import Svg, { Circle, Rect } from "react-native-svg";
import Svg, { SvgProps, Path } from "react-native-svg";

export const HomeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 40 44"
    width={40}
    height={40}
    {...props}
  >
    <Path
      fill="#282d31"
      d="M18.5 10.5c4.1.8 7.4 2.8 10 6-.3.8-1 1.2-2 1a1111 1111 0 0 0-8-5v-2Z"
      opacity={0.8}
    />
    <Path
      fill="#282c31"
      d="M28.5 16.5c1.5 1 2.2 2.5 2 4.5-.4 3.2-1 6.3-1.5 9.5a7 7 0 0 1-2.5 2v-3l2-8.5c-.5-1.3-1.1-2.5-2-3.5 1 .2 1.7-.2 2-1Zm-10-6v2c-2.1 2.7-4.6 5-7.5 7 0 3.4.5 6.7 1.5 10 0 1.1.4 2.1 1 3a4 4 0 0 1-3.5-2 31.4 31.4 0 0 1-1-13c3-2.6 6.2-4.9 9.5-7Z"
      opacity={0.8}
    />
    <Path
      fill="#282c31"
      d="M18.5 23.5c1.1.3 1.8 1.1 2 2.5l-1 2.5a7.1 7.1 0 0 1-1-5Z"
      opacity={0.7}
    />
    <Path
      fill="#282c31"
      d="M12.5 29.5a25 25 0 0 0 14 0v3h-13c-.6-.9-1-1.9-1-3Z"
      opacity={0.8}
    />
  </Svg>
);


  export const FeaturedIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <Path
        fill="#282c31"
        d="M.5 2.5c1.3 2.6 2 5.6 2 9l-1 9c-1-6-1.3-12-1-18Zm20 0c1.3 2.6 2 5.6 2 9l-1 9c-1-6-1.3-12-1-18Z"
        opacity={0.7}
      />
      <Path
        fill="#282c31"
        d="M5.5.5c4-.2 8 0 12 .5L19 2.5c.7 6 .7 12 0 18L17.5 22c-4 .7-8 .7-12 0L4 20.5c-.7-6-.7-12 0-18 .7-.5 1.2-1.2 1.5-2Zm2 2c9.3-1.3 12.7 2.7 10 12h-12c-.5-4.3.2-8.3 2-12Zm-2 14c4-.3 8 0 12 1-1.2 2.4-3.2 3.4-6 3-3.4.6-5.4-.7-6-4Z"
        opacity={0.8}
      />
    </Svg>
  );

  export const SearchIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 40 44"
      width={40}
      height={40}
      {...props}
    >
      <Path
        fill="#282b31"
        d="m27.5 14.5-2 1a9.7 9.7 0 0 0-11-2h-3a10.9 10.9 0 0 1 16 1Z"
        opacity={0.8}
      />
      <Path
        fill="#282c31"
        d="M11.5 13.5h3c-2.7 2.4-4 5.4-4 9l-2-1c0-3.1 1-5.8 3-8Zm16 1c1.7 2.3 2.4 5 2 8l-2-1c-.1-2.2-.8-4.2-2-6l2-1Z"
        opacity={0.8}
      />
      <Path
        fill="#292d31"
        d="m8.5 21.5 2 1 2 4c0 1.1.4 2.1 1 3a6.3 6.3 0 0 1-4.5-4 8.4 8.4 0 0 1-.5-4Z"
        opacity={0.8}
      />
      <Path
        fill="#282c31"
        d="m27.5 21.5 2 1c-.2 1.7-.8 3-2 4a6.5 6.5 0 0 0-3 3c-1.1 1.7-2.8 2.4-5 2l1-2c3.8-1.4 6-4 7-8Z"
        opacity={0.8}
      />
      <Path
        fill="#282d31"
        d="M27.5 26.5c.5 1.9 1.5 3.6 3 5l-1 1a11.4 11.4 0 0 0-5-3 6.5 6.5 0 0 1 3-3Z"
        opacity={0.6}
      />
      <Path
        fill="#282c31"
        d="M12.5 26.5c2.2 2.1 4.9 3.1 8 3l-1 2c-2.4.2-4.4-.4-6-2-.6-.9-1-1.9-1-3Z"
        opacity={0.9}
      />
    </Svg>
  );

 export  const CartIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 40 44"
      width={40}
      height={40}
      {...props}
    >
      <Path
        fill="#1d1c2e"
        d="M16.5 11.5c5.3-1.3 8 .7 8 6h3c.7 4.6 1 9.3 1 14h-18c0-4.7.4-9.4 1-14h3c-.2-2.4.4-4.4 2-6Zm2 2c1.9.2 3.2 1.2 4 3a5 5 0 0 1-6 0l2-3Zm-5 6a31 31 0 0 1 2 2c2.7-2.7 5.3-2.7 8 0 .7-.5 1.2-1.2 1.5-2 .3 3 .8 6 1.5 9-4.6 1-9.3 1.3-14 1 .7-3.3 1-6.6 1-10Z"
        opacity={0.7}
      />
    </Svg>
  );

  export const ProfileIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 40 44"
      width={40}
      height={40}
      {...props}
    >
      <Path
        fill="#282c31"
        d="m30.5 23.5-2-1c-1.6-9.3-6.6-11.8-15-7.5-1.3 1.4-2.3 3-3 4.5.2-1-.2-1.7-1-2 2.7-6.2 7.3-8.3 14-6.5 5.3 2.5 7.7 6.7 7 12.5Z"
        opacity={0.8}
      />
      <Path
        fill="#282c31"
        d="M21.5 23.5c-1.2 1.2-2.5 1.2-4 0-3.1-4-2.5-7 2-9 4.5 2 5.1 5 2 9Zm-4-6h4c-1.7 5-3 5-4 0Zm-8 0c.8.3 1.2 1 1 2-.6 5 1.4 6.7 6 5v2a3 3 0 0 0-2 2c2.1 1.4 4.4 2.1 7 2l1 2c-10.6 0-15-5-13-15Z"
        opacity={0.8}
      />
      <Path
        fill="#272b31"
        d="m28.5 22.5 2 1c-1.2 4.2-4 7.2-8 9l-1-2 3-2.5a12.6 12.6 0 0 0-8-1.5v-2c0-.7.3-1 1-1 1.5 1.2 2.8 1.2 4 0 1.9.9 3.7 1.9 5.5 3 .4-1.4 1-2.7 1.5-4Z"
        opacity={0.8}
      />
    </Svg>
  );

 export const GoogleIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 24 24"
      width={24}
      height={20}
      {...props}
    >
      <Path
        fill="#e94334"
        d="M6.5-.5h10c4.4 1.8 4.7 4 1 6.5-1.9 0-3.7-.5-5.5-1.5-3.4.2-5.6 1.8-6.5 5-1.4-1.4-3-2.4-5-3 1.3-3 3.3-5.3 6-7Z"
        opacity={0.9}
      />
      <Path
        fill="#f9b905"
        d="M.5 6.5c2 .6 3.6 1.6 5 3v4a19 19 0 0 1-5 3c0-.7-.3-1-1-1v-8c.7 0 1-.3 1-1Z"
      />
      <Path
        fill="#4184f3"
        d="M23.5 8.5v8l-4 5a8.3 8.3 0 0 0-4-4 7 7 0 0 1 2-2.5c-2-.5-4-.7-6-.5v-6h12Z"
        opacity={0.9}
      />
      <Path
        fill="#38a753"
        d="M5.5 13.5c2 4.6 5.3 6 10 4 1.8.9 3.2 2.2 4 4a7 7 0 0 0-3 2h-10c-2.7-1.7-4.7-4-6-7a19 19 0 0 0 5-3Z"
        opacity={0.9}
      />
    </Svg>
  );