import React from 'react'
import { IconProps } from './icons'

const SadIcon: React.FC<IconProps> = ({ color = '#fff' }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM2.51285 10C2.51285 5.86496 5.86496 2.51285 10 2.51285C14.135 2.51285 17.4872 5.86496 17.4872 10C17.4872 14.135 14.135 17.4872 10 17.4872C5.86496 17.4872 2.51285 14.135 2.51285 10Z" fill={color} />
      <path d="M8.46098 8.38461C8.46098 8.9365 8.01359 9.3839 7.46169 9.3839C6.9098 9.3839 6.4624 8.9365 6.4624 8.38461C6.4624 7.83271 6.9098 7.38531 7.46169 7.38531C8.01359 7.38531 8.46098 7.83271 8.46098 8.38461Z" fill={color} />
      <path d="M13.5391 8.38467C13.5391 8.93727 13.0911 9.38524 12.5385 9.38524C11.9859 9.38524 11.538 8.93727 11.538 8.38467C11.538 7.83207 11.9859 7.38409 12.5385 7.38409C13.0911 7.38409 13.5391 7.83207 13.5391 8.38467Z" fill={color} />
      <path d="M13.0342 14.5414C13.2659 14.889 13.7356 14.983 14.0832 14.7512C14.4308 14.5195 14.5247 14.0498 14.293 13.7023C12.2506 10.6387 7.74894 10.6387 5.70659 13.7022C5.47486 14.0498 5.56878 14.5195 5.91638 14.7512C6.26398 14.983 6.73362 14.889 6.96536 14.5414C8.40889 12.3761 11.5907 12.3761 13.0342 14.5414Z" fill={color} />
    </svg>
  )
}

export default SadIcon