import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/1681405?v=4',
      name: 'Chloe Baitard',
      role: 'Manager @SportsConnect'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋'},
      { type: 'paragraph', content: 'This is a comment on an example of a form Im making for a portfolio of basic React functions 🚀'},
      { type: 'link', content: 'lucas.design/sportsconnect'}
    ],
    publishedAt: new Date('2023-11-29 18:46:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/63449524?v=',
      name: 'Lucas Amaral',
      role: 'CTO @SportsConnect'
    },
    content: [
      { type: 'paragraph', content: 'Hey guy 👋'},
      { type: 'paragraph', content: 'This is a comment on an example of a form Im making for a portfoli of basic React functions 🚀'},
      { type: 'link', content: 'lucas.design/sportsconnec'}
    ],
    publishedAt: new Date('2023-11-05 18:46:00')
  },
]

import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
