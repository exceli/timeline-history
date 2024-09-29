import { Timeline } from '@/features/timeline'
import './mainPage.scss'

export const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="container">
                <h1>Timeline History</h1>
                <Timeline />
            </div>
        </div>
    )
}
