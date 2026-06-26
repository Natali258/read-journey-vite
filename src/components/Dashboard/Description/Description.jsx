import React from "react";
import {
  DescriptionContainer,
  DescriptionIcon,
  DescriptionItem,
  DescriptionItemNumber,
  DescriptionItemSpan,
  DescriptionItemText,
  DescriptionLinkContainer,
  DescriptionList,
  DescriptionLogoSpan,
  DescriptionNavLink,
  DescriptionTitle,
} from "./Description.styled";
import Icon from "../../Icon/Icon";

export const Description = () => {
  return (
    <DescriptionContainer>
      <DescriptionTitle>Start your workout</DescriptionTitle>
      <DescriptionList>
        <DescriptionItem>
          <DescriptionItemNumber>1</DescriptionItemNumber>
          <DescriptionItemText>
            <DescriptionItemSpan>
              Create a personal library:
            </DescriptionItemSpan>
            add 
            the books you intend to read  to it.
          </DescriptionItemText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionItemNumber>2</DescriptionItemNumber>
          <DescriptionItemText>
            <DescriptionItemSpan>
              Create your first workout:
            </DescriptionItemSpan>
            define  a goal, choose a period, start training.
          </DescriptionItemText>
        </DescriptionItem>
      </DescriptionList>
      <DescriptionLinkContainer>
        <DescriptionNavLink to="/library">My library</DescriptionNavLink>
        <DescriptionLogoSpan>
          <DescriptionIcon
            name="icon-log-in"
            size={{ width: 24, height: 24 }}
            color="rgba(249, 249, 249, 1)"
          />
        </DescriptionLogoSpan>
      </DescriptionLinkContainer>
    </DescriptionContainer>
  );
};
