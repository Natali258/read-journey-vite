import React from "react";
import {
  StatisticsCircleContainer,
  StatisticsContainer,
  StatisticsContainerHeader,
  StatisticsContainerIcon,
  StatisticsGreen,
  StatisticsProgress,
  StatisticsProgressContainer,
  StatisticsProgressPage,
  StatisticsText,
  StatisticsTextContainer,
  StatisticsTitle,
  StatisticsTotalProgress,
} from "./Statistics.styled";
import Icon from "../../Icon/Icon";
import { useSelector } from "react-redux";
import { selectReadingBook } from "../../../redux/bookSlice/BookSlice";

export const Statistics = () => {
  const readingBook = useSelector(selectReadingBook);
  const progress = readingBook?.progress || [];
  const pagesRead = progress.reduce((total, progress) => {
    return total + (progress.finishPage - progress.startPage);
  }, 0);
  const totalPages = readingBook?.totalPages;

  const percent = (pagesRead / totalPages) * 100;
  const radius = 80;
  const stroke = 10;

  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percent / 100) * circumference;
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
      <StatisticsProgressContainer>
        <StatisticsCircleContainer>
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="#2a2a2a"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#30d158"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              transform={`rotate(-90 ${radius} ${radius})`}
            />
          </svg>
          <StatisticsTotalProgress>100%</StatisticsTotalProgress>
        </StatisticsCircleContainer>
        
        <StatisticsTextContainer>
          <StatisticsGreen></StatisticsGreen>
          <div>
            <StatisticsProgress>{percent.toFixed(2)}%</StatisticsProgress>
            <StatisticsProgressPage>{pagesRead} pages read</StatisticsProgressPage>
          </div>
        </StatisticsTextContainer>
      </StatisticsProgressContainer>
    </StatisticsContainer>
  );
};
