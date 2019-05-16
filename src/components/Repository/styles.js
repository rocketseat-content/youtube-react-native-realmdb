import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
`;


export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  margin-left: 5px;
`;
