import { AvForm, AvField } from 'availity-reactstrap-validation'
import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'


const PageModal = ({ toggleModal, active, addTask, EditToggle, editActive, editTask }) => {

    const SubmitForm = (event, values) => {
        addTask(values)
        toggleModal()
    }

    const EditSubmitForm = (event, values) => {
        editTask(values)
        EditToggle()
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    {/* Modal for Add Task */}
                    <Modal isOpen={active} toggle={toggleModal}>
                        <ModalHeader className='bg-dark'>Add task</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='form' onValidSubmit={SubmitForm}>
                                <AvField type='text' name='task' label='Task name' required />
                                <AvField type='select' name='status' label='Status' required>
                                    <option>open</option>
                                    <option>inprog</option>
                                    <option>completed</option>
                                </AvField>
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='form' color='outline-info btn-sm'>ok</Button>
                            <Button color='outline-warning btn-sm mx-2' onClick={toggleModal}>cancel</Button>
                        </ModalFooter>
                    </Modal>

                    {/* Modal for Edit Task */}
                    <Modal isOpen={editActive} toggle={EditToggle}>
                        <ModalHeader className='bg-dark'>Edit task</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='ww' onValidSubmit={EditSubmitForm}>
                                <AvField type='text' name='task' label='Task name' required />
                                <AvField type='select' name='status' label='Status' required>
                                    <option>open</option>
                                    <option>inprog</option>
                                    <option>completed</option>
                                </AvField>
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='ww' color='outline-info btn-sm'>ok</Button>
                            <Button color='outline-warning btn-sm mx-2' onClick={EditToggle}>cancel</Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>

        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        addTask: (values) => {
            dispatch({
                type: 'addTask',
                values: values,
            })
        },

        editTask: (values) => {
            dispatch({
                type: 'editTask',
                values: values,
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(PageModal)