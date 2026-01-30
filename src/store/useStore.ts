import { create } from 'zustand'

type Store = {
  currentSection: string
  clearCurrentSection: () => void
  updateCurrentSection: (newSection: string) => void
}

const useStore = create<Store>((set) => ({
  currentSection: '',
  clearCurrentSection: () => set({ currentSection: '' }),
  updateCurrentSection: (newSection) => set({ currentSection: newSection }),
}))

export default useStore