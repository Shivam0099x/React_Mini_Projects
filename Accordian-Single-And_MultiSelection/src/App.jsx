import React, { useState } from 'react'

const data = [
  {
    id: 1,
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with a tracking link. You can also log into your account and visit 'My Orders' to see real-time updates."
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy. Items must be unused and in original packaging. Refunds are processed within 5-7 days after we receive the item."
  },
  {
    id: 3,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 40 countries. International shipping costs and delivery times vary by destination. Customs fees may apply."
  },
  {
    id: 4,
    question: "Can I change or cancel my order?",
    answer: "Contact our support team within 1 hour of placing the order. Once the order enters fulfillment, we can't modify it, but you can return it after delivery."
  },
  {
    id: 5,
    question: "Is my payment information secure?",
    answer: "Absolutely. We use 256-bit SSL encryption and never store your full credit card details. All transactions go through PCI-compliant payment gateways."
  },
];


const App = () => {

  const [selected, setSelected ] = useState(null);

  const [multi, setMulti] = useState(false)


  const handleClick = (id)=>{
      setSelected( selected === id ? null : id)
  }

  const handleMultiSelection = ()=>{
    setMulti(multi === false ? true : false)
  }



  return (
    <div className='bg-zinc-900 min-h-screen w-full text-white flex items-center gap-10 p-10 flex-col'>
     
     <h2 className='text-3xl font-bold '>Accordian</h2>

     <h2 className='px-3 py-2 bg-blue-800 rounded-xl' onClick={()=> handleMultiSelection()} >Multi Selection</h2>

     <div className='w-[50%] min-h-[50%] flex flex-col justify-between items-center p-5 gap-3'>

      {
        data && (
          data.map((item)=>(
            <div className='w-[80%] p-5 bg-blue-900 rounded-xl '>
                 <h2 className='flex justify-between' onClick={(e)=>handleClick(item.id)} >
                  {item.question} <span className='text-xl font-bold'>+</span>
                 </h2>
                 {
                  selected === item.id ? (<div>
                    {item.answer}
                  </div>):null
                 }

                 {
                  multi && (<div>
                    {item.answer}
                  </div>)
                 }
            </div>
          ))
        )
      }

     </div>
      
    </div>
  )
}

export default App
