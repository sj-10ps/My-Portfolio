import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { experience } from '../data/datas';
import { ExternalLink, ArrowLeft, Download, Briefcase } from 'lucide-react';

const Viewexpcertificate = () => {
    const { id } = useParams();
    const exp = experience.find(c => c.id === id);

    if (!exp) return <div className="text-white text-center mt-20">Experience details not found</div>;

    return (
        <div className="bg-[#0a1628] min-h-screen relative overflow-hidden flex flex-col">
            {/* Background Radial Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,217,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.1)_0%,transparent_50%)]" />
            </div>

            {/* Navigation Bar */}
            <nav className="relative z-10 flex items-center justify-between p-4 border-b border-white/10 bg-black/30 backdrop-blur-md">
                <Link 
                    to="/" 
                    className="flex items-center gap-2 text-[#B8C5D6] hover:text-[#00D9FF] transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span className="hidden sm:inline font-medium">Back to Experience</span>
                </Link>
                
                <div className="flex items-center gap-3">
                    <Briefcase className="text-[#00D9FF] hidden xs:block" size={20} />
                    <h1 className="text-white font-semibold truncate max-w-[150px] sm:max-w-md">
                        {exp.role} @ {exp.company}
                    </h1>
                </div>

                <div className="flex gap-4">
                    <a 
                        href={exp.certificate} 
                        download
                        className="text-[#B8C5D6] hover:text-[#00D9FF] transition-colors"
                        title="Download Certificate"
                    >
                        <Download size={20} />
                    </a>
                    <a 
                        href={exp.certificate} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#B8C5D6] hover:text-[#00D9FF] transition-colors"
                        title="View Fullscreen"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
            </nav>

            {/* Document Viewer Area */}
            <div className="relative z-10 flex-grow p-4 md:p-6 lg:p-8 flex justify-center items-center">
                <div className="w-full h-full max-w-6xl rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-[12px] overflow-hidden shadow-2xl animate-slide-up flex flex-col">
                    <iframe
                        src={`${exp.certificate}#toolbar=0&navpanes=0`}
                        title='experience certificate'
                        className="w-full h-full border-none"
                        style={{ minHeight: "82vh" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Viewexpcertificate;