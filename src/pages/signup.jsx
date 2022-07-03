import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../css/signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heading } from '@chakra-ui/react';
import { Input , InputGroup , InputRightElement , Button } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';


function signup(){
    
  
    return(
        <>
    <div className="container">
        <div className='col-lg-5 col-md-6 col-12 SignupForm' >
        <Heading as='h2' size='2xl' className='p-0 m-0 welcome-heading'> Welcome to Altius Investech </Heading>
        <Heading as='h6' size='xs' className="p-0 m-0 welcome-sub-heading f-14">Buy and Sell Unlisted shares, Pre-IPO Shares and ESOPs</Heading>
        <div className='SignupBox'>
            <div className='form-group mt-1 mb-2'>
               <p className="m-0 ml-2 mb-2 p-0 f-14 font-weight-bold">Email</p>
               <Input placeholder='Enter your email' borderColor='blue.500' size='lg' variant='outline'></Input>
            </div>
            <div className='form-group mt-4 mb-2' >
               <p className="m-0 ml-2 mb-2 p-0 f-14 font-weight-bold">Password</p>
              
            </div>
            <div className='form-group mt-1 mb-2'>
               <p className="m-0 ml-2 mb-2 p-0 f-14 font-weight-bold">Mobile No</p>
               <Input placeholder='Enter your Phone No. ' borderColor='blue.500' size='lg' variant='outline'></Input>
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
            <Button className='signIn-button curPoint' border='2px' colorScheme='blue'>Sign up</Button>
        </div>
        <div className='form-group mt-2 mb-0 '>
            <Button className='signIn-button curPoint' border='1px' variant='outline' colorScheme='blue'>Sign up with Google</Button>
        </div>

        <div style={{color:'grey'}}>
            <p className="f-14 m-0 p-0 noAccount">Have an account already?<span className="curPoint" style={{color: 'blue'}}>
                <a href="/login">Login</a> </span>
            </p>
        </div>
    </div>
    </div>
    </>
    )
}

export default signup;