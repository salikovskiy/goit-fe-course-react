import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

class Gallery extends Component {
  state = {
    search: "",
    show: false
  };

  componentDidMount() {
    window.addEventListener("keyup", this.hideModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.hideModal);
  }

  showModal = url => {
    this.setState({ show: true, url });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.getSearchValue(this.state.search);
    this.setState({
      search: ""
    });
  };

  onHandleGetValue = e => {
    const info = e.target.value;
    this.setState(() => {
      return { search: info };
    });
  };

  render() {
    console.log(this.props.loading);
    return (
      <>
        <SearchBar
          onHandleSubmit={this.onHandleSubmit}
          onHandleGetValue={this.onHandleGetValue}
        />
        {this.props.loading ? (
          <Loader />
        ) : (
          <ImageGallery data={this.props.data} handleOpen={this.showModal} />
        )}
        {this.props.data.length > 0 ? (
          <Button pageCalc={this.props.pageCalc} />
        ) : (
          ""
        )}
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          url={this.state.url}
        />
      </>
    );
  }
}

export default Gallery;
