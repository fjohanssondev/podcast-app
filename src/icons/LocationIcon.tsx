import { IconProps } from "./icons"

const LocationIcon: React.FC<IconProps> = ({ color = '#fff' }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5361 2.92714C4.40832 3.91248 3.54839 5.66773 3.54839 8.83842C3.54839 13.1381 6.9027 16.4425 8.99546 18.0695C9.59949 18.5391 10.4005 18.5391 11.0045 18.0695C13.0973 16.4425 16.4516 13.1381 16.4516 8.83842C16.4516 5.66773 15.5917 3.91248 14.4639 2.92714C13.3132 1.92177 11.728 1.57829 10 1.57829C8.272 1.57829 6.6868 1.92177 5.5361 2.92714ZM4.52842 1.72881C6.08739 0.366743 8.1151 0 10 0C11.8849 0 13.9126 0.366743 15.4716 1.72881C17.0535 3.11091 18 5.38029 18 8.83842C18 13.9465 14.0772 17.6657 11.9436 19.3244C10.785 20.2252 9.21503 20.2252 8.05644 19.3244C5.92284 17.6657 2 13.9465 2 8.83842C2 5.38029 2.94652 3.11091 4.52842 1.72881Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 5.75C8.75736 5.75 7.75 6.75736 7.75 8C7.75 9.24264 8.75736 10.25 10 10.25C11.2426 10.25 12.25 9.24264 12.25 8C12.25 6.75736 11.2426 5.75 10 5.75ZM6.25 8C6.25 5.92893 7.92893 4.25 10 4.25C12.0711 4.25 13.75 5.92893 13.75 8C13.75 10.0711 12.0711 11.75 10 11.75C7.92893 11.75 6.25 10.0711 6.25 8Z" fill={color} />
    </svg>
  )
}

export { LocationIcon }