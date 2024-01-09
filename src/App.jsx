import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import PageModal from './Modals/PageModal'

const App = ({ tasks, pushTask }) => {

    const [active, setActive] = useState(false)
    const [editActive, setEditActive] = useState(false)

    const toggleModal = () => {
        setActive(prev => !prev)
    }

    const EditTask = (item) => {
        pushTask(item)
        setEditActive(prev => !prev)
    }

    const EditToggle = () => {
        setEditActive(prev => !prev)

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="card my-2">
                        <div className="card-header">
                            <h5>Umumiy tasklar soni:{tasks.length}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card my-2">
                        <div className="card-header d-flex">
                            <h5 className='mx-3'>Open:
                                {
                                    tasks.filter((item) => item.status === 'open').length
                                }
                            </h5>
                        </div>

                    </div>
                    <div className="card card-body">
                        {tasks.filter((item) => item.status === 'open')
                            .map((item, index) =>
                                <div key={index} className='border border-info p-2 my-2'>
                                    {item.title}
                                    <button className='btn btn-outline-info float-end' onClick={()=>EditTask(item)}>edit</button>
                                </div>)}
                        <div className="d-grid my-2">
                            <button className='btn btn-primary' onClick={toggleModal}>Add task</button>
                            <PageModal active={active} toggleModal={toggleModal} EditToggle={EditToggle} editActive={editActive} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card my-2">
                        <div className="card-header d-flex">
                            <h5 className='mx-2'>completed:
                                {
                                    tasks.filter((item) => item.status === 'completed').length
                                }
                            </h5>
                        </div>
                    </div>
                    <div className="card card-body">
                        {tasks.filter((item) => item.status === 'completed')
                            .map((item, index) =>
                                <div key={index} className='border border-info p-2 my-2'>
                                    {item.title}
                                    <button className='btn btn-outline-info float-end'>edit</button>
                                </div>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pushTask: (item) => {
            dispatch({
                type: 'pushTask',
                item: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)