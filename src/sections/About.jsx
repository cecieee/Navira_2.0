import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    const words = ["US", "NAVIRA"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animationStatus, setAnimationStatus] = useState('idle'); // 'idle', 'exiting', 'entering'


    useEffect(() => {
        AOS.init();
        const interval = setInterval(() => {
            setAnimationStatus('exiting');
            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setAnimationStatus('entering');
                setTimeout(() => {
                    setAnimationStatus('idle');
                }, 50);
            }, 500); // Wait for exit animation to finish
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentWord = words[currentWordIndex];

    return (
        <div className="relative w-full min-h-[60vh] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" data-aos="fade-up" data-aos-delay="200">
            <style>
                {`
                    ::-webkit-scrollbar {
                        display: none;
                    }
                    html {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}
            </style>
            
            {/* Title Section */}
            <div className="relative z-20 w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 flex justify-center md:justify-start items-center">
                <div className="flex flex-row items-center gap-2 sm:gap-4">
                    <h1 className='text-3xl md:px-8 sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-bold'>About</h1>
                    <div className="w-auto min-w-[150px] sm:min-w-[200px] md:min-w-[250px] text-left h-12 sm:h-16 md:h-20 flex items-center justify-start">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest inline-flex italic overflow-hidden text-primary">
                            {currentWord.split("").map((char, i) => (
                                <span 
                                    key={`${currentWord}-${i}`} 
                                    className={`inline-block transition-all duration-700 ease-in-out ${
                                        animationStatus === 'exiting' ? '-translate-y-full opacity-0' : 
                                        animationStatus === 'entering' ? 'translate-y-full opacity-0' : 
                                        'translate-y-0 opacity-100'
                                    }`}
                                    style={{ 
                                        transitionDelay: `${i * 50}ms`
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-[80vw] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
                
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1">
                    <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group" data-aos="fade-up" data-aos-duration="1000">
                        <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                        <img 
                            src="/assets/images/navira.jpeg" 
                            alt="Navira Event" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full lg:w-1/2 flex justify-center items-center order-2 px-2 sm:px-4 lg:px-0">
                    <p className='font-sans text-lg sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                        Navira: Journey Beyond Limits, an all-Kerala event by IEEE Women in Engineering Affinity 
                        Group College of Engineering Chengannur(WIE AG CEC), and IEEE Industry Applications 
                        Society Student Branch Chapter College of Engineering Chengannur (IAS SBC CEC),
                        emerges as a perfect platform to blend knowledge, creativity, and innovation. 
                        Navira is the combined successor to the flagship events Daksha and Emergence, 
                        conducted in previous years by IEEE WIE AG CEC and IEEE IAS SBC CEC. 
                        It promises to deliver an inexplicable experience through the fusion of 
                        unparalleled vision and elegance.
                    </p>
                </div>

            </div>
        </div>
    );
}
export default About;