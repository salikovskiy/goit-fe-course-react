import React, { Component } from "react";
import services from "./services/services";
import Phonebook from "./Phonebook/Phonebook";
import Gallery from "./Gallery/Gallery";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    images: [],
    searchValue: "",
    page: 1,
    loading: true
  };

  componentDidMount() {
    // localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...JSON.parse(localStorage.getItem("contacts"))
        ]
      };
    });
    services.getData().then(data => {
      this.setState({ images: data.data.hits, loading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      console.log(prevState.contacts.length, this.state.contacts.length);
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ loading: true });
      services.getData(this.state.searchValue).then(data => {
        this.setState({ images: data.data.hits, loading: false });
      });
    }
    if (this.state.page > 1 && prevState.page !== this.state.page) {
      services.getData(this.state.searchValue, this.state.page).then(data => {
        this.setState(prev => {
          return { images: [...prev.images, ...data.data.hits] };
        });
      });
    }
  }

  deleteContact = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== id)
      };
    });
  };

  getContact = contact => {
    console.log(...this.state.contacts);
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact]
      };
    });
    console.log(this.state);
  };

  dataSeacrh = e => {
    const value = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        filter: value
      };
    });
  };

  getSearchValue = searchItem => {
    this.setState(() => {
      return {
        searchValue: searchItem
      };
    });
  };

  pageCalc = () => {
    this.setState(prev => {
      return {
        page: prev.page + 1
      };
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <>
        <Gallery
          data={this.state.images}
          getSearchValue={this.getSearchValue}
          pageCalc={this.pageCalc}
          loading={this.state.loading}
        />
        <Phonebook
          getContact={this.getContact}
          data={this.state.contacts}
          filter={this.state.filter}
          search={this.dataSeacrh}
          delete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
