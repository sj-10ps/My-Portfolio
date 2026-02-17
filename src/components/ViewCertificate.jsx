import React from 'react';
import { certifications } from '../data/datas';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft, Download } from 'lucide-react';

const ViewCertificate = () => {
    const { certid } = useParams();
    const cert = certifications.find(c => c.id === certid);

    if (!cert) return <div className="text-white text-center mt-20">Certificate not found</div>;

    return (
        <div className="bg-[#0a1628] min-h-screen relative overflow-hidden flex flex-col">
            {/* Background Radial Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,217,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.1)_0%,transparent_50%)]" />
            </div>

            {/* Navigation Bar */}
            <nav className="relative z-10 flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-md">
                <Link 
                    to="/" 
                    className="flex items-center gap-2 text-[#B8C5D6] hover:text-[#00D9FF] transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span className="hidden sm:inline">Back to Portfolio</span>
                </Link>
                
                <h1 className="text-white font-medium truncate max-w-[200px] sm:max-w-md">
                    {cert.name}
                </h1>

                <div className="flex gap-4">
                    <a 
                        href={cert.pdf} 
                        download
                        className="text-[#B8C5D6] hover:text-[#00D9FF] transition-colors"
                        title="Download"
                    >
                        <Download size={20} />
                    </a>
                    <a 
                        href={cert.pdf} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#B8C5D6] hover:text-[#00D9FF] transition-colors"
                        title="Open in New Tab"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
            </nav>

            {/* Certificate Viewer Area */}
            <div className="relative z-10 flex-grow p-4 md:p-8 flex justify-center items-center">
                <div className="w-full h-full max-w-6xl rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-[10px] overflow-hidden shadow-2xl animate-slide-up">
                    <iframe
                        src={`${cert.pdf}#toolbar=0`}
                        title={cert.name}
                        className="w-full h-full border-none"
                        style={{ minHeight: "80vh" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ViewCertificate;