import './Education.css';

function Education() {
  return (
    <div className="education">
      <div className="text-container">
        <h1>Education</h1>
        <p>
          I earned my Bachelors or Science in Aerospace Engineering at the
          Pennsylvania State University. During this time I worked as a lab
          assistant in the Adverse Environment Rotor Test Stand (AERTS) where we
          performed icing and de-icing experiements on rotor blades.
          <br />
          <br />
          Later I made the plunge and went back to school to earn my Master of
          Engineering in Project Management from the University of Marlyand at College Park.
        </p>
      </div>
      <div className="images-container">
        <div className="u-image psu-image"></div>
        {/* <div className="u-image umd-image"></div> */}
      </div>
    </div>
  );
}

export default Education;
