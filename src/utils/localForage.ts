import { getLocalForage } from 'can-can-word-bug'

/** 用户信息 */
export type UserInfo = any

export default getLocalForage<{
  /** 用户信息 */
  userInfo: UserInfo
}>()

