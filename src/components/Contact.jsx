import { useRef, useEffect } from "react";
import { annotate } from "rough-notation";
import SectionTitle from "./SectionTitle";
import { Fade } from "react-awesome-reveal";


function Contact() {
    const linkRef = useRef(null);

    useEffect(()=>{
        const linkAnnotation = annotate(linkRef.current, {type: 'box', color: '#FF7A6B', strokeWidth:1})
        
        const playIndefinitely = () => {
            linkAnnotation.show();
            setTimeout(() => {
              linkAnnotation.hide();
            }, 2000); // Time after which the annotation hides
        };
      
        const intervalId = setInterval(playIndefinitely, 3000);
      
        return () => clearInterval(intervalId);
    }, []); 

    return(
        <section className="page-section">
            <div id="contact">
            <Fade>
                <SectionTitle title="get in touch" />
                <p className='text-xl mb-10 lg:text-[1rem]'>I'd love to collaborate on exciting projects or help bring your ideas to life through clean, 
                    responsive, and efficient code. Whether you're looking for a website, or just 
                    have questions, feel free to reach out!
                </p>
                <div className="flex gap-5">
                    <a href="mailto:sariahkjackson@gmail.com" className='text-white font-inter mt-5 text-xl font-bold p-2'><span ref={linkRef}>Say hi!</span></a>
                    <iframe src="https://giphy.com/embed/LsjOTIBgO2C4B7xWI9" style={{height:'3rem', width:'3rem'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div>
            </Fade>

            </div>
           
            
            
        </section>
    );
}
export default Contact;