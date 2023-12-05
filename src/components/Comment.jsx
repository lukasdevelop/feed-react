import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount ] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })

    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/63449524?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Amaral</strong>
                            <time title='28 de Novembro as 18:21' dateTime='2023-11-28 18:21:11'>About 1 hour ago</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24}  />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Liked <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}