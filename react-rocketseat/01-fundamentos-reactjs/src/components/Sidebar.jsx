import styles from './Sidebar.module.css'
export function Siderbar(){
    return(
        <aside className={styles.sidebar}>
            <img className ={styles.profileimg} src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />

            <div className={styles.profile}>
                <strong>Lucas Ribeiro</strong>
                <span>React Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}