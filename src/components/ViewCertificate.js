import React from 'react';
import { certifications } from '../data/datas';
import { useParams } from 'react-router-dom';

const ViewCertificate = () => {
    const {certid}=useParams()
    const certificateurl=certifications.find(c=>c.id===certid).pdf

    return (
          <div style={{ width: "100%", height: "100vh", overflow: "auto" }}>
           <a 
    src={certificateurl} 
    style={{ width: '100%', height: '100%' }} 
    target="_blank"
    
></a>
            
        </div>
    );
}

export default ViewCertificate;
