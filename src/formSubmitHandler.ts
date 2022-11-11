const CID_KEYWORD = ['cid', 'citizenId', 'citizen_id', 'id']
const ENO_KEYWORD = ['eno', 'uid', 'user', 'userId', 'userID', 'user_id', 'memberId', 'member_id', 'memberID', 'ID', 'id', 'username', 'user_name']
const NAME_KEYWORD = ['name', 'xname']
const MOBILE_KEYWORD = ['mobilePhone', 'mobile_phone', 'mobile', 'phone', 'phone_number', 'phoneNumber']
const EMAIL_KEYWORD = ['mobilePhone', 'mobile_phone', 'mobile', 'phone', 'phone_number', 'phoneNumber']

const hasNameAttrExistsKeyword = (keywords: string[], element: HTMLElement): boolean => {
  return keywords.findIndex(keyword => {
    const reg = new RegExp(`.*${keyword}.*`)
    return !!element.getAttribute('name')?.match(reg)
  }) !== -1
}

interface filterInputElementsReturn {
  name: string[]
  email: string[]
  mobilePhone: string[]
  eno: string[]
  cid: string[]
}

const filterAndGetInputElementValues = (inputElements: NodeListOf<HTMLInputElement>): filterInputElementsReturn => {
  const name: string[] = []
  const email: string[] = []
  const mobilePhone: string[] = []
  const eno: string[] = []
  const cid: string[] = []

  inputElements.forEach(element => {
    if (hasNameAttrExistsKeyword(CID_KEYWORD, element)) {
      cid.push(element.value)
      return
    }

    if (hasNameAttrExistsKeyword(ENO_KEYWORD, element)) {
      eno.push(element.value)
      return
    }

    if (hasNameAttrExistsKeyword(MOBILE_KEYWORD, element)) {
      mobilePhone.push(element.value)
      return
    }

    if (hasNameAttrExistsKeyword(EMAIL_KEYWORD, element)) {
      email.push(element.value)
      return
    }

    if (hasNameAttrExistsKeyword(NAME_KEYWORD, element)) {
      name.push(element.value)
    }
  })

  return { mobilePhone, cid, name, email, eno }
}

function handleFormSubmit (e: SubmitEvent): void {
  const formElement = e.target
  if (!formElement) return
  const inputElements = (formElement as HTMLElement).querySelectorAll('input')
  const fieldElementValues = filterAndGetInputElementValues(inputElements)
  console.log(fieldElementValues)
  window.LawWhoami?.getUid(fieldElementValues)
}

export default handleFormSubmit
