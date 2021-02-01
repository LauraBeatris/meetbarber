import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import Avatar from "~/components/Base/Avatar";

import { HorizontalFlatListItemProps } from "./types";

export const CreateAppointmentHeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const ProviderListContainer = styled.View`
  padding: 32px 0px 16px;
`;

export const HorizontalFlatListItem = styled(RectButton)<HorizontalFlatListItemProps>`
  height: 100%;
  height: 48px;
  width: 175px;
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

export const HorizontalFlatListItemName = styled.Text<HorizontalFlatListItemProps>`
  flex: 1;
  font-size: 14px;
  font-family: 'RobotoSlab-Medium';
  color: ${({ theme, isSelected }) => (
    isSelected
      ? theme.colors.darkSecondary
      : theme.colors.white
  )};
`;

const PROVIDER_LIST_ITEM_AVATAR_LENGTH = 32;

export const HorizontalFlatListItemAvatar = styled(Avatar)`
  height: ${PROVIDER_LIST_ITEM_AVATAR_LENGTH}px;
  width: ${PROVIDER_LIST_ITEM_AVATAR_LENGTH}px;
  margin-right: 8px;
  border-radius: ${PROVIDER_LIST_ITEM_AVATAR_LENGTH / 2}px;
`;