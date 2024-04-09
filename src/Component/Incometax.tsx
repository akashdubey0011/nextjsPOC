import Image from 'next/image';

export default function Incometax() {

  return (
    <>
    <section className='liable_section'>
        <div className="wrapper">
            <div className="liable_header">
                <span className='feature'>
                    <span>Features</span> 
                </span>
            </div>
            <div className="flex sm:flex-col flex-row">
                <h3 className='liable_header'>Who is liable to pay income tax ?</h3>
                <p className='liable_para'>Every individual whose total income exceeds the minimum exemption limit set by the government is liable to pay income tax. This includes salaried employees, self-employed professionals, business owners, etc.</p>
            </div>
        </div>
    </section>
    </>
  )
}
