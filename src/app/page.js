import List from "./List";
import ListItem from "./ListItem";

import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <List>
        <ListItem level={1}>React</ListItem>
        <List>
          <ListItem level={2}>JSX</ListItem>
          <ListItem level={2}>Hooks</ListItem>
          <List>
            <ListItem level={3}>useState</ListItem>
            <ListItem level={3}>useReducer</ListItem>
            <List>
              <ListItem level={4}>Usage</ListItem>
              <ListItem level={4}>Tips</ListItem>
            </List>
          </List>
        </List>
      </List>
    </main>
  );
}
