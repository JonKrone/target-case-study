import React from 'react'

interface StopItemProps {
  item: NextTrip.Stop
}

export const StopItem: React.FC<StopItemProps> = ({ item: { Text } }) => {
  return <li style={{ paddingTop: '0.5rem' }}>{Text}</li>
}

export default StopItem
