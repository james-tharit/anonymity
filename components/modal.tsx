'use client'
import styles from "./modal.module.css"
import Link from "next/link";

export const Modal = ({ onClose, style }) => {

    const handleCloseClick = () => {
        onClose();
    };

    return (
        <div style={style} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <button onClick={handleCloseClick} className={styles.button}>
                        Close
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <p>เรื่องราวของคุณมีค่า มาแชร์ให้คนอื่นได้เรียนรู้</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                    </div>
                    {/* <Link href="/" className={styles.twitterButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                        <p>Share</p>
                    </Link> */}
                </div>
                <div className={styles.modalFooter}>
                    <p>ไม่มีการเก็บข้อมูลส่วนตัวใดๆในเว็บไซต์นี้</p>
                </div>
            </div>
        </div>
    );

}