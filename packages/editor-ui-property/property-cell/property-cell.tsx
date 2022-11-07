import React from "react";
import styled from "@emotion/styled";

export function PropertyCell({
  background,
  border,
  outline,
  children,
  height,
  onClick,
}: React.PropsWithChildren<{
  background?: React.CSSProperties["background"];
  border?: React.CSSProperties["border"];
  outline?: React.CSSProperties["outline"];
  height?: React.CSSProperties["height"];
  onClick?: React.MouseEventHandler;
}>) {
  return (
    <PropertyCellContainer
      onClick={onClick}
      style={{
        background,
        border,
        outline,
        height,
      }}
    >
      {children}
    </PropertyCellContainer>
  );
}

const PropertyCellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
