'use client'
import styles from "./article.module.css"
import modalStyles from "./modal.module.css"
import Image from 'next/image'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type AricleParam = {
    title: string
    caption: string
    type: number
    link?: string
}

export const Article = ({ title, caption, type }: AricleParam) => {
    const searchParams = useSearchParams()
    const share = searchParams.get('share')

    let types = {
        type: styles.type1,
        subType: styles.subType1
    }

    switch (type) {
        case 1:
            break;
        case 2:
            types = {
                type: styles.type2,
                subType: styles.subType2
            }
            break;
        case 3:
            types = {
                type: styles.type3,
                subType: styles.subType3
            }
            break;
        case 4:
            types = {
                type: styles.type4,
                subType: styles.subType4
            }
    }

    return (
        <div className={styles.article}>
            <div className={types.type}>
                <h1>{title}</h1>
                <div className={types.subType}>
                    <p>{caption}</p>
                </div>
                <button className={styles.button}>
                    <Image
                        style={{ marginRight: 2 }}
                        src="/heart.png"
                        width={16}
                        height={16}
                        alt="Picture of the author"
                    />
                    23
                </button>
                <Link href="/?share=true" className={styles.button}>
                    <Image
                        style={{ marginRight: 2 }}
                        src="/link.png"
                        width={16}
                        height={16}
                        alt="Picture of the author"
                    />
                    share
                </Link>
            </div>

            <div id="myModal" style={{ display: share && "block" }} className={modalStyles.modal}>
                <div className={modalStyles.modalContent}>
                    <div className={modalStyles.modalHeader}>
                        <Link href="/">
                            Close
                        </Link>
                    </div>
                    <div className={modalStyles.modalBody}>
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </div>
                    <div className={modalStyles.modalFooter}>
                        <h3>Modal Footer</h3>
                    </div>
                </div>

            </div>

        </div >
    )
}