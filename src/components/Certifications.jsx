import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/datas';

const Certifications = () => {
    return (
        <div className="animate-slide-up">
            {/* Header Section */}
            <div className="mb-4 flex items-center">
                <Award className="mr-3 text-[#00D9FF]" size={40} />
                <h2 className="bg-[linear-gradient(135deg,#00D9FF_0%,#8A2BE2_100%)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                    Certifications
                </h2>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {certifications.map((cert, index) => (
                    <div key={index}>
                        <div className="group flex h-full flex-col justify-between rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)]">
                            <div className="flex items-start">
                                <Award className="mr-3 shrink-0 text-[#00D9FF]" size={28} />
                                <div>
                                    <h6 className="mb-1 font-semibold text-white">{cert.name}</h6>
                                    <p className="mb-1 text-sm text-[#B8C5D6]">{cert.issuer}</p>
                                    <span className="inline-block rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/10 px-3 py-0.5 text-xs font-semibold text-[#00D9FF]">
                                        {cert.year}
                                    </span>
                                </div>
                            </div>

                            {/* Action Button (Replacing btn-outline-danger) */}
                            <div className="mt-4">
                                <a 
                                    href={cert.pdf} 
                                    className="inline-flex items-center gap-2 rounded-lg border border-red-500/50 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-500 hover:text-white" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;