import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/63449524?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Amaral</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>
                <time title='28 de Novembro as 18:21' dateTime='2023-11-28 18:21:11'>Published 1 hour ago</time>
            </header>
            <div className={styles.content}>
                <p>Hey guys 👋</p>

                <p>This is a comment on an example of a form I'm making for a portfolio of basic React functions 🚀</p>

                <p><a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Your feedback</strong>

                <textarea 
                    placeholder='Make a comment'
                />
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}