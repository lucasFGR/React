import styles from './Sidebar.module.css'

import { PencilLine} from 'phosphor-react'

export function Siderbar(){
    return(
        <aside className={styles.sidebar}>
            <img className ={styles.profileimg} src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/54214156?v=4" alt="" />
                <strong>Lucas Ribeiro</strong>
                <span>React Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine  size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}