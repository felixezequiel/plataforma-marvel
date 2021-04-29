import { InputCheckCustom, InputCustom } from "./style"

export const InputPM = ({ ...rest }) => {
  return (
    <InputCustom 
      { ...rest }
    />
  )
}

export const InputCheckPM = ({ color, checkColor, ...rest }) => {
  return (
    <InputCheckCustom 
      { ...rest }
      color={color}
      checkColor={checkColor}
    />
  )
}