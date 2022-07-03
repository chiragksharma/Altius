
import '../css/info.css';
import { Heading } from '@chakra-ui/react';
import Marquee from "react-fast-marquee";
import { Center, Square, Circle } from '@chakra-ui/react';

const Info = () => {
    return(
        <div>
            {/* INVEST IN DIV */}
            <div className="investdiv">
                <div className='investin'>
                    <Heading className='p-0 m-0 welcome-heading'>Invest In</Heading>
                    <div className='row' id='test'>
                    <Marquee speed= '100' pauseOnHover>
                                    <Square  className='circles'>
                                        <img src="/Altius_logo.png" alt="_logo" />
                                        
                                    </Square>

                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                                    <Square  className='circles'></Square>
                    </Marquee>
                        {/* <div className='marquee'>
                            <ul className='marquee-content'>
                                

                            </ul>
                        </div> */}
                    </div>
                    <p class="p-0 m-0 mt-4 investDetail" >
                        Altius is India’s leading platform which facilitates buying and selling of Unlisted, Pre-IPO and privately held shares. We ensure liquidity for our clients by providing a two-way (buy &amp; sell) quote on all investments on our platform, fostering trust and transparency.
                    </p>
                </div>
            </div>
            <div className="arrowDivRight">             
             <img src="/arr2.a18a818d.svg" alt="" />
            </div>


            <div className='investdiv'>
            <div className='row mt-4 mx-1 align-items-center'>
              <div className='col-md-7 col-12 p-0 investin' >
                <div className='aboutCont'>
                <Heading className="m-0 p-0 welcome-heading text-left">Making Investments Quick &amp; Simple</Heading>
                <p className=" aboutTextpace m-0 p-0 welcome-sub-heading text-left">
                 At Altius, we value your precious time. So we have built a 
                  <b>secure platform</b> that allows you to invest seamlessly, <b>in a few clicks!</b> <br />Start you hassle free investments now!</p>
                 <p className=" aboutTextpace m-0 p-0 f-18 font-weight-bold text-left">Invest in just 3 simple steps</p>
                </div>

              </div>
              <div className='col-md-5 col-12 p-0 howItWorksBox'>
                <div className='howItWorks'>
                <div className='howItWorksCont'>
                    <div className='my-0 mx-2 row align-items-center'>
                        <div className='col-11 p-0 m-0'>
                            <div className='row m-1 align-items-center'>
                                <div className='col-lg-2 col-md-3 col-2 p-0'>
                                    <div className='poFamiliStep'>
                                        <img src="/kyc.13d3fc63.svg" alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-10 col-md-9 col-10 p-0'>
                                <p className="m-0 f-14 text-left">Sign up and Complete KYC</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='howItWorksStepLine'>
                        <div className='howItWorksStepCircle'></div>
                    </div>

                    <div className='my-0 mx-2 row align-items-center'>
                        <div className='col-11 p-0 m-0'>
                            <div className='row m-1 align-items-center'>
                                <div className='col-lg-2 col-md-3 col-2 p-0'>
                                    <div className='poFamiliStep'>
                                        <img src="/kyc.13d3fc63.svg" alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-10 col-md-9 col-10 p-0'>
                                <p className="m-0 f-14 text-left">Place order</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='howItWorksStepLine'>
                        <div className='howItWorksStepCircle'></div>
                    </div>

                    <div className='my-0 mx-2 row align-items-center'>
                        <div className='col-11 p-0 m-0'>
                            <div className='row m-1 align-items-center'>
                                <div className='col-lg-2 col-md-3 col-2 p-0'>
                                    <div className='poFamiliStep'>
                                        <img src="/kyc.13d3fc63.svg" alt="" />
                                    </div>
                                </div>
                                <div className='col-lg-10 col-md-9 col-10 p-0'>
                                <p className="m-0 f-14 text-left">Place order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>   

            <div className="arrowDivLeft">
            
            <img src="/arr1.a7213c0d.svg" alt="" />

    </div>       
         </div>
        </div>

    )
}

export default Info;