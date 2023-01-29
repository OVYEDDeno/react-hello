import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const myArray = ["https://picsum.photos/id/400/200/300","https://picsum.photos/id/238/200/300","https://picsum.photos/id/239/200/300","https://picsum.photos/id/240/200/300"]
	return (
		<div>
		<Navbar></Navbar>
		<Jumbotron></Jumbotron>
		<div className="container d-flex gap-3">
			{myArray.map(url=><Card link={url}title={"My Works"}/>)}	</div>
			<Footer></Footer>
		</div>
	);
};
const Navbar = ()=>{
	return(
<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
const Jumbotron =()=>{
	return(
<div className="container p-5 mb-4 bg-light rounded-3">
      <div className="container">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
	);
};
const Card =(props)=>{
	return(
<div className="card" style={{width: "18rem"}}>
  <img src={props.link} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go Everywhere</a>
  </div>
</div>
	);
};
const Footer =()=>{
	return(
<div className="card mt-5">
  <div className="card-header">
    Quote
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
	);
};
export default Home;
