import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content,onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeCount (){
      setLikeCount((state)=> {
        return state + 1
      })
    }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasFGR.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Freitas</strong>
              <time title="29 de Junho as 22:30" dateTime="2022-06-29 22:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
