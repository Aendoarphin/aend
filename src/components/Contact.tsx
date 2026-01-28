import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto flex flex-col items-center max-w-4xl text-center">
        <h6 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
          Contact
        </h6>
        
        <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl px-4">
          I am currently open for collaboration/opportunities; just shoot me a message!
        </p>
        
        <div className="inline-flex gap-6 sm:gap-8 lg:gap-12">
          <a 
            target="_blank" 
            href="https://www.linkedin.com/in/aendoarphin"
            className="opacity-25 hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <IconBrandLinkedin 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1" 
            />
          </a>
          
          <a 
            target="_blank" 
            href="https://github.com/Aendoarphin"
            className="opacity-25 hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <IconBrandGithub 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1" 
            />
          </a>
          
          <a 
            target="_blank" 
            href="mailto:arhon.k.pineda@gmail.com"
            className="opacity-25 hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <IconMail 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 stroke-1" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
