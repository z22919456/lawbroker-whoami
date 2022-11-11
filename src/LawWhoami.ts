import getFingerPrint from './getFingerPrint'
import fromSubmitHandler from './formSubmitHandler'
interface UserInformation {
  eno?: string[]
  cid?: string[]
  email?: string[]
  mobilePhone?: string[]
  name?: string[]
}

let url: string = ''

const init = (apiUrl: string): void => {
  url = apiUrl

  console.log('LawWhoami initialized')
  // GetFingerPrint in initialized
  getFingerPrint()

  // Add listener for each from element to auto generate UID
  console.log('addEventListener for each form')
  window.onload = () => {
    console.log('document load')
    const formElements = document.querySelectorAll('form')
    formElements.forEach(element => element.addEventListener('submit', fromSubmitHandler))
  }
}

const getUid = ({ eno, cid, email, mobilePhone, name }: UserInformation = {}): void => {
  // TODO: fetch uid

  console.log('fetch uid ...', url)

  if (window.dataLayer == null) window.dataLayer = []
  window.dataLayer.push({ user_id: name })
}

export default { init, getUid, getFingerPrint }
