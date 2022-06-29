import {Header} from './components/Header'
import {Post} from './Post'

import styles from './App.module.css'
import './global.css'
import { Siderbar } from './components/Sidebar'

export function App() {
   return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
        <Post 
        author="Lucas Freitas" 
        content="orem ipsum dolor sit amet ac, adipisicing elit. Exercitationem possimus doloremque vitae non commodi placeat ipsa alias optio asperiores, at eaque minima nam recusandae, unde quis, odit quo consectetur quasi."
      />

      <Post
      
        author= "Outro usuário"
        content="Texto feito por outra pessoa"
      />
        </main>
      </div>
    </div>
   

  )
}





