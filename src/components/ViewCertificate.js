import React from 'react';
import { certifications } from '../data/datas';
import { useParams } from 'react-router-dom';

const ViewCertificate = () => {
    const {certid}=useParams()
    const certificateurl=certifications.find(c=>c.id===certid)?.pdf

    return (
          <div style={{ width: "100%", height: "100vh", overflow: "auto" }}>
           <iframe 
    src={certificateurl} 
    style={{ width: '100%', height: '100%' }} 
    
></iframe>
            
        </div>
    );
}

export default ViewCertificate;
