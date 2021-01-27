import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,

  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

//import SubShareCSS from "./CSS";

export function Share () {
    return (
    <div className='compartir'>
        <div>
        <p className='subtitulo'>¿Te gustó este artículo? Compártelo!</p>
        </div>
        <div>
        <EmailShareButton 
             url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
             quote={"HablaFacil - Mantente informado"}
             hashtag="#HablaFacil">
              <EmailIcon size={57} />
        </EmailShareButton>
       <FacebookShareButton 
             url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
             quote={"HablaFacil - Mantente informado"}
             hashtag="#HablaFacil">
              <FacebookIcon size={57} />
        </FacebookShareButton>
        <TwitterShareButton 
             url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
             quote={"HablaFacil - Mantente informado"}
             hashtag="#HablaFacil">
              <TwitterIcon size={57} />
        </TwitterShareButton>
        <LinkedinShareButton 
             url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
             quote={"HablaFacil - Mantente informado"}
             hashtag="#HablaFacil">
              <LinkedinIcon size={57} />
        </LinkedinShareButton>
        <WhatsappShareButton 
             url={"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8"}
             quote={"HablaFacil - Mantente informado"}
             hashtag="#HablaFacil">
              <WhatsappIcon size={57} />
        </WhatsappShareButton>
        </div>
    </div>
    );
}