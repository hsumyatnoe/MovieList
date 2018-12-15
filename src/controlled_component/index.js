import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class mvlist extends Component {  

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Search: []
        };
      }


      componentDidMount() {
        fetch("http://www.omdbapi.com?s=spider man&apikey=b275eadc")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                movie: result.Search
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }


        render() {
            const { error, isLoaded, movie } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                // <ul>
                //   {movie.map(list => (
                //     <li key={list.Title}>
                //       {list.Type} {list.Year}
                //     </li>
                //   ))}
                // </ul>
                <div class="container">
  <div class="row">
  
  {movie.map(list => (
      <React.Fragment>

          <Router>

             <div class="col-sm" key={list.imdbID}>
             {/* <Link to="/about">About</Link> */}

            {/* <Link to={`/about/${ list.imdbID }`}>Detail</Link> */}
             {/* <PageStart key={list.imdbID} /> */}

             <img src={list.Poster} alt="..." class="img-thumbnail"/>
                {/* <br/> */}
                <div class="caption center-block">Title: {list.Title}</div>
                <div class="caption center-block">Year: {list.Year}</div>
                <div class="caption center-block">Type: {list.Type}</div>
                {/* <div class="caption center-block">imdbID: {list.imdbID}</div> */}
                <Route path="/about" component={About} />
                {/* <Route path="/tt2250912" component={Record} /> */}


          </div>
          </Router>
          </React.Fragment>
                  ))}
  </div>
</div> 
              );
            }
          }

  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
export default mvlist;
