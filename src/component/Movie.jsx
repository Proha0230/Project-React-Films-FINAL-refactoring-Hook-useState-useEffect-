function Movie (props) {
    const {Title, 
          Year, 
          ImdbID, 
          Type, 
          Poster} = props;
    
    return <div id={ImdbID} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      {
        Poster === "N/A" ?
      <img className="activator" src={`https://via.placeholder.com/300x420?text=${Title}`} alt={Title}/>
        :
      <img className="activator" src={Poster} alt={Title}/>
      }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}
      <i className="material-icons right">{Year}</i>
      </span>
      <p>{Type}</p>
    </div>
    </div>

}


export {Movie}