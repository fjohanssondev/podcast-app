import { IconProps } from "./icons"

interface ChevronProps extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}

const ChevronIcon: React.FC<ChevronProps> = ({ direction = 'down', color = '#fff' }) => {

  const rotate = {
    up: 'rotate-180',
    down: 'rotate-0',
    left: 'rotate-45',
    right: '-rotate-45'
  }

  return (
    <svg className={`${rotate[direction]}`} width="12" height="7" viewBox="0 0 12 7" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9652 0.333006C11.2748 0.608194 11.3027 1.08225 11.0275 1.39184L6.26183 6.75318C6.1195 6.9133 5.9155 7.00491 5.70127 7.00491C5.48704 7.00491 5.28304 6.9133 5.14071 6.75318L0.375075 1.39184C0.0998869 1.08225 0.127772 0.608194 0.43736 0.333005C0.746947 0.0578168 1.221 0.0857023 1.49619 0.395289L5.70127 5.12601L9.90635 0.39529C10.1815 0.0857027 10.6556 0.0578172 10.9652 0.333006Z" fill={color} />
    </svg>
  )
}

export { ChevronIcon }