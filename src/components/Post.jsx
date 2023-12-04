import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Wow! Keep this way!'
    ])

    const [newCommentText, setNewCommentText] = useState('')
  
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChanged(event){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={ publishedDateFormatted } dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}    
                </time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        }else if( line.type === 'link'){
                            return <p key={line.content}><a href='#'>{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Your feedback</strong>
                <textarea
                    name="comment" 
                    onChange={handleNewCommentChanged}
                    placeholder='Make a comment'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publish
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment} 
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}