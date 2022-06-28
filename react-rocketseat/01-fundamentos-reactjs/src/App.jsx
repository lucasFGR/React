import {Header} from './components/Header'
import {Post} from './Post'
import './style.css'

export function App() {
   return (
    <div>
      <Header/>
      <Post 
        author="Lucas Freitas" 
        content="orem ipsum dolor sit amet ac, adipisicing elit. Exercitationem possimus doloremque vitae non commodi placeat ipsa alias optio asperiores, at eaque minima nam recusandae, unde quis, odit quo consectetur quasi."
      />

      <Post
      
        author= "Outro usuário"
        content="Texto feito por outra pessoa"
      />
    </div>
   

  )
}





