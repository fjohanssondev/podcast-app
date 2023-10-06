import { IconProps } from "./icons"

const HomeIcon: React.FC<IconProps> = ({ color = "#fff" }) => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3197 17.395H11.0829C12.8059 17.395 13.9893 17.3933 14.8993 17.3045C15.7857 17.218 16.2511 17.0602 16.5852 16.8482C17.0137 16.5763 17.3774 16.2149 17.651 15.7891C17.8644 15.4571 18.0231 14.9946 18.1102 14.1138C18.1996 13.2096 18.2013 12.0337 18.2013 10.3216C18.2013 8.25521 18.1776 7.61464 17.9678 7.07287C17.8501 6.76889 17.69 6.48284 17.4922 6.22312C17.1397 5.76023 16.6045 5.40234 14.8378 4.31233L14.6576 4.20109C13.6134 3.55687 12.9068 3.12231 12.3231 2.82577C11.7621 2.54075 11.4062 2.43259 11.0895 2.39747C10.8315 2.36886 10.5711 2.36886 10.3131 2.39747C9.99639 2.43259 9.64049 2.54075 9.07948 2.82577C8.49576 3.12231 7.78917 3.55687 6.74504 4.20109L6.56474 4.31233C4.79808 5.40234 4.26291 5.76023 3.91039 6.22312C3.71259 6.48284 3.55248 6.76889 3.43477 7.07287C3.22498 7.61464 3.20129 8.25521 3.20129 10.3216C3.20129 12.0337 3.20298 13.2096 3.29238 14.1138C3.37945 14.9946 3.53817 15.4571 3.75159 15.7891C4.02523 16.2149 4.38891 16.5763 4.81735 16.8482C5.1515 17.0602 5.61692 17.218 6.50332 17.3045C7.41332 17.3933 8.59668 17.395 10.3197 17.395ZM2.03483 6.5376C1.70129 7.39893 1.70129 8.37315 1.70129 10.3216C1.70129 13.6861 1.70129 15.3684 2.48743 16.5914C2.87834 17.1996 3.39789 17.7159 4.00995 18.1043C5.24081 18.8855 6.93378 18.8855 10.3197 18.8855H11.0829C14.4688 18.8855 16.1618 18.8855 17.3926 18.1043C18.0047 17.7159 18.5242 17.1996 18.9152 16.5914C19.7013 15.3684 19.7013 13.6861 19.7013 10.3216C19.7013 8.37315 19.7013 7.39893 19.3678 6.5376C19.1996 6.10334 18.9709 5.6947 18.6883 5.32367C18.1278 4.58775 17.2949 4.07385 15.6291 3.04605L15.4488 2.93482C13.4021 1.67205 12.3788 1.04067 11.2558 0.916147C10.8873 0.875282 10.5153 0.875282 10.1468 0.916147C9.02377 1.04067 8.00044 1.67205 5.95378 2.93482L5.77349 3.04605C4.10767 4.07385 3.27475 4.58775 2.71428 5.32367C2.43171 5.6947 2.20299 6.10334 2.03483 6.5376Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.95129 14.0001C6.95129 13.5858 7.28708 13.2501 7.70129 13.2501H13.7013C14.1155 13.2501 14.4513 13.5858 14.4513 14.0001C14.4513 14.4143 14.1155 14.7501 13.7013 14.7501H7.70129C7.28708 14.7501 6.95129 14.4143 6.95129 14.0001Z" fill={color} />
    </svg>
  )
}

export { HomeIcon }