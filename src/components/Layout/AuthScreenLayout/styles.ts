import styled from "styled-components/native";
import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 80px 20px 10px;
  align-items: center;
  justify-content: space-between;
`;

export const AuthFormContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 50%;
  padding-top: 40px;
`;

export const FormBottomButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const FormBottomButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const FooterButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.darkSecondary};
  padding: 16px 0 ${Platform.OS === "ios" && `${getBottomSpace() ? getBottomSpace() : 20}px`};
  background: ${({ theme }) => theme.colors.dark};
`;

export const FooterButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 16px;
`;
