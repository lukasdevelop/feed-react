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
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    )
}