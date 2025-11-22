import { useState, useRef } from 'react';

const workshopsData = [
    {
        id: "01",
        workshopName: "Sensor Integration and IOT development",
        speakerName: "Dr. Raghu C. V",
        speakerRole: "Asst. Professor",
        speakerExpertise: "Dept. of Electronics and Communication, NIT Calicut",
        speakerImage: "/assets/images/navira.jpeg",
        shortDesc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. Sensor integration and IoT development has the potential to transform industries by connecting physical devices to the digital world. Sensors gather real-time data and IoT platforms enable this data to be transmitted, analyzed, and processed using the internet.",
        fullDesc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. Sensor integration and IoT development has the potential to transform industries by connecting physical devices to the digital world. Sensors gather real-time data and IoT platforms enable this data to be transmitted, analyzed, and processed using the internet. This integration paves opportunity for automation, improved efficiency and decision-making across various applications including industrial automation, healthcare, and agriculture. The workshop on Sensor Integration and IoT Development by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development. The session will be handled by Dr. Raghu C. V, Asst. Professor, Dept. of Electronics and Communication, NIT Calicut."
    },
    {
        id: "02",
        workshopName: "Sensor Integration and IOT development",
        speakerName: "Dr. Raghu C. V",
        speakerRole: "Asst. Professor",
        speakerExpertise: "Dept. of Electronics and Communication, NIT Calicut",
        speakerImage: "/assets/images/navira.jpeg",
        shortDesc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. The workshop on Sensor Integration and IoT by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development.",
        fullDesc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. Sensor integration and IoT development has the potential to transform industries by connecting physical devices to the digital world. Sensors gather real-time data and IoT platforms enable this data to be transmitted, analyzed, and processed using the internet. This integration paves opportunity for automation, improved efficiency and decision-making across various applications including industrial automation, healthcare, and agriculture. The workshop on Sensor Integration and IoT Development by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development. The session will be handled by Dr. Raghu C. V, Asst. Professor, Dept. of Electronics and Communication, NIT Calicut."
    },
    {
        id: "03",
        workshopName: "Sensor Integration and IOT development",
        speakerName: "Dr. Raghu C. V",
        speakerRole: "Asst. Professor",
        speakerExpertise: "Dept. of Electronics and Communication, NIT Calicut",
        speakerImage: "/assets/images/navira.jpeg",
        shortDesc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. Sensor integration and IoT development has the potential to transform industries by connecting physical devices to the digital world. Sensors gather real-time data and IoT platforms enable this data to be transmitted, analyzed, and processed using the internet.",
        fullDesc: "The efficacy in transmitting and receiving real-time data is crucial in applications where timely and accurate information is essential. Sensor integration and IoT development has the potential to transform industries by connecting physical devices to the digital world. Sensors gather real-time data and IoT platforms enable this data to be transmitted, analyzed, and processed using the internet. This integration paves opportunity for automation, improved efficiency and decision-making across various applications including industrial automation, healthcare, and agriculture. The workshop on Sensor Integration and IoT Development by Navira offers an opportunity to enhance skills in sensor integration and IoT solution development. The session will be handled by Dr. Raghu C. V, Asst. Professor, Dept. of Electronics and Communication, NIT Calicut."
    }
];

