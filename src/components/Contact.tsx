import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto flex-col flex items-center">
        <h6>Contact</h6>
        <p>I am currently open for collaboration/opportunities; just shoot me a message!</p>
        <div className="inline-flex **:size-10 *:mx-4 **:stroke-1 *:contrast-25 **:hover:contrast-100 *:transition-all">
          <a target="_blank" href="https://www.linkedin.com/in/aendoarphin">
            <IconBrandLinkedin />
          </a>
          <a target="_blank" href="https://github.com/Aendoarphin">
            <IconBrandGithub />
          </a>
          <a target="_blank" href="mailto:arhon.k.pineda@gmail.com">
            <IconMail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
