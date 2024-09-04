import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface State {
    QrCodes: String[];
}
interface Actions {
    SetQrCodes: (qrcodes: String[]) => void
}



export const useQrStore = create<State & Actions>()(persist(((set) => ({
    QrCodes: [],
    SetQrCodes: (qrCodes: State['QrCodes']) => set({ QrCodes: qrCodes })

})), { name: "QR" }))