import { FC } from 'react'
import './app.scss'
import { AppRouter } from './routers'

export const App: FC = () => {
    return (
        <div className="app">
            <AppRouter />
        </div>
    )
}
