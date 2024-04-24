import { TypeWithKey } from '../modules/type-with-key.model'



export const getValidationError = (errorCode: number | string) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Se rompió la red",
  }

  return codeMatcher[errorCode]
}