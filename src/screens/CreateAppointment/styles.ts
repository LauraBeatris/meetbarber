import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import Avatar from "~/components/Base/Avatar";

import { HorizontalFlatListItemProps } from "./types";

export const ProviderListContainer = styled.View`
  padding: 32px 0px 16px;
`;

export const BaseHorizontalFlatListItem = styled(RectButton)<HorizontalFlatListItemProps>`
  height: 100%;
  height: 48px;
  padding: 8px;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  background-color: ${({ theme, isSelected }) => (
    isSelected
      ? theme.colors.yellow
      : theme.colors.shape
  )};
  margin-right: 18px;
`;

export const HorizontalFlatListItemText = styled.Text<HorizontalFlatListItemProps>`
  ${({ theme, isSelected }) => css`
    flex: 1;
    font-size: 14px;
    font-family: ${theme.fonts.medium};
    color: ${(
    isSelected
      ? theme.colors.darkSecondary
      : theme.colors.white
  )};`}
`;

const PROVIDER_LIST_ITEM_AVATAR_LENGTH = 32;

export const HorizontalFlatListItemAvatar = styled(Avatar)`
  height: ${PROVIDER_LIST_ITEM_AVATAR_LENGTH}px;
  width: ${PROVIDER_LIST_ITEM_AVATAR_LENGTH}px;
  margin-right: 8px;
  border-radius: ${PROVIDER_LIST_ITEM_AVATAR_LENGTH / 2}px;
`;

export const CreateAppointmentContent = styled.View`
  padding: 20px 24px 0px;
`;

export const AvailabilityContainer = styled.View`
  padding-bottom: 20px;
`;

export const AvailabilitySubtitle = styled.Text`
 ${({ theme }) => css`
    color: ${theme.colors.grayLight};
    font-size: 16px;
    padding: 0 0 12px 24px;
    font-family: ${theme.fonts.medium};
 `}
`;

export const CreateAppointmentFooter = styled.View`
  padding: 20px 20px 30px;
`;

export const ScheduleContainer = styled.View`
  height: 200px;
`;
