import getFingerPrint from './getFingerPrint';
interface UserInformation {
    eno?: string;
    cid?: string;
    email?: string;
    mobilePhone?: string;
    name?: string;
}
declare const _default: {
    init: (apiUrl: string) => void;
    getUid: ({ eno, cid, email, mobilePhone, name }?: UserInformation) => void;
    getFingerPrint: typeof getFingerPrint;
};
export default _default;
//# sourceMappingURL=LawUid.d.ts.map