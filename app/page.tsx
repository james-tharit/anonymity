'use client'
import React, { useState } from "react"
import styles from "./page.module.css"
import { Article } from "../components/article"
import { Modal } from "../components/modal";

export default function Page() {
    const [showModal, setShowModal] = useState(false);

    return <div className={styles.background}>
        <h1>แบบนี้ก็ได้หรอ!</h1>
        <p>รวมเรื่องเหลือจะเชื่อในสังคมไทย อะไรก็ได้</p>
        <button onClick={() => setShowModal(true)}>เพิ่มเรื่องใหม่</button>
        <Modal style={{ display: showModal ? "block" : "none" }} onClose={() => setShowModal(false)} />
        <div className={styles.body}>
            <Article
                id="id-1"
                title="น้องออนิวขโมยลูกวัวป้า แลกรหัสเปส"
                caption="ลั่น ส่งไม่เป็น ขอนัดรับวันเสาร์เพราะป้าไม่อยู่บ้าน"
                type={1}
            />
            <Article
                id="id-2"
                title='นางแบกเพื่อไทย ตระบัดสัตย์ ไม่แคร์ เลือกผลประโยชน์  ช่าวเน็ตลั่น "จะไปสุดที่ตรงไหน"'
                caption="พรรคประชาธิปัตย์มีมติเอกฉันท์ 34 เสียง เข้าร่วมรัฐบาลเพื่อไทย"
                type={2}
            />
            <Article
                id="id-3"
                title='วันพีชตอนต่อไป ลูฟี่ตาย โซโลกับซันจิเป็นเกย์ อูซบติดหี วันพีชคือตูดของนามิ'
                caption="อาจารย์โอดะไม่ได้กล่าว เพราะพูดไทยไม่ได้"
                type={3}
            />
            <Article
                id="id-4"
                title='ครั้งแรกประวัติศาสตร์ สว.ไทย "เลือกกันเอง"'
                caption="ชาวไทยอึ้ง แบบนี้ก็ได้หรอ"
                type={4}
            />
        </div>
        <a href="https://www.flaticon.com/free-icons/durable" title="durable icons">Durable icons created by Freepik - Flaticon</a>
    </div>
}