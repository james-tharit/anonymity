'use client'
import React, { FormEvent, useState } from "react"
import styles from "./page.module.css"
import { Article } from "../components/article"
import { Modal } from "../components/modal";

export default function Page() {
    const [showModal, setShowModal] = useState(false);
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        console.log(formData.get('search'))
    }
    return <div className={styles.background}>
        <div className={styles.header}>
            <div>
                <h1>แบบนี้ก็ได้หรอ!</h1>
                <p>รวมเรื่องเหลือจะเชื่อในสังคมไทย อะไรก็ได้</p>
            </div>
            <form onSubmit={onSubmit}>
                <input placeholder="ค้นหาเรื่องราวอันน่าเหลือเชื่อ!" type="text" name="search" />
                <button type="submit">ค้นหาจ้า</button>
            </form>
        </div>
        <button onClick={() => setShowModal(true)}>เพิ่มเรื่องใหม่</button>
        <Modal style={{ display: showModal ? "block" : "none" }} onClose={() => setShowModal(false)} />
        <div className={styles.body}>
            <Article
                id="id-2"
                title='นางแบกเพื่อไทย ตระบัดสัตย์ ไม่แคร์ เลือกผลประโยชน์  ช่าวเน็ตลั่น "จะไปสุดที่ตรงไหน"'
                caption="พรรคประชาธิปัตย์มีมติเอกฉันท์ 34 เสียง เข้าร่วมรัฐบาลเพื่อไทย"
                type={2}
                link="https://youtu.be/-ZC5Y8heDPk?si=7_HhjpeTeqmystp0"
            />
            <Article
                id="id-4"
                title='ครั้งแรกประวัติศาสตร์ สว.ไทย "เลือกกันเอง"'
                caption="คนไทยอึ้ง แบบนี้ก็ได้หรอ"
                type={4}
                link="https://www.thaipbs.or.th/news/content/337938"
            />
        </div>
        <a href="https://www.flaticon.com/free-icons/durable" title="durable icons">Durable icons created by Freepik - Flaticon</a>
    </div>
}