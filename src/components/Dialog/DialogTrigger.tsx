import { Children, cloneElement, useContext, ReactElement } from "react"
import { DialogContext } from "./DialogRoot"

interface DialogTriggerProps {
  children: ReactElement | ReactElement[];
}

const DialogTrigger = (props: DialogTriggerProps) => {

  const { openDialog } = useContext(DialogContext)

  return (
    <>
      {Children.map(props.children, (child) => {
        return cloneElement(child, {
          onClick: openDialog,
          'aria-haspopup': 'dialog',
        })
      })}
    </>
  )
}

export { DialogTrigger }