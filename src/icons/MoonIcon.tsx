import { IconProps } from "./icons";

const MoonIcon: React.FC<IconProps> = ({ color = '#fff' }) => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.30965 1.26638C8.9551 0.9498 8.54041 0.979647 8.28692 1.03502C8.06985 1.08244 7.8191 1.18225 7.59139 1.27289L7.54826 1.29005C7.32841 1.37743 7.11272 1.47279 6.90156 1.57574C6.34882 1.84523 5.82711 2.1668 5.3431 2.53393C3.13186 4.21115 1.70129 6.84546 1.70129 9.8112C1.70129 14.898 5.90091 19 11.0544 19C14.228 19 17.0361 17.446 18.7273 15.0672C18.9343 14.7761 19.1247 14.4724 19.297 14.1577L19.3189 14.1177C19.4294 13.916 19.5546 13.6877 19.625 13.4829C19.7106 13.2342 19.7775 12.8413 19.5174 12.4626C19.2443 12.0649 18.823 12.0026 18.573 11.9962C18.3486 11.9904 18.0758 12.0261 17.8215 12.0593L17.7757 12.0653C12.9819 12.6904 10.7597 11.3722 9.7688 9.67189C8.71703 7.86708 8.84474 5.31473 9.45638 3.1013L9.46883 3.05626C9.54198 2.79187 9.61828 2.51612 9.64581 2.28716C9.67494 2.04487 9.68269 1.59946 9.30965 1.26638ZM7.57322 2.9466C7.7007 2.88445 7.83014 2.82561 7.96144 2.77019C7.32795 5.10784 7.09734 8.12373 8.44642 10.4387C9.86028 12.8649 12.8127 14.2253 17.8607 13.5928C17.7427 13.7959 17.6155 13.9934 17.4796 14.1846C16.0669 16.1717 13.7179 17.4742 11.0544 17.4742C6.72159 17.4742 3.23088 14.0314 3.23088 9.8112C3.23088 7.34818 4.41685 5.15331 6.26891 3.74853C6.67397 3.44129 7.11061 3.17215 7.57322 2.9466Z" fill={color} />
    </svg>
  )
}

export { MoonIcon }