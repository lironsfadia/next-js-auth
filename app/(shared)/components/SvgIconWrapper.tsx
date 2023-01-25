import React from 'react';
import Image from 'next/image';

import { SvgIconWrapperProps } from '@/types/SvgIconWrapperProps';

export function SvgIconWrapper({ iconPath, iconStyle, iconAlt }: SvgIconWrapperProps): React.ReactElement {
  return <Image src={iconPath} style={iconStyle} alt={iconAlt} />;
}
