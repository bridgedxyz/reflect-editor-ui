import React, { useState } from "react";
import styled from "@emotion/styled";

import HirachyItem from "./Item";

export const dummyData = [
  {
    id: "1",
    title: "Item1",
    type: "layout",
    child: [
      {
        id: "3",
        title: "Item",
        type: "layout",
      },
    ],
  },
  {
    id: "2",
    title: "Item2",
    type: "layout",
    child: [
      {
        id: "4",
        title: "Item",
        type: "layout",
      },
    ],
  },
];

type SceneType = "layout" | "text" | "icon" | "image";
export interface Struct {
  id: string;
  title: string;
  type: SceneType;
  child?: Struct[];
}

export interface HirachyProps {
  /** @inetrnal Expand HirachyItem Function */
  onExpand?: () => void;
  /** Selected HirachyItem Function */
  onSelect: (id: string) => void;
  /** HitachyItem Margin Level */
  level?: number;
  /** Scene Structs */
  structs: Struct[];
  /** Current Selected Id */
  selectId: string;
}

function Hirachy(props: HirachyProps) {
  const [isExpaned, setIsExpaned] = useState(false);
  const { level, structs, onSelect, selectId } = props;

  return (
    <Wrapper>
      {structs.map((i, ix) => (
        <React.Fragment key={ix}>
          <HirachyItem
            struct={i}
            level={level}
            isExpand={isExpaned}
            isSelect={selectId === i.id}
            onExpand={() => setIsExpaned(!isExpaned)}
            onSelect={() => onSelect(i.id)}
          />
          {i.child && isExpaned && (
            <Hirachy
              selectId={selectId}
              level={level + 1}
              structs={i.child}
              onExpand={() => setIsExpaned(!isExpaned)}
              onSelect={onSelect}
            />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

Hirachy.defaultProps = {
  level: 0,
  structs: [],
  expandIds: [],
};

export default Hirachy;

const Wrapper = styled.div`
  max-width: 230px;
  width: 100%;
`;
