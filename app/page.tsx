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
                <h1>Anonymity</h1>
                <p>ไม่มีประสบการณ์ไหนที่ไม่มีค่า มาแชร์ประสบการณ์ในอดีตกันเถอะ!</p>
            </div>
            <form onSubmit={onSubmit}>
                <input placeholder="ค้นหาประวัติศาสตร์ที่มีคุณค่า" type="text" name="search" />
                <button type="submit">ค้นหา</button>
            </form>
        </div>
        <button onClick={() => setShowModal(true)}>เพิ่มเรื่องราวของคุณ</button>
        <Modal style={{ display: showModal ? "block" : "none" }} onClose={() => setShowModal(false)} />
        <div className={styles.body}>
            {articles.map(({ id, title, body, articleType }) =>
                <Article
                    key={id}
                    id={id}
                    title={title}
                    caption={body}
                    type={articleType}
                />
            )}
        </div>
        <a href="https://www.flaticon.com/free-icons/durable" title="durable icons">Durable icons created by Freepik - Flaticon</a>
    </div>
}