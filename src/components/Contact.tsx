import ShineBorder from "@/components/ui/shine-border";
export default function Contact() {
  return (
    <div>
        <h2 className='text-white font-plus font-bold text-3xl mb-3 lg:mb-[2rem] lg:text-4xl'>get in touch</h2>
        <p>I'd love to collaborate on exciting projects or help bring your ideas to life through clean, 
            responsive, and efficient code. Whether you're looking for a website, or just 
            have questions, feel free to reach out!
        </p>

      <a href="mailto:sariahkjackson@gmail.com">
        <ShineBorder className="font-plus mt-5 font-bold -z-1 relative bg-black text-white" color='coral'>
            Say hi
        </ShineBorder>
      </a>
     

      
    </div>
  )
}
