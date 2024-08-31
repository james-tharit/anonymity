'use client'
import styles from "./article.module.css"
import modalStyles from "./modal.module.css"
import Image from 'next/image'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type AricleParam = {
    id: string
    title: string
    caption: string
    type: number
    link?: string
}

export const Article = ({ title, caption, type, id }: AricleParam) => {
    const searchParams = useSearchParams()
    const share = searchParams.get('share')
    console.log(share, title)
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
        <div id={id} className={styles.article}>
            <div className={types.type}>
                <h1>{title}</h1>
                <div className={types.subType}>
                    <h2>{caption}</h2>
                </div>
                <Link href={`/?share=${id}`} className={styles.button}>
                    <Image
                        style={{ marginRight: 2 }}
                        src="/link.svg"
                        width={16}
                        height={16}
                        alt="Picture of the author"
                    />
                    share
                </Link>
            </div>

            <div style={{ display: share === id && "block" }} className={modalStyles.modal}>
                <div className={modalStyles.modalContent}>
                    <div className={modalStyles.modalHeader}>
                        <Link href="/" className={styles.button}>
                            Close
                        </Link>
                    </div>
                    <div className={modalStyles.modalBody}>
                        <p>แชร์พาดหัวข่าวนี้ลง</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className={types.type} style={{ maxWidth: "680px" }}>
                                <h1>{title}</h1>
                                <div className={types.subType}>
                                    <h2>{caption}</h2>
                                </div>
                            </div>
                        </div>
                        <Link href="/" className={modalStyles.twitterButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                            <p>Share</p>
                        </Link>
                    </div>
                    <div className={modalStyles.modalFooter}>
                        <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}