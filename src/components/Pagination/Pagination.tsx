import { FC, ReactElement, useEffect, useState } from "react";
import styles from "./Pagination.module.scss";

interface Props {
  page: number,
  totalPages: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination:FC <Props> = ({page, totalPages, setPage, setTotalPages}): ReactElement => {
  const firstPage = () => {
    setPage(1)
  }

  const previousPage = () => {
    if(page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const nextPage = () => {
    setPage(prev => prev + 1)
  }

  const lastPage = () => {
    setPage(totalPages)
  }

  return <div className={styles.container}>
    <button onClick={firstPage}>&lt;&lt;</button>
    <button onClick={previousPage}>&lt;</button>

    <div className={styles.pageNumber}>
      {page} / {totalPages}
    </div>

    <button onClick={nextPage}>&gt;</button>
    <button onClick={lastPage}>&gt;&gt;</button>
  </div>
};

