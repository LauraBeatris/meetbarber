import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px 16px;
`;

export const ProviderContainer = styled(RectButton)`
  width: 100%;
  padding: 20px;
  align-items: center;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex-grow: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 18px;
    font-family: ${theme.fonts.medium};
    margin-bottom: 6px;
    max-width: 90%;
 `}
`;

export const ProviderSchedule = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderScheduleText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.grayLight};
    font-size: 14px;
    font-family: ${theme.fonts.regular};
    margin-left: 10px;
 `}
`;

export const NoProvidersAvailableText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.grayLight};
    font-size: 18px;
    font-family: ${theme.fonts.regular};
    text-align: center;
    margin-top: 20px;
 `}
`;

export const ProvidersListActivityIndicator = styled.ActivityIndicator`
  margin-top: 24px;
`;
