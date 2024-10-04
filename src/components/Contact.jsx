import { useRef, useEffect } from "react";
import { annotate } from "rough-notation";
import SectionTitle from "./SectionTitle";

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
        <section id="page-section">
            <SectionTitle title="get in touch" />
            <p>I'd love to collaborate on exciting projects or help bring your ideas to life through clean, 
                responsive design and efficient code. Whether you're looking for a website, or just 
                have questions, feel free to reach out!
            </p>
            <div className="doodle-container">
                <a href="mailto:sariahkjackson@gmail.com" style={{ marginTop: '2rem', color:'#FFFFFF', textDecoration: 'none'}}><span ref={linkRef}>Say hi!</span></a>
                <iframe src="https://giphy.com/embed/LsjOTIBgO2C4B7xWI9" style={{height:'3rem', width:'3rem'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
        </section>
    );
}
export default Contact;