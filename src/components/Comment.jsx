import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/63449524?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Amaral</strong>
                            <time title='28 de Novembro as 18:21' dateTime='2023-11-28 18:21:11'>About 1 hour ago</time>
                        </div>
                        <button title="Delete comment">
                            <Trash size={24}  />
                        </button>
                    </header>
                    <p>Very good! Gratz!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Liked <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}