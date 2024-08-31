import React from "react"
import styles from "./page.module.css"
import { Article } from "../components/article"

export default function Page() {
    return <div className={styles.background}>
        <h1>แบบนี้ก็ได้หรอ!</h1>
        <p>รวมเรื่องเหลือจะเชื่อในสังคมไทย อะไรก็ได้</p>
        <div className={styles.article}>
            <Article
                title="น้องออนิว ขโมยลูกวัวป้า แลกรหัสเปส"
                caption="ลั่น ส่งไม่เป็น ขอนัดรับวันเสาร์เพราะป้าไม่อยู่บ้าน"
                type={1}
            />
            <Article
                title='นางแบกเพื่อไทย ตระบัดสัตย์ ไม่แคร์ เลือกผลประโยชน์  ช่าวเน็ตลั่น "จะไปสุดที่ตรงไหน"'
                caption="พรรคประชาธิปัตย์มีมติเอกฉันท์ 34 เสียง เข้าร่วมรัฐบาลเพื่อไทย"
                type={2}
            />
            <Article
                title='วันพีชตอนต่อไป ลูฟี่ตาย โซโลกับซันจิเป็นเกย์ อูซบติดหี วันพีชคือตูดของนามิ'
                caption="อาจารย์โอดะไม่ได้กล่าว เพราะพูดไทยไม่ได้"
                type={3}
            />
            <Article
                title='ครั้งแรกประวัติศาสตร์ สว.ไทย "เลือกกันเอง"'
                caption="ชาวไทยอึ้ง แบบนี้ก็ได้หรอ"
                type={4}
            />
        </div>
    </div>
}