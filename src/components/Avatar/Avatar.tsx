import Image from 'next/image'

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps {
  image: string
  name: string
  size: AvatarSize;
  rounded?: boolean
}

export const getUserInitials = (fullName: string): string => {
  const names = fullName.split(' ');
  if (names.length < 2) {
      return fullName.charAt(0);
  }
  const firstNameInitial = names[0].charAt(0);
  const lastNameInitial = names[1].charAt(0);
  return firstNameInitial + lastNameInitial;
}

export const getSizesValue = (size: AvatarSize): number => {
  return sizes[size]
}

const sizes: Record<AvatarSize, number> = {
  sm: 40,
  md: 100,
  lg: 200
}

const tailwindSizes: Record<AvatarSize, string> = {
  sm: 'w-10 h-10',
  md: 'w-[100px] h-[100px]',
  lg: 'w-[200px] h-[200px]'
}

const Avatar = (props: AvatarProps) => {

  const size = getSizesValue(props.size)

  return (
    <>
    {props.image ? (
      <Image className={`${props.rounded ? 'rounded-full' : 'rounded-md'}`} src={props.image} alt={`Profile picture of ${props.name}`} width={size} height={size} />
    ) : (
      <span className={`flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-3 ${tailwindSizes[props.size]} ${props.rounded ? 'rounded-full' : 'rounded-md'} text-sm font-medium`}>{getUserInitials(props.name as string)}</span>
    )}
    </>
  )
}

export default Avatar