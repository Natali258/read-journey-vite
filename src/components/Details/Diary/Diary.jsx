import React from "react";
import Icon from "../../Icon/Icon";

export const Diary = () => {
  return (
    <div>
      <p>Diary</p>
      <div>
        <div>
          <Icon
            name="icon-hourglass"
            size={{ width: 20, height: 20 }}
            color="var(--main-text-color)"
          />
        </div>
        <div>
          <Icon
            name="icon-pie-chart"
            size={{ width: 20, height: 20 }}
            color="var(--icon-diary-color)"
            secondaryColor="var(--grey-text-color)"
          />
        </div>
      </div>
      {/* <ul>
        <DiaryItem />
      </ul> */}
    </div>
  );
};
