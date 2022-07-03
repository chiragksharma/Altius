import React from 'react';
import { useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../css/Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heading } from '@chakra-ui/react';
import { Input , InputGroup , InputRightElement , Button } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';


function Hero(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return(
        <>
    <div className="container">
        <div className='col-lg-5 col-md-6 col-12 LoginForm' >
        <Heading as='h2' size='2xl' className='p-0 m-0 welcome-heading'> Welcome to Altius Investech </Heading>
        <Heading as='h6' size='xs' className="p-0 m-0 welcome-sub-heading f-14">Buy and Sell Unlisted shares, Pre-IPO Shares and ESOPs</Heading>
        <div className='LoginBox'>
            <div className='form-group mt-1 mb-2'>
               <p className="m-0 ml-2 mb-2 p-0 f-14 font-weight-bold">Email</p>
               <Input placeholder='Enter your email' borderColor='blue.500' size='lg' variant='outline'></Input>
            </div>
            <div className='form-group mt-4 mb-2' >
               <p className="m-0 ml-2 mb-2 p-0 f-14 font-weight-bold">Password</p>
               
               <InputGroup size='md'>
      <Input
        size='lg'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        borderColor='blue.500'
      />
      <InputRightElement width='4.5rem'>
        <Button h='2rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
            </div>
        </div>
        <div className="form-group mt-4 mb-0">
            <div className="row mx-1">
                <div className="col-6 pl-1 d-flex align-items-center">
                    
                    <Checkbox  id="exampleCheck1" className="m-0 ml-2 p-0 f-12 ">Remember me</Checkbox>
                        {/* <label className="m-0 ml-2 p-0 f-12 font-weight-bold">Remember me?</label> */}
                        </div>
                        <div className="col-6 pr-1 text-right">
                            <label className="m-0 ml-2 p-0 f-12  curPoint">Forgot Password?</label>
                </div>
             </div>
                            
        </div>
        <div className='form-group mt-2 mb-0 '>
           
            <Button className='signIn-button curPoint' border='2px' colorScheme='blue'>Sign in</Button>
        </div>
        <div className='form-group mt-2 mb-0 '>
            <Button className='signIn-button curPoint' border='1px' variant='outline' colorScheme='blue'>Sign in with Google</Button>
        </div>

        <div style={{color:'grey'}}>
            <p className="f-14 m-0 p-0 noAccount">Don't have an account?<span className="curPoint" style={{color: 'blue'}}> 
            <a href="/signup">Sign up </a> 
            </span>
            </p>
        </div>





        </div>
        <div className='col-md-5 welcomeimg col-12'>
            <div class="blueBack"></div>
            <img src="/headerImg.11811607.svg" alt="" className='headerImg' />
        </div>
        
        
    </div>
    <div className="arrowDivLeft">
            
            <img src="/arr1.a7213c0d.svg" alt="" />

    </div>
    </>
    )
}

export default Hero;