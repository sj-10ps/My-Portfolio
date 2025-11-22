
import { useParams } from 'react-router-dom';
import { certifications, experience } from '../data/datas';


const Viewexpcertificate = () => {
    const {id}=useParams()
    const Certificateurl=experience.find(c=>c.id===id).certificate
   
    return (
          <div style={{ width: "100%", height: "100vh", overflow: "auto" }}>
           <iframe 
    src={Certificateurl} 
    style={{ width: '100%', height: '100%' }} 
    
></iframe>
            
        </div>
    );
}

export default Viewexpcertificate;
