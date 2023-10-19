interface PauseIconProps {
  type: 'solid' | 'duotone' | 'line';
  primaryColor?: string;
  secondaryColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PauseIcon = ({ type, primaryColor = "#000", secondaryColor = primaryColor, size = "sm" }: PauseIconProps) => {

  const sizes = {
    sm: "20",
    md: "32",
    lg: "48",
  }

  const line = (
    <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8319 6.95369C11.4141 6.95369 11.0754 7.29236 11.0754 7.71012V12.2899C11.0754 12.7076 11.4141 13.0463 11.8319 13.0463C12.2496 13.0463 12.5883 12.7076 12.5883 12.2899V7.71012C12.5883 7.29236 12.2496 6.95369 11.8319 6.95369Z" fill={primaryColor} />
      <path d="M8.1681 6.95369C7.75034 6.95369 7.41168 7.29236 7.41168 7.71012V12.2899C7.41168 12.7076 7.75034 13.0463 8.1681 13.0463C8.58587 13.0463 8.92453 12.7076 8.92453 12.2899V7.71012C8.92453 7.29236 8.58587 6.95369 8.1681 6.95369Z" fill={primaryColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM2.51285 10C2.51285 5.86496 5.86496 2.51285 10 2.51285C14.135 2.51285 17.4872 5.86496 17.4872 10C17.4872 14.135 14.135 17.4872 10 17.4872C5.86496 17.4872 2.51285 14.135 2.51285 10Z" fill={primaryColor} />
    </svg>
  )

  const solid = (
    <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10ZM7.41162 7.71016C7.41162 7.2924 7.75028 6.95374 8.16805 6.95374C8.58581 6.95374 8.92447 7.2924 8.92447 7.71016V12.2899C8.92447 12.7077 8.58581 13.0463 8.16805 13.0463C7.75028 13.0463 7.41162 12.7077 7.41162 12.2899V7.71016ZM11.0754 7.71016C11.0754 7.2924 11.414 6.95374 11.8318 6.95374C12.2496 6.95374 12.5882 7.2924 12.5882 7.71016V12.2899C12.5882 12.7077 12.2496 13.0463 11.8318 13.0463C11.414 13.0463 11.0754 12.7077 11.0754 12.2899V7.71016Z" fill={primaryColor} />
    </svg>
  )

  const duotone = (
    <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1Z" fill={secondaryColor} />
      <path d="M11.8318 6.95374C11.414 6.95374 11.0754 7.2924 11.0754 7.71016V12.2899C11.0754 12.7077 11.414 13.0463 11.8318 13.0463C12.2496 13.0463 12.5882 12.7077 12.5882 12.2899V7.71016C12.5882 7.2924 12.2496 6.95374 11.8318 6.95374Z" fill={primaryColor} />
      <path d="M8.16805 6.95374C7.75028 6.95374 7.41162 7.2924 7.41162 7.71016V12.2899C7.41162 12.7077 7.75028 13.0463 8.16805 13.0463C8.58581 13.0463 8.92447 12.7077 8.92447 12.2899V7.71016C8.92447 7.2924 8.58581 6.95374 8.16805 6.95374Z" fill={primaryColor} />
    </svg>
  )

  switch (type) {
    case 'solid':
      return solid;
    case 'duotone':
      return duotone;
    case 'line':
      return line;
    default:
      return line
  }
}

export default PauseIcon