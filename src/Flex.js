import React from "react";

const Flex = ({
  direction = "horizontal",
  gap = 10,
  styleProps = {},
  ...props
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: direction, gap, ...styleProps }}
      {...props}
    ></div>
  );
};

export const HStack = ({
  children,
  gap = 10,
  styleProps = {},
  vCentered,
  ...props
}) => {
  return (
    <Flex
      direction="horizontal"
      gap={gap}
      styleProps={{
        ...styleProps,
        ...(vCentered ? { alignItems: "center" } : {}),
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const VStack = ({
  children,
  gap = 10,
  styleProps = {},
  vCentered,
  ...props
}) => {
  return (
    <Flex
      direction="column"
      gap={gap}
      styleProps={{
        ...styleProps,
        ...(vCentered ? { justifyContent: "center" } : {}),
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Flex;
