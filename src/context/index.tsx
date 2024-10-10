import React, { useState } from 'react'

export type Updater<T> = (prev: T) => Partial<T>
export type Setter<T> = Partial<T>
export type ContextUpdater<T> = Updater<T> | Setter<T>

export interface AppContextProps {
    timestamp?: number
    children?: React.ReactNode
}

export interface AppState {
    timestamp?: number
}

export interface AppContextState {
    readonly props: AppContextProps
    readonly state: AppState
    readonly updateState: (updater: ContextUpdater<AppState>) => void
}

const DEFAULT_STATE: AppState = {}

const AppContext = React.createContext<AppContextState>({
    props: {},
    state: DEFAULT_STATE,
    updateState: () => {}
})

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
    const { children, ...otherProps } = props
    const [state, setState] = useState<AppState>(DEFAULT_STATE)
    const updateState = (value: ContextUpdater<AppState>) => {
        if (typeof value === 'function') {
            try {
                setState((prev) => ({ ...prev, ...value(prev) }))
            } catch (e) {
                console.log('AppContext updateState error:', e)
            }
        }
        if (value && typeof value === 'object') {
            setState((prev) => ({ ...prev, ...value }))
        }
    }
    const value: AppContextState = {
        props: otherProps,
        state,
        updateState
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => React.useContext(AppContext)
