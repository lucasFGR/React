import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Siderbar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

// author: {avar_url "", name "", role""}
// publishedAt : Date
// contente: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasFGR.png",
      name: "Lucas Freitas",
      role: "Dev React",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋</p>" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-12 07:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/fabiooliveira1.png",
      name: "Fabio Oliveira",
      role: "O cara",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋</p>" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-10 07:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
