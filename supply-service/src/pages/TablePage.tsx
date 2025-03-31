import styles from "./TablePage.module.css"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { SegmentNav } from "../components/Segment/SegmentNav"
import { Header } from "../components/Header/Header"
import { DeliveryTable } from "../components/Table/DeliveryTable"


export const TablePage = () => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.topRow}>
                    <SegmentNav />
                </div>
                <Header />
                <DeliveryTable />
            </div>
        </div>
    )
}