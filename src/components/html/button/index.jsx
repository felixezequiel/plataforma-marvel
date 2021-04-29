import { CustomButtom } from "./style"

export const ButtonPM = ({ color, fontColor, ...rest }) => {
  return <CustomButtom 
    color={color}
    fontColor={fontColor}
    { ...rest }
  />
}