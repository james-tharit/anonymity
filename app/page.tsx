import React from "react"
import styles from "./newspaper.module.css"

export default function Page() {
    return <div className={styles.background}>
        <h1>The Sarcasm News</h1>
        <p>Because the news is already a joke, why not make it funnier?</p>
        <div className={styles.article}>
            <div className={styles.type1}>
                <h1>น้องออนิว ขโมยลูกวัวป้า แลกรหัสเปส</h1>
                <div className={styles.subType1}>
                    <p>ลั่น ส่งไม่เป็น ขอนัดรับวันเสาร์เพราะป้าไม่อยู่บ้าน</p>
                </div>
            </div>
            <div className={styles.type2}>
                <h1>นางแบกเพื่อไทย เลือกผลประโยชน์ของตัวเอง เหนือการรักษาสัจจะวาจา ช่าวเน็ตลั่น "จะไปสุดที่ตรงไหน"</h1>
                <div className={styles.subType2}>
                    <p>พรรคประชาธิปัตย์มีมติเอกฉันท์ 34 เสียง เข้าร่วมรัฐบาลเพื่อไทย</p>
                </div>
            </div>
            <div className={styles.type3}>
                <h1>วันพีชตอนต่อไป ลูฟี่ตาย โซโลกับซันจิเป็นเกย์ อูซบติดหี วันพีชคือตูดของนามิ</h1>
                <p>อาจารย์โอดะไม่ได้กล่าว เพราะพูดไทยไม่ได้</p>
            </div>
        </div>
    </div>
}