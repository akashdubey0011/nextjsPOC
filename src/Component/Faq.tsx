"use client";
import { useState } from "react";

export default function Faq () {
    const [accord, setAccord] = useState<number>(0);

    const getAccordianIndex=(index:number)=> {
        setAccord(accord === index ? -1 : index);
    }

    let faqlist = [
        {
            'header': "What is the last date to file income tax returns in India?",
            'desc': "The standard deadline for filing individual income tax returns is July 31st of the assessment year, unless extended by the government."
        },
        {
            'header': "How can I check my income tax refund status?",
            'desc' : "You can check your income tax refund status online through the Income Tax Department's e-filing portal or the NSDL website using your PAN and the relevant assessment year."
        },
        {
            'header': "Are there any deductions available for investments under Section 80C?",
            'desc': "Yes, investments in instruments like PPF, ELSS, NSC, 5-year FDs, and expenses like life insurance premiums and children's tuition fees are eligible for deductions up to ₹1.5 lakh under Section 80C"
        },
        {
            'header': "What is the difference between the old and new tax regimes?",
            'desc': "The old tax regime allows various deductions and exemptions. In contrast, the new regime offers lower tax rates but forgoes most of these deductions and exemptions, including Section 80C, HRA, and LTA."
        },
        {
            'header': "Can I claim tax benefits on home loan interest and principal repayment?",
            'desc': "Yes, the interest on a home loan is deductible under Section 24, and the principal repayment is eligible for deduction under Section 80C."
        },
        {
            'header': "How do I rectify a mistake made in my income tax return after filing?",
            'desc': "You can file a revised return on the e-filing portal of the Income Tax Department before the end of the relevant assessment year or before the completion of the assessment, whichever is earlier."
        },
        {
            'header': "What are the consequences of not filing income tax returns?",
            'desc': "Not filing ITR can lead to penalties, interest on due taxes, and potential legal consequences. It's important to file ITR if your income exceeds the basic exemption limit."
        },
        {
            'header': "Is it mandatory to link Aadhaar with PAN for income tax purposes?",
            'desc': "Yes, it's mandatory to link your Aadhaar with your PAN for income tax purposes, including filing returns." 
        },
        {   
            'header' : "How can I calculate my taxable income from salary?",
            'desc': "To calculate taxable income from salary, subtract eligible exemptions like HRA, standard deduction, and professional tax from your gross salary. Then, apply deductions like those under Section 80C to get your taxable income."
        },
        {
            'header': "What should I do if I have not received Form 16 from my employer?",
            'desc': "If you haven't received Form 16, you can still file your returns using your salary slips, bank statements, and TDS certificates from banks (Form 16A) for other incomes. Ensure to report all your incomes accurately."
        }
    ]

  return (
    <>
        <div className="faq_container">
            <div className="wrapper">
                <h2 className="faq_header">FAQ</h2>
                <div className="accordian">
                    {   
                        faqlist.map((el,index) => {
                            return (
                                <>
                                    <div className="accordian_content">
                                        <span key={index} onClick={()=>getAccordianIndex(index)} className="accordian_header">{el.header}
                                        {accord===index ? <span className={"accordian_button close"}>-</span> : <span className="accordian_button open">+</span>}
                                        
                                        </span>
                                        {accord===index ? <p className="accordian_para">{el.desc}</p> : ''}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}
