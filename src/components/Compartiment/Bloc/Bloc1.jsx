import '../../../styles/Illustration.css';



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
            
            <img src='src/assets/blocPhoto/prof1.jpeg' alt='Professeur 1' className="profile-img" />
            <img src='src/assets/blocPhoto/prof2.jpeg' alt='Professeur 2' className="profile-img" />
            <img src='src/assets/blocPhoto/prof3.jpeg' alt='Professeur 3' className="profile-img" />
        </div>
    );
}

export default Bloc1;