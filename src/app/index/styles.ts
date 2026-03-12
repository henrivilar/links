import { StyleSheet } from 'react-native';

import { colors } from '@/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    color: colors.green[300],
    fontSize: 22
  }
})