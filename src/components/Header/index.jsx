import styles from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAddTask(title);
          setTitle("");
        }}
        className={styles.newTaskForm}
      >
        <input
          onChange={(value) => setTitle(value.target.value)}
          type="text"
          placeholder="Add new task"
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
