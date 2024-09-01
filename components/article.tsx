import Link from "next/link"
import styles from "./article.module.css"
import Image from 'next/image'

type AricleParam = {
    id: string
    title: string
    caption: string
    type: string
    link?: string
}

export const Article = ({ title, caption, type, id, link = "" }: AricleParam) => {

    let types = {
        type: styles.type1,
        subType: styles.subType1
    }

    switch (type) {
        case "GreenViper":
            break;
        case "DimGray":
            types = {
                type: styles.type2,
                subType: styles.subType2
            }
            break;
        case "DodgerBlue":
            types = {
                type: styles.type3,
                subType: styles.subType3
            }
            break;
        case "MediumVioletRed":
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
                <Link href={link} className={styles.button}>
                    <Image
                        style={{ marginRight: 2 }}
                        src="/link.svg"
                        width={16}
                        height={16}
                        alt="Picture of the author"
                    />
                    source
                </Link>
                <button style={{ fontWeight: 'bold' }} className={styles.button}>
                    <Image
                        style={{ marginRight: 2 }}
                        src="/flame.svg"
                        width={16}
                        height={16}
                        alt="Picture of the author"
                    />
                    โคตรเหลือเชื่อ!
                </button>
            </div>
        </div >
    )
}