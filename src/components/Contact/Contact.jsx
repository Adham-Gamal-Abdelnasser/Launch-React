import React, { useState } from 'react'
import InputField from '../Field/Field.jsx';

export default function Contact() {
    const [inputsData, setInputsData] = useState([
        { labelName: 'Name', inputId: 'name', id:1, type: 'text', placeholder: 'Enter your name' },
        { labelName: 'Email', inputId: 'email', id:2, type: 'email', placeholder: 'Enter your email' },
        { labelName: 'Password', inputId: 'password', id:4, type: 'password', placeholder: 'Enter your password' },    
        { labelName: 'Subject', inputId: 'subject', id:3, type: 'text', placeholder: 'Enter subject' },
    ]);
  return (
    <>
        <section className="py-24 bg-gray-2">
            <div className="w-3/4 mx-auto">
                <form>
                    {inputsData.map(input => <InputField key={input.id} inputDetails={input} />)}
                    <button className="w-full font-main bg-transparent p-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">Submit</button>
                </form>
            </div>
        </section>

    </>
  )
}
