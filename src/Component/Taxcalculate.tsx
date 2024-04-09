
export default function TaxCalculate() {

    let arr = [
        {
            'tax_header': 'Heads of Income',
            'data' : ['Salary Income: Includes wages, pension, allowances, and other benefits from employment.',
            'Income from House Property: Income from a property you own, minus deductions for taxes, interest on home loans, and a standard deduction of 30%.',
            'Profits and Gains from Business or Profession: Income from your business or professional services after deducting expenses.',
            'Capital Gains: Income from the sale of capital assets like property, shares, bonds, etc., categorized as short-term or long-term based on the holding period.',
            'Income from Other Sources: Includes interest from savings accounts, fixed deposits, winnings from lotteries, etc.'
        ]
        },
        {
            'tax_header': 'Deductions and Exemptions',
            'data' : ['Deduct eligible investments and expenditures (like those under Section 80C, 80D, etc.) from the gross total income.',
            'Apply exemptions such as House Rent Allowance (HRA), Leave Travel Allowance (LTA), etc., if applicable.',
        ]
        },
        {
            'tax_header': 'Calculation of Taxable Income',
            'data' : ['Aggregate the income from all the heads.',
            'Subtract the eligible deductions and exemptions.',
            'The result is your net taxable income, which is then subject to tax according to the applicable income tax slabs.'
        ]
        }
    ]
  return (
    <>
      <section className="tax_calculated_section">
        <div className="wrapper">
            <h3 className='tax_calculate_header'>How is tax calculated</h3>
            <p className="tax_calculate_para">The income tax Act, 1962 offers two regimes – the Old Regime and the New Regime, each with its own set of tax slabs</p>

            <div className="regime_container">
                <div className="regime_item">
                    <h4 className="regime_header">Old regime</h4>
                    <div className="regime_content">
                        <p className="regime_content_para">The old Regime allows for various deductions and exmetions which can reduce taxable imcome</p>
                        <p className="regime_content_para">Tax Slabs under the Old Regime</p>
                        <ul className="regime_content_slabs">
                            <li>Up to 2,50,000: Nil</li>
                            <li>Up to 2,50,000: Nil</li>
                            <li>Up to 2,50,000: Nil</li>
                            <li>Up to 2,50,000: Nil</li>
                        </ul>

                        <p className="regime_content_para">This regime is beneficial for those who have significant investments and expenses that qualify for deductions under various section of the Income Tax Act</p>
                    </div>
                </div>
                <div className="regime_item">
                    <h4 className="regime_header">New regime</h4>
                    <div className="regime_content">
                        <p className="regime_content_para">Introduced in the 2020 budget, the New Regime offers lower tax rates but foregoes most of the exemptions and deductions available under the Old Regime.</p>
                        <p className="regime_content_para">Tax Slabs under the New Regime</p>
                        <ul className="regime_content_slabs">
                            <li>Up to ₹2,50,000: Nil</li>
                            <li>₹2,50,001 to ₹5,00,000: 5%</li>
                            <li>₹5,00,001 to ₹7,50,000: 10%</li>
                            <li>₹7,50,001 to ₹10,00,000: 15%</li>
                            <li>₹10,00,001 to ₹12,50,000: 20%</li>
                            <li>₹12,50,001 to ₹15,00,000: 25%</li>
                            <li>Above ₹15,00,000: 30%</li>
                        </ul>

                        <p className="regime_content_para">This regime is suitable for individuals who don’t have many deductions or prefer a simpler tax calculation without the hassle of tracking investments and expenses for deductions.</p>
                    </div>
                </div>
            </div>
            <div className="choosing_regimes">
                <h4 className="tax_calculate_header">Choosing between the regimes</h4>
                <p className="choosing_regime_para">The choice depends on factors like the amount of income, available deductions, and personal financial goals. Salaried individuals have the flexibility to choose between these two regimes based on what is more beneficial for them.</p>
                <p className="choosing_regime_para">It's essential for taxpayers to evaluate both regimes carefully, considering their individual circumstances, to determine which regime offers them the most tax-efficient outcome. The decision can significantly impact one's overall tax liability.</p>
            </div>
        </div>
      </section>
      <section className="tax_income_calculated_section">
        <div className="wrapper">
            <div className="tax_income_header">
                <h4>How is taxable income calculated?</h4>
                <p>Understanding how taxable income is calculated is crucial for every taxpayer. Taxable income in India is determined by aggregating the income from various sources and then applying the relevant deductions and exemptions. The process involves several key steps and considerations under different heads of income. Here's a brief overview:</p>
            </div>

            {
                arr.map(el => {
                    return (
                        <>
                            <div className="tax_income_pills">
                                <p>{el.tax_header}</p>
                                <ul className="tax_income_list">
                               { el.data.map((ele:any)=>{
                                                return <li>{ele}</li>
                                            })
                                        }
                                </ul>
                            </div>
                        </>
                    )
                })
            }
        </div>

      </section>
    </>
  )
}
