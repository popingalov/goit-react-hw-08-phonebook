import Container from '../Components/Container/Container';
import './homePage.css';
export default function HomeView() {
  return (
    <Container>
      <main className="main">
        <h1>Phonebook</h1>
        <p>Здесь может быть ваша реклама! Ну а пока здесь будет HTML ёлочка)</p>
        <div className="tree">
          <div className="tree-layer"></div>
          <div className="tree-layer"></div>
          <div className="tree-layer"></div>
          <div className="tree-log"></div>
        </div>
      </main>
    </Container>
  );
}
