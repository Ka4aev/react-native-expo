import { View } from 'react-native'
import { FC } from 'react'

interface Props {
  width?: number;
  height?: number;
}


const Spacer: FC<Props> = ({ width = "100%", height = 40}) => {
  return (
      <View style={{ width, height }} />
  )
}

export default Spacer;