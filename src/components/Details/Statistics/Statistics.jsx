import React from "react";
import { StatisticsContainer, StatisticsContainerHeader, StatisticsContainerIcon, StatisticsText, StatisticsTitle } from "./Statistics.styled";
import Icon from "../../Icon/Icon";

export const Statistics = () => {
  return (
    <StatisticsContainer>
      <StatisticsContainerHeader>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsContainerIcon>
          <li>
            <Icon
              name="icon-hourglass"
              size={{ width: 20, height: 20 }}
              color="var(--grey-text-color)"
            />
          </li>
          <li>
            <Icon
              name="icon-pie-chart"
              size={{ width: 20, height: 20 }}
              color="var(--pia-chart-color)"
              secondaryColor="var(--main-text-color)"
            />
          </li>
        </StatisticsContainerIcon>
      </StatisticsContainerHeader>
      <StatisticsText>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </StatisticsText>
      <div>Circle</div>
    </StatisticsContainer>
  );
};
