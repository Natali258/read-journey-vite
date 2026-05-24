import React from "react";
import Icon from "../../Icon/Icon";
import { DiaryHeaderContainer, DiaryIconContainer, DiaryTitle, DiaryUl } from "./Diary.styled";

export const Diary = () => {
  return (
    <div>
      <DiaryHeaderContainer>
        <DiaryTitle>Diary</DiaryTitle>
        <DiaryIconContainer>
          <Icon
              name="icon-hourglass"
              size={{ width: 20, height: 20 }}
              color="var(--main-text-color)"
            />
          <Icon
              name="icon-pie-chart"
              size={{ width: 20, height: 20 }}
              color="var(--icon-diary-color)"
              secondaryColor="var(--grey-text-color)"
            />
        </DiaryIconContainer>
      </DiaryHeaderContainer>
      <DiaryUl>11111
        {/* <DiaryItem /> */}
      </DiaryUl>
    </div>
  );
};
