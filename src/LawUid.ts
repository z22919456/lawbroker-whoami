import getFingerPrint from './getFingerPrint'
interface UserInformation {
  eno?: string
  cid?: string
  email?: string
  mobilePhone?: string
  name?: string
}

let url: string = ''

const init = (apiUrl: string): void => {
  url = apiUrl
}

const getUid = ({ eno, cid, email, mobilePhone, name }: UserInformation = {}): void => {
  // TODO: fetch uid

  console.log(url)

  if (window.dataLayer == null) window.dataLayer = []
  window.dataLayer.push({ user_id: name })
}

export default { init, getUid, getFingerPrint }
