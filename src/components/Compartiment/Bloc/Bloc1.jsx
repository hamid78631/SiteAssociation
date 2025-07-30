import '../../../styles/Illustration.css';
import prof1 from '../../../assets/blocPhoto/prof1.jpeg'
import prof2 from '../../../assets/blocPhoto/prof2.jpeg'
import prof3 from '../../../assets/blocPhoto/prof3.jpeg'

function Bloc1() {
    return (
        <div className="bloc-container">
            
            <Illustration />
        </div>
    );
}

function Illustration() {
    return (
        <div className="bloc-profil">
            
            <img src={prof1} alt='Professeur 1' className="profile-img" />
            <img src={prof2} alt='Professeur 2' className="profile-img" />
            <img src={prof3} alt='Professeur 3' className="profile-img" />
        </div>
    );
}

export default Bloc1;