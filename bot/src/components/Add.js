import { useState } from 'react'

const AddRobot = ({onAdd}) => {
    const [name, setName] = useState('')
    const [damage, setDamage] = useState('')
    const [armor, setArmor] = useState('')
    const [dot_class, setDot_class] = useState('')
    const [url, setUrl] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please fill all fields')
            return
        }

        onAdd({name, damage, armor, dot_class, url})

        setName('')
        setDamage('')
        setArmor('')
        setDot_class('')
        setUrl('')
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" placeholder='Add name'
                value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Damage</label>
                <input type="text" placeholder='Add damage'
                value={damage} onChange={(e)=> setDamage(e.target.value)}/>
            </div>
            <div className='form-control' >
                <label>Armor</label>
                <input type="text" placeholder='Add amor'
                value={armor} onChange={(e)=> setArmor(e.target.value)}/>
            </div>

            <div className='form-control form-control-check' >
                <label>Dot_class</label>
                <input type="text" placeholder='Add dot_class'
                value={dot_class} onChange={(e)=> setDot_class(e.target.value)}/>
            </div>

            <div className='form-control form-control-check' >
                <label>Image Link</label>
                <input type="text" placeholder='Add url'
                value={url} onChange={(e)=> setUrl(e.target.value)}/>
            </div>

            <input type="submit" value='Save Robot'
            className='btn btn-block'/>
        </form> 
    )
}

export default AddRobot