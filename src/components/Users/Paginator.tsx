import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames"

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={cn({[styles.selectedPage]: props.currentPage === p}, styles.pageNumber)}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p} </span>
            })}

        {portionNumber < portionCount && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
}