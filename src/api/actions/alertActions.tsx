import { AlertAction, SET_ALERT } from "../interface"


export const setAlert = (message: string): AlertAction => {
    return {
      type: SET_ALERT,
      payload: message
    }
}