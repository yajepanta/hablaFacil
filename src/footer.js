import logoPic from './logoFooter.svg'
import fbPic from './fbFooter.svg'
import instaPic from './instaFooter.svg'

export function FooterH () {
    return(
    <div className='footerContainer'>
        <div className='footer'>
            <div className='footerImgDiv'>
                <img src={logoPic} alt={"logoF pic"} className='imgFooter'/>
            </div>
            <div className='footerDiv'>
                <p>Encuentranos en:</p>
                <div>
                <a href='/#'><img src={fbPic} alt={"fbF pic"} className='imgF'/></a>
                <a href='https://www.instagram.com/hablafacilpe/'><img src={instaPic} alt={"instaF pic"} className='imgF'/></a>
                </div>
                <p>©2021 Copyright Squad 7</p>
            </div>
        </div>
    </div>
    )
}