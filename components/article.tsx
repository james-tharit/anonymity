import styles from "./article.module.css"

type AricleParam = {
    title: string
    caption: string
    type: number
}

export const Article = ({ title, caption, type }: AricleParam) => {

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
        <div className={types.type}>
            <h1>{title}</h1>
            <div className={types.subType}>
                <p>{caption}</p>
            </div>
        </div>
    )
}