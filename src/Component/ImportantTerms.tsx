
export default function ImportantTerms() {

    let impTaxes = [
        {
            'imp_header': 'Assessment year (AY)',
            'data' : ['The year following the financial year in which your income is assessed and taxed.']
        },
        {
            'imp_header': 'Financial year (FY)',
            'data': ['The year in which you earn an income. In India, it runs from April 1st to March 31st of the following year.']
        },
        {
            'imp_header': 'Tax deducted at source (TDS)',
            'data': ['Tax that is deducted from your income (like salary, interest on savings, etc.) before you receive it.', 'Form 16: A certificate provided by the employer to the employee detailing the TDS on salary and providing details of income and deductions claimed.']
        },
        {
            'imp_header': 'Income tax return (ITR)',
            'data': ['The year following the financial year in which your income is assessed and taxed.']
        },
        {
            'imp_header': 'Deductions',
            'data': ['Certain investments and expenses that can be subtracted from your gross total income to reduce your taxable income (e.g., under Section 80C, 80D).']
        },
        {
            'imp_header': 'Exempt income',
            'data': ['Types of income that are not taxable, such as certain allowances or agricultural income']
        },
        {
            'imp_header': 'Standard deduction',
            'data': ['A flat amount subtracted from the salary income, allowed to salaried individuals and pensioners without any proof of expense or investment.']
        },
        {
            'imp_header': 'Capital gains',
            'data': ['Income that arises from the sale of a capital asset such as property, shares, or mutual funds']
        },
        {
            'imp_header': 'Advance tax',
            'data': ['Tax that needs to be paid in advance if your tax liability exceeds a certain threshold, instead of paying it at the end of the fiscal year.']
        },
    ]

    let saveTaxes = [
        {
            'header': 'Utilize Section 80C Deductions',
            'data': ['Invest in tax-saving instruments such as Public Provident Fund (PPF), National Savings Certificate (NSC), Equity-Linked Savings Scheme (ELSS), 5-year fixed deposits, and others.', "Paying towards life insurance premiums, children's tuition fees, and principal repayment of home loan also qualify for deductions under this section."]
        },
        {
            'header':'Health Insurance Premiums (Section 80D)',
            'data': ['Premiums paid for health insurance for self, family, and dependent parents can offer tax benefits. There are specific limits for the premiums paid for self and parents, especially if they are senior citizens.']
        },
        {
            'header': 'Home Loan Benefits',
            'data' : ['Claim tax benefits on the interest paid on home loan under Section 24.', 'The principal component of the loan repayment is eligible for deduction under Section 80C.']
        },
        {
            'header': 'Education Loan (Section 80E)',
            'data': ['Interest paid on education loans for higher studies can be claimed as a deduction.']
        },
        {
            'header': 'Donations (Section 80G)',
            'data': ['Contributions made to certain charitable organizations can be claimed as deductions.']
        },
        {
            'header': 'Invest in National Pension System (NPS) (Section 80CCD)',
            'data': ['Contributions to NPS are eligible for tax deductions. This not only helps save tax but also ensures a corpus for retirement.']
        },
        {
            'header': 'HRA and LTA',
            'data': ['If receiving House Rent Allowance (HRA), ensure to claim it. Similarly, Leave Travel Allowance (LTA) can be claimed for travel expenses.']
        },
        {
            'header': 'Plan and Document Investments Early',
            'data': ['Start planning your investments at the beginning of the financial year. Proper documentation and timely investments can save last-minute hassles.']
        }
    ]

    let taxReturn = [
        {
            'header': 'When to file',
            'data': ['The due date for filing ITR for individuals is typically July 31st of the assessment year, unless extended by the government. For example, for the financial year 2023-2024, the assessment year is 2024-2025, and the due date would ordinarily be July 31, 2024.']
        },
        {
            'header': 'How to file',
            'data': ["Gather Necessary Documents: Before filing, collect all necessary documents like Form 16 (if salaried), interest statements, TDS certificates, details of investments, etc.", "Choose the Right ITR Form: Select the appropriate ITR form based on your income sources. The forms range from ITR-1 to ITR-7, each catering to different types of income.", "Filing Process: You can file ITR online through the Income Tax Department's e-filing portal. The process involves registering on the portal, filling in the required details, uploading necessary documents, and verifying the return"]
        },
        {
            'header': 'Verify ITR',
            'data': ['After filing, the return must be verified, either electronically using Aadhaar OTP, EVC through net banking, or by sending a signed physical copy of the ITR-V to the Income Tax Central Processing Centre.']
        }
    ]

    let listpoints = [
        "Gather Necessary Documents: Before filing, collect all necessary documents like Form 16 (if salaried), interest statements, TDS certificates, details of investments, etc.", "Choose the Right ITR Form: Select the appropriate ITR form based on your income sources. The forms range from ITR-1 to ITR-7, each catering to different types of income.", "Filing Process: You can file ITR online through the Income Tax Department's e-filing portal. The process involves registering on the portal, filling in the required details, uploading necessary documents, and verifying the return"
    ]

  return (
    <>
        <section className="terms_container">
            <div className="wrapper">
                <h4 className="common_header">Important terms in income tax in India</h4>
                <p className="common_para">Understanding income tax requires familiarity with various terms and concepts. This section demystifies key terminologies that are frequently encountered in the realm of income tax.</p>

                <div className="tax_definition_container">
                    <ul className="definition_list"> 
                        {
                            impTaxes.map(el => {
                                return (
                                    <>
                                        <li className="definition_item">
                                            <span className="definition_header">
                                                {el.imp_header}
                                            </span>
                                            <p className="definition_content">
                                                {
                                                    el.data.map(elem => 
                                                        elem
                                                    )
                                                }
                                            </p>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <p className="terms_para">Understanding these terms not only aids in accurate tax calculation but also helps in effective tax planning.</p>
                </div>
            </div>
        </section>

        <section className="save_taxes">
            <div className="wrapper">
                <h4 className="common_header">How to save taxes and basic tax planning for indiviuals</h4>
                <p className="common_para terms_container_para">Effective tax planning is essential for individuals looking to minimise their tax liability within the legal framework. It involves understanding how to make the most of deductions, exemptions, and benefits offered under various sections of the Income Tax Act. 
                Here’s a basic guide to tax saving and planning:</p>

                <div className="tax_definition_container">
                    <ul className="definition_list"> 
                        {
                            saveTaxes.map(el => {
                                return (
                                    <>
                                        <li className="definition_item">
                                            <span className="definition_header">
                                               {el.header}
                                            </span>
                                            <p className="definition_content">
                                                {
                                                    el.data.map((elem:any)=> 
                                                        elem
                                                    )
                                                }
                                            </p>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                    <p className="terms_para">Remember, the key to effective tax planning is to understand your financial goals and align your investments accordingly while maximizing the benefits of various tax-saving provisions. It’s always advisable to consult with a financial advisor or tax consultant for personalized tax planning advice.</p>
                </div>
            </div>
        </section>

        <section className="tax_return">
            <div className="wrapper">
                <h4 className="common_header">How and when file income tax returns</h4>
                <p className="common_para terms_container_para">Filing income tax returns (ITR) is a crucial responsibility for every eligible individual in India. It's a process where you declare your income, deductions, and tax payments to the government. Here's a brief guide on how to go about it and the timelines:</p>

                <div className="tax_definition_container">

                    <div className="definition_item">
                        <span className="definition_header">
                            When to file
                        </span>
                        <p className="definition_content">
                            The due date for filing ITR for individuals is typically July 31st of the assessment year, unless extended by the government. For example, for the financial year 2023-2024, the assessment year is 2024-2025, and the due date would ordinarily be July 31, 2024.
                        </p>
                    </div>

                    <div className="definition_item">
                        <span className="definition_header">
                            How to file
                        </span>
                        <ul className="definition_list_points">
                            {
                                listpoints.map(el => {
                                    return (
                                        <>
                                            <li className="definition_content">
                                                <p>{el}</p>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="definition_item">
                        <span className="definition_header">
                            Verify ITR
                        </span>
                        <p className="definition_content">
                            After filing, the return must be verified, either electronically using Aadhaar OTP, EVC through net banking, or by sending a signed physical copy of the ITR-V to the Income Tax Central Processing Centre.
                        </p>
                    </div>
                    <p className="terms_para">Filing ITR on time helps avoid penalties and also serves as a vital document for various financial purposes like loan applications. It's always advisable to file your returns well before the deadline to avoid last-minute rush and technical glitches.</p>
                </div>
            </div>
        </section>
    </>
  )
}