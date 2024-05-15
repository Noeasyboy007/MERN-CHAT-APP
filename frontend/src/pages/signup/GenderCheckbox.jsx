const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex'>

            {/* For male check box */}
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                    <span className='label-text'>Male</span>
                    <input
                        type='checkbox'
                        className='checkbox border-white'

                        checked={selectedGender === 'male'}
                        onChange={() => onCheckboxChange('male')}
                    />
                </label>
            </div>

            {/* For Female Check box */}
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
                    <span className='label-text'>Female</span>
                    <input
                        type='checkbox'
                        className='checkbox border-white'

                        checked={selectedGender === 'female'}
                        onChange={() => onCheckboxChange('female')}
                    />
                </label>
            </div>

        </div>
    )
}

export default GenderCheckbox




// STATER CODE FOR THE CHECK BOX COMPONENT

// const GenderCheckbox = () => {
//     return (
//         <div className='flex'>

//             {/* For male check box */}
//             <div className='form-control'>
//                 <label className={'label gap-2 cursor-pointer '}>
//                     <span className='label-text'>Male</span>
//                     <input
//                         type='checkbox'
//                         className='checkbox border-white'

//                     />
//                 </label>
//             </div>

//             {/* For Female Check box */}
//             <div className='form-control'>
//                 <label className={'label gap-2 cursor-pointer '}>
//                     <span className='label-text'>Female</span>
//                     <input
//                         type='checkbox'
//                         className='checkbox border-white'

//                     />
//                 </label>
//             </div>

//         </div>
//     )
// }

// export default GenderCheckbox