function Workshops() {
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);
    const cardsRef = useRef([]);

    const handleMouseMove = (e) => {
        cardsRef.current.forEach((card) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    };

    return(
        <>
        <style>
            {`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}
        </style>
        <div className="w-[90vw] max-w-7xl m-auto text-white py-20">
            <h1 className='text-5xl text-center md:text-left md:text-7xl text-white mb-20'>Workshops</h1>
            <div className="flex flex-col md:flex-row w-full gap-8 justify-center" onMouseMove={handleMouseMove}>
                {workshopsData.map((workshop, index) => (
                    <div 
                        key={workshop.id}
                        ref={el => cardsRef.current[index] = el}
                        className="group relative w-[70%] md:w-1/3 h-[75vw] md:h-[30vw] m-auto md:m-0 rounded-xl md:rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:border-white/40 active:shadow-[0_0_50px_rgba(255,255,255,0.15)] active:border-white/40"
                        onClick={() => setSelectedWorkshop(workshop)}
                    >
                        {/* Spotlight Effect */}
                        <div 
                            className="pointer-events-none absolute -inset-px transition duration-300"
                            style={{
                                background: `radial-gradient(900px circle at var(--mouse-x) var(--mouse-y), rgba(0,265,255,0.35), transparent 40%)`
                            }}
                        />

                        {/* Animated Border */}
                        <div 
                            className="absolute inset-0 z-10 pointer-events-none rounded-xl md:rounded-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"
                            style={{
                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                maskComposite: 'exclude',
                                WebkitMaskComposite: 'xor',
                                padding: '5px'
                            }}
                        >
                            <div className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#FFFFFF_360deg)] animate-[spin_4s_linear_infinite]" />
                        </div>

                        {/* Background Gradient Effect */}
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-black/20  opacity-60 group-hover:opacity-90 group-active:opacity-90 transition-opacity duration-500" />

                        {/* Rotating Read More Button */}
                        <div className="absolute -top-16 -right-16 md:-top-24 md:-right-24 w-40 h-40 md:w-60 md:h-60 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-900 z-20 pointer-events-none">
                            <div className="w-full h-full animate-spin" style={{ animationDuration: '10s' }}>
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path id={`curve-${workshop.id}`} d="M 50, 50 m -48, 0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0" fill="transparent" />
                                    <text>
                                        <textPath href={`#curve-${workshop.id}`} fill="white" className="text-[10px] font-bold uppercase tracking-widest">
                                            Read More Details • Read More Details •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                        
                        {/* Large Centered Number (Animated) */}
                        <div className="absolute inset-0 flex flex-col p-4 md:p-8 pointer-events-none">
                            <div className="flex-1 transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:flex-none group-hover:h-0 group-active:flex-none group-active:h-0" />
                            
                            <div className="relative w-fit transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] left-1/2 -translate-x-1/2 group-hover:left-0 group-hover:translate-x-0 group-active:left-0 group-active:translate-x-0">

                                <h1 className="font-thin transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] text-6xl md:text-9xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,1)] md:[-webkit-text-stroke:2px_rgba(255,255,255,1)] select-none group-hover:text-5xl md:group-hover:text-7xl group-hover:text-white group-active:text-4xl md:group-active:text-7xl group-active:text-white">
                                    {workshop.id}
                                </h1>
                                <p className='text-base md:text-2xl font-sans font-bold absolute top-full left-1/2 -translate-x-1/2 w-48 md:w-60 text-center mt-2 md:mt-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4 group-active:opacity-0 group-active:translate-y-4 px-4'>
                                    {workshop.workshopName}
                                </p>
                            </div>

                            <div className="flex-1 transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:flex-none group-hover:h-32 md:group-hover:h-44 group-active:flex-none group-active:h-8 md:group-active:h-44" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-8 pb-6 md:pb-8 translate-y-0 md:translate-y-[40%] group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none">
                            {/* Description */}
                            <p className="font-sans text-sm md:text-2xl font-bold text-gray-200 leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-5 opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-500 delay-200">
                                {workshop.workshopName}
                            </p>
                            <p className="font-sans text-[10px] md:text-lg text-gray-200 leading-[1.3] md:leading-relaxed line-clamp-5 md:line-clamp-5 opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-500 delay-200">
                                {workshop.shortDesc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal */}
        {selectedWorkshop && (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 transition-all duration-300"
                onClick={() => setSelectedWorkshop(null)}
            >
                <div 
                    className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl w-[80vw] h-[70vh] md:w-full md:max-w-6xl md:h-auto md:max-h-[90vh] text-white relative shadow-2xl overflow-y-auto animate-[fadeIn_0.3s_ease-out] no-scrollbar"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        className="absolute top-2 md:top-8 right-2 md:right-8 text-white/50 hover:text-white transition-colors duration-300 z-20 w-8 h-8 flex items-center justify-center"
                        onClick={() => setSelectedWorkshop(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <div className="flex flex-col md:flex-row">
                        {/* Left Part (2/5) */}
                        <div className="w-full md:w-2/5 bg-white/5 p-3 md:p-8 flex flex-col gap-3 md:gap-6 md:border-r border-white/10">
                            {/* Top: Image */}
                            <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-gray-800 mx-auto md:mx-0">
                                 <img src={selectedWorkshop.speakerImage} alt={selectedWorkshop.speakerName} className="w-full h-full object-cover" />
                            </div>
                            {/* Bottom: Info */}
                            <div className="flex flex-col gap-1 md:gap-2 text-center md:text-left">
                                <h3 className="text-lg md:text-3xl font-bold">{selectedWorkshop.speakerName}</h3>
                                <p className="text-primary text-sm md:text-xl">{selectedWorkshop.speakerRole}</p>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{selectedWorkshop.speakerExpertise}</p>
                            </div>
                        </div>

                        {/* Right Part (3/5) */}
                        <div className="w-full md:w-3/5 p-3 md:p-12 flex flex-col gap-3 md:gap-8">
                             {/* Top: Workshop Name */}
                             <div>
                                <h1 className="text-xl md:text-5xl p-2 font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-white/50 mb-2 md:mb-4 leading-tight">
                                    {selectedWorkshop.workshopName}
                                </h1>
                                <span className="text-white/30 font-mono text-[10px] md:text-sm border border-white/20 px-6 md:px-3 py-0.5 md:py-1 rounded-full">TRACK: {selectedWorkshop.id}</span>
                             </div>

                             {/* Bottom: Full Desc */}
                             <div className="prose prose-invert prose-sm md:prose-lg max-w-none">
                                <p className="font-sans text-xs md:text-lg p-4 text-gray-300 leading-normal md:leading-loose">
                                    {selectedWorkshop.fullDesc}
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
export default Workshops;