import React from 'react'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

const Signup = () => {
  return (
    <main className='bg-[#202327] h-full rounded-3xl'>
        <div className='flex w-full grid grid-cols-3 gap-20 h-full justify-between'>
            <section className='pl-32 pb-32 pt-10 col-span-2'>
                <div>
                   <p className='text-center bg-gradient-to-r bg-clip-text text-transparent from-[#82DBF7] to-[#B6F09C] mb-24'>Log In</p>
                </div>
                <div>
                    <h1 className='text-4xl mb-6'>
                        <span className='text-white'>ED </span>
                        <span className='font-bold bg-gradient-to-t bg-clip-text text-transparent from-[#4D62E5] to-[#B6F09C]'>TECH</span>
                    </h1>
                    <h2 className='text-4xl text-white mb-20git'>Signup Now</h2>
                    <div className='grid grid-cols-2 gap-8'>
                        <FormInput 
                        type='text'
                        label='First name'
                        placeholder='First name'
                        />
                        <FormInput 
                        type='text'
                        label='Last name'
                        placeholder='Last name'
                        />
                        <FormInput 
                        type='password'
                        label='Password'
                        placeholder='Password'
                        />
                        <FormInput 
                        type='password'
                        label='Repeat password'
                        placeholder='Repeat Password'
                        />
                    </div>
                    <div>
                        <Checkbox 
                           
                        />
                        <Button 
                         text="Create free account"
                        />
                    </div>
                </div>
            </section>
            <section className='justify-self-end'>
                <img src="./assets/illustration.png" alt=""  className='h-full '/>
            </section>
        </div>
    </main>
  )
}

export default Signup