'use client'
import React, { FormEvent, useEffect, useState } from "react"
import styles from "./page.module.css"
import { Article } from "../components/article"
import { Modal } from "../components/modal";
import { allArticles, ArticleType } from "../apollo/articles";


export default function Page() {
    const [showModal, setShowModal] = useState(false);
    const [articles, setArticles] = useState<ArticleType[]>([])

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(formData.get('search'))
    }

    useEffect(() => {
        allArticles().then((a: ArticleType[]) => setArticles(a))
    }, [])

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
            {articles.map(({ id, title, caption, type, link }) =>
                <Article
                    key={id}
                    id={id}
                    title={title}
                    caption={caption}
                    type={type}
                    link={link}
                />
            )}
        </div>
        <a href="https://www.flaticon.com/free-icons/durable" title="durable icons">Durable icons created by Freepik - Flaticon</a>
    </div>
}