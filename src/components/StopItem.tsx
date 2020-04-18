import React from 'react'

interface StopItemProps {
  item: NextTrip.Stop
}

export const StopItem: React.FC<StopItemProps> = ({ item: { Text } }) => {
  return <li>{Text}</li>
}

export default StopItem
