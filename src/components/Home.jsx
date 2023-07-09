import React from 'react';
import { withNavigation } from './withNavigation';
import PropTypes from 'prop-types';
import { ShareContext } from '../context/ShareProvider';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
    };
    this.sendToSecond = this.sendToSecond.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('state watcher', prevState);
    console.log('props watcher', prevProps);
  }

  sendToSecond(e) {
    e.preventDefault();
    // this.context.setShare(this.state.search);
    // this.props.navigate('/second');
  }

  addBook(e) {
    e.preventDefault();
    const newBook = {
      id: 1000 + Math.ceil(Math.random() * 1000),
      name: this.state.search,
    };
    this.setState((prev) => ({
      ...prev,
      search: '',
      books: [...prev.books, newBook],
    }));
  }
  deleteBook(id) {
    const booksFiltered = this.state.books.filter((book) => book.id !== id);
    this.setState((prev) => ({
      ...prev,
      books: booksFiltered,
    }));
  }
  udpateBook(id) {
    const booksUpdated = this.state.books.map((book) => {
      if (book.id == id) return { ...book, name: 'Ha cambiado' };
      return book;
    });
    this.setState({
      books: booksUpdated,
    });
  }
  submitCoolForm(e) {
    e.preventDefault();
    console.log('go form go');
    const { username, address, email } = Object.fromEntries(
      new FormData(e.target)
    );
    console.log('🚀 ~ file: Home.jsx:60 ~ Home ~ submitCoolForm ~ data:', {
      address,
      email,
      username,
    });
  }

  render() {
    const { books, search } = this.state;
    return (
      <section>
        <h1>A class cool component to share data to a second component</h1>
        <form onSubmit={this.addBook}>
          <input
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button type="submit">Add book</button>
        </form>
        <section>
          <p>Tu lista de libros {books.length}</p>
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id}>
                <label>{book.name}</label>
                <button onClick={() => this.deleteBook(book.id)}>Delete</button>
                <button onClick={() => this.udpateBook(book.id)}>Update</button>
              </div>
            ))
          ) : (
            <p>Aún no has agregado libros</p>
          )}
        </section>
        <form onSubmit={this.submitCoolForm}>
          <input name="username" />
          <input name="address" />
          <input name="email" />
          <button type="submit">SEND</button>
        </form>
      </section>
    );
  }
}
Home.contextType = ShareContext;
Home.propTypes = {
  navigate: PropTypes.func,
};

export default withNavigation(Home);
