import React from 'react'

const Contact = () => {
    return (
        <div  className='main_container'>

            <form style={{padding:"2rem 1.5rem",width:"70%",margin:"auto"}} className='shadow-lg'>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Enter Your Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"required/>
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput2">Enter Your Phone Number</label>
                    <input type="number" class="form-control" id="exampleFormControlInput2"required/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Any Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"required></textarea>
                </div>
                <input type="submit" value="Submit" className='btn btn-primary' />

            </form>
            </div>
    )
}

export default Contact