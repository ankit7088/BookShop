import React from 'react'

const branchName = [
{name:'CSE'},
{name:'IT'},
{name:'ECE'},
{name:'EE'},
{name:'ME'},
{name:'PIE'},
{name:'CE'},
{name:'BT'},];

const semValue = [
    {sem:'1st'},
    {sem:'2nd'},
    {sem:'3rd'},
    {sem:'4th'},
    {sem:'5th'},
    {sem:'6th'},
    {sem:'7th'},
    {sem:'8th'},
];

const Sidebar = () => {
  return (
    <div className='w-64 top-[66px]  h-full left-0 fixed bg-stone-700 p-3 text-white'>
        <h1>Filter</h1>

       <div className='divider '></div>

        <div className='my-4 form-control'>
        <h1 className='pb-4'>Branch</h1>
       {
        branchName.map(branch=><div key={branch.name} className='flex items-center gap-2 my-1'>
            <input className='radio radio-sm radio-accent' type="radio" id={branch.name} name="branch" value={branch.name}/>
        <label htmlFor={branch.name}>{branch.name}</label>
        </div>)
       }
        </div>

        <div className='my-4 form-control'>
        <h1 className='pb-4'>Semester</h1>
        <div className='flex flex-wrap'>
        {
        semValue.map(semVal=><span key={semVal.sem} className='flex items-center gap-2 my-1 w-16'>
            <input className='radio radio-sm radio-accent' type="radio" id={semVal.sem} name="semester" value={semVal.sem}/>
        <label htmlFor={semVal.sem}>{semVal.sem}</label>
        </span>)
       }
        </div>
        </div>
    </div>
  )
}

export default Sidebar