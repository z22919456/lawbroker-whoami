import * as FingerprintJS from '@fingerprintjs/fingerprintjs'
import getCookie from './getCookie'

function getFingerPrint (): void {
  if (!getCookie('fingerprint')) {
    const fpPromise = FingerprintJS.load()
    fpPromise
      .then(async fp => await fp.get())
      .then(result => {
        const visitorId = result.visitorId
        document.cookie = `fingerprint=${visitorId}; secure; path=/`
      })
      .catch(error => console.error(error))
  }
}

export default getFingerPrint
