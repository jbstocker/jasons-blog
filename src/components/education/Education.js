import FlipCard from '../flip-card/FlipCard';
import './Education.css';
import psuImage from '../../media/psuLogo2.png'
import umdImage from '../../media/uMarylandLogo1.png'

function Education() {
  let psuText = "I earned my Bachelors or Science in Aerospace Engineering at the Pennsylvania State University. During this time I worked as a lab assistant in the Adverse Environment Rotor Test Stand (AERTS) where we performed icing and de-icing experiements on rotor blades."
  let umdText = "Later I made the plunge and went back to school to earn my Master of Engineering in Project Management from the University of Marlyand at College Park."
  return (
    <div className="education">
      <div className="text-container">
        <h1>Education</h1>
      </div>
      <div className="card-container">
      <FlipCard img={psuImage} header="Bachelor of Sciences in Aerospace Engineering" body={psuText}/>
      <FlipCard img={umdImage} header="Master of Engineering in Project Management" body={umdText}/>
      </div>
    </div>
  );
}

export default Education;
