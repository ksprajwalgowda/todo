import React from 'react'
import { useState } from 'react';
export const Addtodo = (props) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const titlechange = (e) => {
        setTitle(e.target.value);
    }
    const descchange = (e) => {
        setDesc(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        // console.log("dsdas");
        props.onadd(title,desc);
        setDesc('');
        setTitle('');
    }
    return (
        <div className='container card p-4 mt-5'>
            <h1 className='mb-4'>Add</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={title} onChange={titlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Desc</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={desc} onChange={descchange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
